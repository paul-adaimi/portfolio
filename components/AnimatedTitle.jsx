import { useEffect, useState } from "react";
import styles from "./AnimatedTitle.module.css";
import { useAnimatedTitle } from "./AnimatedTitleProvider";

export default function AnimatedTitle({ children }) {
  const [displayText, setDisplayText] = useState(""); // Current visible text

  const { isAnimating, setIsAnimating } = useAnimatedTitle();

  useEffect(() => {
    let timeout;

    const typeText = (text, index = 0) => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index)); // Show next character
        timeout = setTimeout(() => typeText(text, index + 1), 150); // Typing speed
      } else {
        setIsAnimating(false); // Typing complete
      }
    };

    const eraseText = (text, index = text.length) => {
      if (index >= 0) {
        setDisplayText(text.slice(0, index)); // Remove last character
        timeout = setTimeout(() => eraseText(text, index - 1), 75); // Erasing speed
      } else {
        typeText(children); // Start typing new text
      }
    };

    if (children !== displayText) {
      setIsAnimating(true);
      eraseText(displayText); // Start erasing the current text
    }

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [children]);

  return (
    <div className={styles.titleContainer}>
      <p className={styles.title}>{"<"}</p>
      <h1
        aria-hidden="true"
        className={`${styles.animatedTitle} ${
          isAnimating ? styles.blinking : ""
        }`}
      >
        {displayText}
      </h1>
      <h1 className={styles.staticTitle}>{displayText}</h1>
      <p className={styles.title}>{">"}</p>
    </div>
  );
}
