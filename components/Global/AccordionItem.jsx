import { useEffect, useState } from "react";
import styles from "./AccordionItem.module.css";
import AnimatedTextIndependant from "./AnimatedTextIndependant";

export default function AccordionItem({
  item,
  index,
  isFirst,
  isLast,
  isOpen,
  handleToggle,
}) {
  const [isCurrentlyOpen, setIsCurrentlyOpen] = useState(isOpen);
  const [shouldType, setShouldType] = useState(false);

  useEffect(() => {
    // if it's closing delay the currentlyOpen state change
    if (!isOpen) {
      setShouldType(false);
      const timeout = setTimeout(() => {
        setIsCurrentlyOpen(false);
      }, 500);
      return () => clearTimeout(timeout);
    } else {
      setIsCurrentlyOpen(true);
      const timeout = setTimeout(() => {
        setShouldType(true);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  return (
    <div
      key={index}
      className={`${styles.accordionItem} ${isFirst && styles.first} ${
        isLast && styles.last
      } ${isOpen && styles.selected}`}
    >
      <div
        onClick={() => handleToggle(index)}
        className={`${styles.accordionTitle} ${isFirst && styles.first} ${
          isLast && styles.last
        } ${isOpen && styles.selected}`}
      >
        <p className={styles.text}>{`<${item.title}>`}</p>
      </div>
      {isCurrentlyOpen && (
        <div
          className={`${styles.accordionDescription} ${
            isFirst && styles.first
          } ${isLast && styles.last} ${!isOpen && styles.fadeOut}`}
        >
          <p className={styles.descriptionText}>
            <AnimatedTextIndependant shouldType={shouldType}>
              {item.description}
            </AnimatedTextIndependant>
          </p>

          <div
            onClick={() => handleToggle(index)}
            className={`${styles.accordionClosingTag}`}
          >
            <p className={styles.text}>{`</${item.title}>`}</p>
          </div>
        </div>
      )}
    </div>
  );
}
