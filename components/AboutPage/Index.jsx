import styles from "./Index.module.css";
import Accordion from "./Accordion";
import AnimatedTextCoordinated from "../Global/AnimatedTextCoordinated";
import Image from "next/image";

export default function Index({ data }) {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.contentSide}>
          <p className={styles.text}>
            {"<"}
            <AnimatedTextCoordinated typingSpeed={50} id={0}>
              My Education
            </AnimatedTextCoordinated>
            {">"}
          </p>
          <Accordion coordOffset={2} items={data.education} />
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
          <Accordion
            coordOffset={2 + data.education.length}
            items={data.experience}
          />
        </div>
      </div>
    </div>
  );
}
