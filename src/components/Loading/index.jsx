import loading from "../../assets/pulse.svg";
import styles from "./style.module.scss"
import React from "react";

export const Loading = () => {
    return (
        <div className={styles.loadingBox}>
            <img src={pulse} alt="Loading Icon" />
        </div>
    )
}