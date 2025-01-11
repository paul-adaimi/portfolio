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
        <a
          href="https://github.com/paul-adaimi"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <p className={styles.cardTitle}>{"<Github>"}</p>
          <div className={styles.imageContainer}>
            <Image
              src="svg/github-square-dark.svg"
              className={styles.image}
              alt="Github Icon Large"
              width={90}
              height={90}
            />
          </div>
          <p className={styles.cardTitle}>{"</Github>"}</p>
        </a>
        <a
          href="https://www.linkedin.com/in/paul-adaimi-aa5b76172"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <p className={styles.cardTitle}>{"<LinkedIn>"}</p>
          <div className={styles.imageContainer}>
            <Image
              src="svg/linkedin-dark.svg"
              alt="LinkedIn Icon Large"
              width={75}
              height={75}
            />
          </div>
          <p className={styles.cardTitle}>{"</LinkedIn>"}</p>
        </a>
        <a
          href="mailto:paul@adaimi.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <p className={styles.cardTitle}>{"<E-Mail Me>"}</p>
          <div className={styles.imageContainer}>
            <Image
              src="svg/mail-square-dark.svg"
              alt="Mail Icon Large"
              width={75}
              height={75}
            />
          </div>
          <p className={styles.cardTitle}>{"</E-Mail Me>"}</p>
        </a>
        <a href="/CV Paul Adaimi.pdf" download className={styles.card}>
          <p className={styles.cardTitle}>{"<Download CV>"}</p>
          <div className={styles.imageContainer}>
            <Image
              src="svg/download-dark.svg"
              alt="Download Icon Large"
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
