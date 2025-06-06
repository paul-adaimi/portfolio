import styles from "./Index.module.css";
import Accordion from "./Accordion";
import AnimatedTextCoordinated from "../Global/AnimatedTextCoordinated";
import Image from "next/image";
import { useAnimatedTitle } from "../Global/AnimatedTitleProvider";
import SubSection from "./SubSection";

export default function Index({ data }) {
  const { shouldAnimateOut } = useAnimatedTitle();

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div
          className={`${styles.contentSide} ${styles.contentSideLeft} ${
            shouldAnimateOut && styles.animateOut
          }`}
        >
          <div className={styles.contentSideTop}>
            <p className={styles.text}>
              {"<"}
              <AnimatedTextCoordinated id={0}>
                My Education
              </AnimatedTextCoordinated>
              {">"}
            </p>
            <div className={styles.accordionContainer}>
              <Accordion coordOffset={1} items={data.education} />
            </div>
          </div>
          <div className={styles.contentSideBottom}>
            <p className={styles.text}>
              {"</"}
              <AnimatedTextCoordinated
                typingSpeed={30}
                id={1 + Math.max(data.education.length, data.experience.length)}
              >
                My Education
              </AnimatedTextCoordinated>
              {">"}
            </p>
          </div>
        </div>
        <div className={styles.contentCenter}>
          <Image
            src="/images/paul-adaimi-back.png"
            alt="Paul Adaimi"
            width={400}
            height={400}
            className={`${styles.imagePaul} ${
              shouldAnimateOut && styles.animateOut
            }`}
          />
        </div>
        <div
          className={`${styles.contentSide} ${styles.contentSideRight} ${
            shouldAnimateOut && styles.animateOut
          }`}
        >
          <div className={styles.contentSideTop}>
            <p className={styles.text}>
              {"<"}
              <AnimatedTextCoordinated id={0}>
                My Experience
              </AnimatedTextCoordinated>
              {">"}
            </p>
            <div className={styles.accordionContainer}>
              <Accordion coordOffset={1} items={data.experience} />
            </div>
          </div>
          <div className={styles.contentSideBottom}>
            <p className={styles.text}>
              {"</"}
              <AnimatedTextCoordinated
                typingSpeed={30}
                id={1 + Math.max(data.education.length, data.experience.length)}
              >
                My Experience
              </AnimatedTextCoordinated>
              {">"}
            </p>
          </div>
        </div>
      </div>
      <SubSection
        offset={2 + Math.max(data.education.length, data.experience.length)}
      />
    </div>
  );
}
