import Image from "next/image";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.content}>
      <div className={styles.contentLeft}>
        <p
          style={{
            marginTop: 100,
            fontSize: 35,
          }}
        >
          {"<Head>"}
        </p>
      </div>
      <div className={styles.contentCenter}>
        <Image
          src="/images/paul-adaimi.png"
          alt="Paul Adaimi"
          width={400}
          height={400}
        />
      </div>
      <div className={styles.contentRight}>
        <p
          style={{
            marginTop: 100,
            fontSize: 35,
          }}
        >
          {"</Head>"}
        </p>
      </div>
    </div>
  );
}
