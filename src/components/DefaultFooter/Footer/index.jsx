import styles from "./style.module.scss";
import React from "react"
import { BiLogoGmail } from "react-icons/bi";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <span>
                    <p>Get in touch!</p>
                    <a href="mailto:valdirgomes.sjr@gmail.com?subject=Hi from your portfolio!" target="_blank" className={styles.mailLink}>
                        valdirgomes.sjr@gmail.com
                    </a>
                </span>
                <p>
                    2023 • Based on a Webflow design.
                </p>
            </div>
        </footer>
    );
};