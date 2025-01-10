import { useEffect, useState } from "react";
import styles from "./AnimatedTextIndependant.module.css";

export default function AnimatedTextIndependant({
  children,
  typingSpeed = 100,
  shouldType = true,
}) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;

    const typeText = (text, index = 0) => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index)); // Show next character
        timeout = setTimeout(() => typeText(text, index + 1), typingSpeed); // Typing speed
      }
    };

    if (shouldType) {
      typeText(children);
    }

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [children, shouldType]);

  useEffect(() => {
    if (displayText === children) {
      setIsTyping(false);
    }
  }, [displayText, children]);

  useEffect(() => {
    if (children) {
      setDisplayText("");
    }
  }, [children]);

  const shouldBlink = shouldType && isTyping;

  return (
    <span className={`${styles.text} ${shouldBlink ? styles.blinking : ""}`}>
      {displayText}
    </span>
  );
}
