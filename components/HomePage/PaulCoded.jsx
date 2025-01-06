import Image from "next/image";
import styles from "./PaulCoded.module.css";
import AnimatedTitle from "../AnimatedTitle";

export default function PaulCoded() {
  return (
    <div className={styles.tree}>
      <div className={styles.treeTop}>
        <AnimatedTitle>{"Paul Adaimi"}</AnimatedTitle>
      </div>
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
            {"<Head>"}
          </p>

          <p
            className={styles.text}
            style={{
              marginTop: 170,
            }}
          >
            {"<Body>"}
          </p>
        </div>
        <div className={styles.contentCenter}>
          <Image
            src="/images/paul-adaimi.png"
            alt="Paul Adaimi"
            width={400}
            height={400}
            style={{
              minWidth: "400px",
              minHeight: "400px",
            }}
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
            {"</Head>"}
          </p>
          <p
            className={styles.text}
            style={{
              marginTop: 170,
              marginLeft: -10,
            }}
          >
            {"</Body>"}
          </p>
        </div>
      </div>
    </div>
  );
}
