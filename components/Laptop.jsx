import styles from "./Laptop.module.css";

export default function Intro({ children }) {
  return (
    <div className={styles.laptop}>
      <div className={styles.laptopInner}>
        <div
          style={{
            marginTop: 5,
          }}
        >
          {children}
        </div>
      </div>
      <div className={styles.laptopNotch}>
        <div className={styles.laptopCamera}>
          <div className={styles.laptopCameraInner}></div>
        </div>
      </div>
    </div>
  );
}
