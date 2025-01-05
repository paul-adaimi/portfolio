import AnimatedText from "./AnimatedText";
import styles from "./Intro.module.css";

export default function Intro() {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>{"</Paul Adaimi>"}</h1>
      <div className={styles.subContent}>
        <div className={styles.card}>
          <div className={styles.phone}>
            <div className={styles.phoneInner}>
              <div
                style={{
                  marginTop: 18,
                }}
              >
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
              </div>
            </div>
            <div className={styles.phoneBezel}>
              <div className={styles.phoneSpeaker}></div>
              <div className={styles.phoneCamera}>
                <div className={styles.phoneCameraInner}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.laptop}>
            <div className={styles.laptopInner}>
              <div
                style={{
                  marginTop: 5,
                }}
              >
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
              </div>
            </div>
            <div className={styles.laptopBezel}>
              <div className={styles.laptopCamera}>
                <div className={styles.laptopCameraInner}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
