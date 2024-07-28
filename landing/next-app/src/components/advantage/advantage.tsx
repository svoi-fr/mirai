import React from "react";
import styles from "./advantage.module.css";

export const Advantage = () => {
  return (
    <div className={styles.box}>
        <div className={styles.icon} />
        <div className={styles.contentContainer}>
            <div className={styles.h}>Verified Information</div>
            <p className={styles.textWrapper}>
                All information provided by the bot is verified for accuracy and relevance, ensuring its reliability and
                timeliness.
            </p>
        </div>
    </div>
  );
};
