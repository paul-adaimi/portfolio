import styles from "./SubSection.module.css";
import Image from "next/image";

// TODO: Update CV and add it here
export default function SubSection() {
  return (
    <div className={styles.content}>
      <p className={styles.title}>
        {"<"}
        About Me
        {"/>"}
      </p>
      <div className={styles.subContent}>
        <a href="/CV Paul Adaimi.pdf" download className={styles.card}>
          <p className={styles.cardTitle}>{"<Download CV>"}</p>
          <div className={styles.imageContainer}>
            <Image
              src="svg/download.svg"
              alt="Mail Icon"
              width={75}
              height={75}
            />
          </div>
          <p className={styles.cardTitle}>{"</Download CV>"}</p>
        </a>
      </div>
    </div>
  );
}
