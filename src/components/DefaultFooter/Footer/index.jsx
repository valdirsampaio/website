import styles from "./style.module.scss";
import React from "react"

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <a className={styles.homeButton} data-back="VSAMPAIO" data-front="VSAMPAIO">
                </a>
                <p>
                    2023 • Designed and made  with Webflow.
                </p>
            </div>
        </footer>
    );
};