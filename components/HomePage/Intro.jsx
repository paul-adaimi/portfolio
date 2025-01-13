import AnimatedTextScroll from "./AnimatedTextScroll";
import Laptop from "../Global/Laptop";
import Phone from "../Global/Phone";
import styles from "./Intro.module.css";
import AnimatedTextCoordinated from "../Global/AnimatedTextCoordinated";

export default function Intro() {
  return (
    <div className={styles.content}>
      <p className={styles.title}>
        {"</"}
        <AnimatedTextCoordinated noWrap={true} id={2}>
          Paul Adaimi
        </AnimatedTextCoordinated>
        {">"}
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
            <div
              style={{
                marginTop: 5,
                padding: 20,
              }}
            >
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
            </div>
          </Laptop>
        </div>
      </div>
    </div>
  );
}
