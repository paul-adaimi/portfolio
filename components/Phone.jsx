import styles from "./Phone.module.css";

export default function Phone({ children }) {
  return (
    <div className={styles.phone}>
      <div className={styles.phoneInner}>
        <div
          style={{
            marginTop: 18,
          }}
        >
          {children}
        </div>
      </div>
      <div className={styles.phoneNotch}>
        <div className={styles.phoneSpeaker}></div>
        <div className={styles.phoneCamera}>
          <div className={styles.phoneCameraInner}></div>
        </div>
      </div>
    </div>
  );
}
