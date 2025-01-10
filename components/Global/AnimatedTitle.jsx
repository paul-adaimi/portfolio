import { useCallback, useEffect, useState, useRef } from "react";
import styles from "./AnimatedTitle.module.css";
import { useAnimatedTitle } from "./AnimatedTitleProvider";

export default function AnimatedTitle({ children }) {
  const [displayText, setDisplayText] = useState(""); // Current visible text
  const [previousChildren, setPreviousChildren] = useState(null);
  const timeout = useRef(null);

  const { isAnimating, setIsErasing, setIsWriting } = useAnimatedTitle();

  const typeText = useCallback(
    (index = 0) => {
      const text = children;

      if (index <= text.length) {
        setDisplayText(text.slice(0, index)); // Show next character
        timeout.current = setTimeout(() => typeText(index + 1), 150); // Typing speed
      } else {
        setIsWriting(false);
      }
    },
    [children, setIsWriting]
  );

  const eraseText = useCallback(
    (index = displayText.length) => {
      if (index >= 0) {
        setDisplayText(displayText.slice(0, index)); // Remove last character
        timeout.current = setTimeout(() => eraseText(index - 1), 75); // Erasing speed
      } else {
        setIsWriting(true);
        setIsErasing(false);
        typeText(); // Start typing new text
      }
    },
    [displayText, typeText, setIsWriting, setIsErasing]
  );

  useEffect(() => {
    if (previousChildren !== children) {
      setPreviousChildren(children); // Update the state with the current children
    }
  }, [children, previousChildren]);

  useEffect(() => {
    if (children !== previousChildren) {
      clearTimeout(timeout.current); // Clear any existing timeout
      setIsErasing(true);
      eraseText(); // Start erasing the current text
    }
  }, [children, previousChildren, eraseText, setIsErasing]);

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
