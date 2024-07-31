import React from "react";
import styles from "./advantage.module.scss";


interface AdvantageProps {
    title: string
    description: string
    icon?: string
  }

export const Advantage : React.FC<AdvantageProps> = ({ title, description, icon })  => {
  return (
    <div className={styles.box}>
        <div className={styles.icon} />
        <div className={styles.contentContainer}>
            <div className={styles.h}>{title}</div>
            <p className={styles.textWrapper}>
                {description}
            </p>
        </div>
    </div>
  );
};
