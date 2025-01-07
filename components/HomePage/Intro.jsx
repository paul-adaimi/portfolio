import AnimatedText from "./AnimatedText";
import Laptop from "..//Laptop";
import Phone from "../Phone";
import styles from "./Intro.module.css";

export default function Intro() {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>{"</Paul Adaimi>"}</h1>
      <div className={styles.subContent}>
        <div className={styles.card}>
          <Phone>
            <AnimatedText chunks={["$ Paul > "]}>
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
            </AnimatedText>
          </Phone>
        </div>
        <div className={styles.card}>
          <Laptop>
            <AnimatedText chunks={["paul@adaimi.com > "]}>
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
            </AnimatedText>
          </Laptop>
        </div>
      </div>
    </div>
  );
}
