import styles from "./Phone.module.css";

export default function Phone({ children, isFull = false, isPadded = false }) {
  return (
    <div className={styles.phone + " " + (isFull ? styles.full : "")}>
      <div
        className={
          styles.phoneInner +
          " " +
          (isFull ? styles.full : "") +
          (isPadded ? styles.padded : "")
        }
      >
        {children}
      </div>
      <div className={styles.phoneNotch + " " + (isFull ? styles.full : "")}>
        <div className={styles.phoneSpeaker}></div>
        <div className={styles.phoneCamera}>
          <div className={styles.phoneCameraInner}></div>
        </div>
      </div>
    </div>
  );
}
