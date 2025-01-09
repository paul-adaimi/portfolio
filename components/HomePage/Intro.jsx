import AnimatedTextScroll from "./AnimatedTextScroll";
import Laptop from "..//Laptop";
import Phone from "../Phone";
import styles from "./Intro.module.css";
import AnimatedTextCoordinated from "../AnimatedTextCoordinated";

export default function Intro() {
  return (
    <div className={styles.content}>
      <p className={styles.title}>
        {"<"}
        <AnimatedTextCoordinated id={4}>Paul Adaimi</AnimatedTextCoordinated>
        {"/>"}
      </p>
      <div className={styles.subContent}>
        <div className={styles.card}>
          <Phone isPadded={true}>
            <div
              style={{
                marginTop: 18,
              }}
            >
              <AnimatedTextScroll chunks={["$ Paul > "]}>
                {"$ Paul > "} cd Paul\ Adaimi\'s\ Portfolio/
                <br />
                <br />
                {"$ Paul > "} vim Readme.md
                <br />
                <br />
                # Hello stranger...
                <br />
                ```
                <br />I love building mobile apps.
                <br />
                <br />
                Check my latest projects in the Projects section.
                <br />
                ```
                <br />
                :wq
                <br />
                <br />
                {"$ Paul > "}
              </AnimatedTextScroll>
            </div>
          </Phone>
        </div>
        <div className={styles.card}>
          <Laptop>
            <AnimatedTextScroll chunks={["paul@adaimi.com > "]}>
              {"paul@adaimi.com > "}cd Paul\ Adaimi\'s\ Portfolio/
              <br />
              <br />
              {"paul@adaimi.com > "}touch Readme.md
              <br />
              <br />
              {"paul@adaimi.com > "}vim Readme.md
              <br />
              <br />
              # Hello stranger...
              <br />
              ```
              <br />I love building web apps.
              <br />
              This one was built with Next.js.
              <br />I hope you like it.
              <br />
              ```
              <br />
              :wq
              <br />
              <br />
              {"paul@adaimi.com > "}
            </AnimatedTextScroll>
          </Laptop>
        </div>
      </div>
    </div>
  );
}
