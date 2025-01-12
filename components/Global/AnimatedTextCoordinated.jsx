import { useEffect, useState } from "react";
import styles from "./AnimatedTextCoordinated.module.css";
import { useAnimatedTextCoordinator } from "./AnimatedTextCoordinatorProvider";

export default function AnimatedTextCoordinated({
  children,
  id,
  typingSpeed = 50,
}) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const { currentAnimatingId, updateAnimatingIdCalls, setId } =
    useAnimatedTextCoordinator();

  useEffect(() => {
    setId(id);
  }, [id, setId]);

  useEffect(() => {
    if (currentAnimatingId === id) {
      setIsTyping(true);
    }
  }, [currentAnimatingId, id]);

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
      setIsTyping(false);
    }
    if (displayText === children && currentAnimatingId === id) {
      updateAnimatingIdCalls(id);
    }
  }, [displayText, children, updateAnimatingIdCalls, currentAnimatingId]);

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
