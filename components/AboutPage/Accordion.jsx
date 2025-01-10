import { useState } from "react";
import styles from "./Accordion.module.css";
import AccordionItem from "./AccordionItem";

export default function Accordion({ items, coordOffset }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <AccordionItem
          coordinationId={index + coordOffset}
          item={item}
          index={index}
          isOpen={index === openIndex}
          isFirst={index === 0}
          isLast={index === items.length - 1}
          handleToggle={handleToggle}
        />
      ))}
    </div>
  );
}
