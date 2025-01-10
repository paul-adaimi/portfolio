import Image from "next/image";
import styles from "./PaulCoded.module.css";
import AnimatedTextCoordinated from "../Global/AnimatedTextCoordinated";

export default function PaulCoded() {
  return (
    <div className={styles.content}>
      <div className={styles.contentLeft}>
        <p
          className={styles.text}
          style={{
            position: "relative",
            right: -120,
            marginTop: 100,
          }}
        >
          {"<"}
          <AnimatedTextCoordinated id={0}>Head</AnimatedTextCoordinated>
          {">"}
        </p>

        <p
          className={styles.text}
          style={{
            marginTop: 170,
          }}
        >
          {"<"}
          <AnimatedTextCoordinated id={2}>Body</AnimatedTextCoordinated>
          {">"}
        </p>
      </div>
      <div className={styles.contentCenter}>
        <Image
          src="/images/paul-adaimi.png"
          alt="Paul Adaimi"
          width={400}
          height={400}
          className={styles.imagePaul}
        />
      </div>
      <div className={styles.contentRight}>
        <p
          className={styles.text}
          style={{
            marginTop: 100,
            marginLeft: -130,
          }}
        >
          {"</"}
          <AnimatedTextCoordinated id={1}>Head</AnimatedTextCoordinated>
          {">"}
        </p>
        <p
          className={styles.text}
          style={{
            marginTop: 170,
            marginLeft: -10,
          }}
        >
          {"<"}
          <AnimatedTextCoordinated id={3}>Body</AnimatedTextCoordinated>
          {"/>"}
        </p>
      </div>
    </div>
  );
}
