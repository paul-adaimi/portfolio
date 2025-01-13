import styles from "./SubSection.module.css";
import Image from "next/image";
import AnimatedTextCoordinated from "../Global/AnimatedTextCoordinated";

// TODO: Update CV and add it here
export default function SubSection({ offset }) {
  return (
    <div className={styles.content}>
      <p className={styles.title}>
        {"</"}
        <AnimatedTextCoordinated noWrap={true} id={offset}>
          About Me
        </AnimatedTextCoordinated>
        {">"}
      </p>
      <div className={styles.subContent}>
        <a
          href="https://github.com/paul-adaimi"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <p className={styles.cardTitle}>
            {"<"}
            <AnimatedTextCoordinated id={offset + 1}>
              Github
            </AnimatedTextCoordinated>
            {">"}
          </p>
          <div className={styles.imageContainer}>
            <Image
              src="svg/github-square-dark.svg"
              className={styles.image}
              alt="Github Icon Large"
              width={90}
              height={90}
            />
          </div>
          <p className={styles.cardTitle}>
            {"</"}
            <AnimatedTextCoordinated id={offset + 1}>
              Github
            </AnimatedTextCoordinated>
            {">"}
          </p>
        </a>
        <a
          href="https://www.linkedin.com/in/paul-adaimi-aa5b76172"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <p className={styles.cardTitle}>
            {"<"}
            <AnimatedTextCoordinated id={offset + 2}>
              LinkedIn
            </AnimatedTextCoordinated>
            {">"}
          </p>
          <div className={styles.imageContainer}>
            <Image
              src="svg/linkedin-dark.svg"
              alt="LinkedIn Icon Large"
              width={75}
              height={75}
            />
          </div>
          <p className={styles.cardTitle}>
            {"</"}
            <AnimatedTextCoordinated id={offset + 2}>
              LinkedIn
            </AnimatedTextCoordinated>
            {">"}
          </p>
        </a>
        <a
          href="mailto:paul@adaimi.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <p className={styles.cardTitle}>
            {"<"}
            <AnimatedTextCoordinated id={offset + 3}>
              E-Mail Me
            </AnimatedTextCoordinated>
            {">"}
          </p>
          <div className={styles.imageContainer}>
            <Image
              src="svg/mail-square-dark.svg"
              alt="Mail Icon Large"
              width={75}
              height={75}
            />
          </div>
          <p className={styles.cardTitle}>
            {"</"}
            <AnimatedTextCoordinated id={offset + 3}>
              E-Mail Me
            </AnimatedTextCoordinated>
            {">"}
          </p>
        </a>
        <a href="/CV Paul Adaimi.pdf" download className={styles.card}>
          <p className={styles.cardTitle}>
            {"<"}
            <AnimatedTextCoordinated id={offset + 4}>
              Download CV
            </AnimatedTextCoordinated>
            {">"}
          </p>
          <div className={styles.imageContainer}>
            <Image
              src="svg/download-dark.svg"
              alt="Download Icon Large"
              width={75}
              height={75}
            />
          </div>
          <p className={styles.cardTitle}>
            {"</"}
            <AnimatedTextCoordinated id={offset + 4}>
              Download CV
            </AnimatedTextCoordinated>
            {">"}
          </p>
        </a>
      </div>
    </div>
  );
}
