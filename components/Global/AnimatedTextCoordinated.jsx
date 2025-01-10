import { useEffect, useState } from "react";
import styles from "./AnimatedTextCoordinated.module.css";
import { useAnimatedTextCoordinator } from "./AnimatedTextCoordinatorProvider";

export default function AnimatedTextCoordinated({
  children,
  id,
  typingSpeed = 50,
}) {
  const [displayText, setDisplayText] = useState("");

  const { currentAnimatingId, setCurrentAnimatingId } =
    useAnimatedTextCoordinator();

  const isTyping = currentAnimatingId === id;

  useEffect(() => {
    let timeout;

    const typeText = (text, index = 0) => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index)); // Show next character
        timeout = setTimeout(() => typeText(text, index + 1), typingSpeed); // Typing speed
      }
    };

    if (isTyping) {
      typeText(children);
    }

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [children, isTyping]);

  useEffect(() => {
    if (displayText === children) {
      setCurrentAnimatingId((prev) => prev + 1);
    }
  }, [displayText, children, setCurrentAnimatingId]);

  useEffect(() => {
    if (children) {
      setDisplayText("");
    }
  }, [children]);

  return (
    <span className={`${styles.text} ${isTyping ? styles.blinking : ""}`}>
      {displayText}
    </span>
  );
}
