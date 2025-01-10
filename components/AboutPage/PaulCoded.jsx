import Image from "next/image";
import styles from "./PaulCoded.module.css";
import AnimatedTextCoordinated from "../Global/AnimatedTextCoordinated";
import Accordion from "./Accordion";

// TODO: Change File Name
export default function PaulCoded() {
  return (
    <div className={styles.content}>
      <div className={styles.contentSide}>
        <p className={styles.text}>
          {"<"}
          <AnimatedTextCoordinated typingSpeed={50} id={0}>
            My Education
          </AnimatedTextCoordinated>
          {">"}
        </p>
        <Accordion
          coordOffset={2}
          items={[
            {
              title: "American University of Beirut",
              description: "Bachelor of Science in Computer Science",
            },
            {
              title: "Northeastern University",
              description: `Master of Science in Computer Science Master of Science in Computer Science Master of Science in Computer Science

Master of Science in Computer Science Master of Science in Computer Science Master of Science in Computer Science`,
            },
            {
              title: "Harvard University",
              description: "Graduate Certificate in Data Science",
            },
          ]}
        />
      </div>
      <div className={styles.contentCenter}>
        <Image
          src="/images/paul-adaimi-back.png"
          alt="Paul Adaimi"
          width={400}
          height={400}
          className={styles.imagePaul}
        />
      </div>
      <div className={styles.contentSide}>
        <p className={styles.text}>
          {"<"}
          <AnimatedTextCoordinated typingSpeed={50} id={1}>
            My Experience
          </AnimatedTextCoordinated>
          {">"}
        </p>
      </div>
    </div>
  );
}
