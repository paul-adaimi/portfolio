import { useEffect, useState, useMemo } from "react";
import styles from "./AccordionItem.module.css";
import AnimatedTextIndependant from "../Global/AnimatedTextIndependant";
import AnimatedTextCoordinated from "../Global/AnimatedTextCoordinated";

export default function AccordionItem({
  item,
  index,
  isFirst,
  isLast,
  isOpen,
  handleToggle,
  coordinationId,
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

  const itemKeysExceptTitle = useMemo(
    () => Object.keys(item).filter((key) => key !== "title"),
    [item]
  );

  const description = itemKeysExceptTitle.map((key, index) => (
    <span key={key} className={`${styles.text} ${styles.descriptionOuter}`}>
      {"<" + capitalize(key) + ">\n"}
      <span className={styles.descriptionInner}>
        <AnimatedTextIndependant shouldType={shouldType}>
          {item[key]}
        </AnimatedTextIndependant>
      </span>
      {"\n</" +
        capitalize(key) +
        ">" +
        (index !== itemKeysExceptTitle.length - 1 ? "\n\n" : "")}
    </span>
  ));

  console.log("itemKeysExceptTitle", itemKeysExceptTitle);
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
        <p className={styles.text}>
          {"<"}
          <AnimatedTextCoordinated typingSpeed={30} id={coordinationId}>
            {item.title}
          </AnimatedTextCoordinated>
          {">"}
        </p>
      </div>
      {isCurrentlyOpen && (
        <div
          className={`${styles.accordionDescription} ${
            isFirst && styles.first
          } ${isLast && styles.last} ${!isOpen && styles.fadeOut}`}
        >
          <p
            className={`${styles.text} ${styles.descriptionText} ${
              !isOpen && styles.fadeOut
            }`}
          >
            {description}
          </p>

          <div
            onClick={() => handleToggle(index)}
            className={`${styles.accordionClosingTag} ${
              !isOpen && styles.fadeOut
            }`}
          >
            <p
              className={`${styles.text} ${styles.closingTagText} ${
                styles.fadeIn
              } ${!isOpen && styles.fadeOut}`}
            >{`</${item.title}>`}</p>
          </div>
        </div>
      )}
    </div>
  );
}

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
