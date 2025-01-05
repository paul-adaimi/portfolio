import { useEffect, useState, cloneElement } from "react";
import styles from "./AnimatedText.module.css";

const AnimatedText = ({ children, chunks = [], startPercentage = 0.3 }) => {
  const [visibleLength, setVisibleLength] = useState(0);

  // Function to calculate the total length, treating chunks as single units
  const getTotalLength = (children) => {
    if (typeof children === "string") {
      let length = children.length;
      chunks.forEach((chunk) => {
        const index = children.indexOf(chunk);
        if (index !== -1) {
          length -= chunk.length - 1; // Treat chunk as a single unit
        }
      });
      return length;
    }
    if (Array.isArray(children)) {
      return children.reduce(
        (length, child) => length + getTotalLength(child),
        0
      );
    }
    if (typeof children === "object" && children !== null) {
      return getTotalLength(children.props.children);
    }
    return 0;
  };

  // Function to get the visible content
  const getVisibleContent = (children, visibleLength) => {
    if (typeof children === "string") {
      let remaining = visibleLength;
      let result = "";

      // Process chunks
      let currentIndex = 0;
      for (const chunk of chunks) {
        const chunkIndex = children.indexOf(chunk, currentIndex);
        if (chunkIndex !== -1 && remaining > 0) {
          if (chunkIndex <= remaining) {
            result += children.slice(currentIndex, chunkIndex);
            result += chunk; // Add the whole chunk
            remaining -= chunkIndex + chunk.length - currentIndex;
            currentIndex = chunkIndex + chunk.length;
          }
        }
      }

      // Add remaining characters after chunks
      result += children.slice(currentIndex, currentIndex + remaining);
      return result;
    }

    if (Array.isArray(children)) {
      let remaining = visibleLength;
      return children.map((child, index) => {
        const childLength = getTotalLength(child);
        if (remaining > 0) {
          const visibleContent = getVisibleContent(child, remaining);
          remaining -= childLength;
          return visibleContent;
        }
        return null;
      });
    }

    if (typeof children === "object" && children !== null) {
      const childLength = getTotalLength(children.props.children);
      if (visibleLength > 0) {
        const visibleContent = getVisibleContent(
          children.props.children,
          visibleLength
        );
        return cloneElement(children, { children: visibleContent });
      }
      return null;
    }

    return null;
  };

  const totalLength = getTotalLength(children);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollTop / documentHeight;

      // Adjust scroll percentage to start animation after `startPercentage`
      const adjustedScrollPercentage =
        Math.max(scrollPercentage - startPercentage, 0) / (1 - startPercentage);

      // Calculate how much of the text should be visible
      const visibleChars = Math.floor(totalLength * adjustedScrollPercentage);
      setVisibleLength(visibleChars);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalLength, startPercentage]);

  return (
    <p className={styles.animatedText}>
      {getVisibleContent(children, visibleLength)}
    </p>
  );
};

export default AnimatedText;
