import styles from "./Laptop.module.css";

export default function Intro({ children, isFull = false }) {
  return (
    <div className={styles.screen}>
      <div className={styles.laptop + " " + (isFull ? styles.full : "")}>
        <div className={styles.laptopInner + " " + (isFull ? styles.full : "")}>
          <div
            style={{
              marginTop: 5,
            }}
          >
            {children}
          </div>
        </div>
        {!isFull && (
          <div className={styles.laptopNotch}>
            <div className={styles.laptopCamera}>
              <div className={styles.laptopCameraInner}></div>
            </div>
          </div>
        )}
      </div>
      {isFull && <div className={styles.trunk}></div>}
      {isFull && <div className={styles.base}></div>}
    </div>
  );
}
