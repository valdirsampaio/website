import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import React from "react"
import { MdMenu } from "react-icons/md";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.containerBox}>
                <a className={styles.homeButton} data-back="VSAMPAIO" data-front="VSAMPAIO">
                </a>
                <section className={styles.buttonSection}>
                    <div className={styles.buttonsContainer}>
                        <button className={styles.interactionButton}>
                            <span>HOME</span>
                        </button>
                        <button className={styles.interactionButton}>
                            <span>PROJECTS</span>
                        </button>
                        <button className={styles.interactionButton}>
                            <span>ABOUT</span>
                        </button>
                        <button className={styles.interactionButton}>
                            <span>CONTACT</span>
                        </button>
                    </div>
                    <div className={styles.responsiveButton}>
                        <button className={styles.buttonsList} ><MdMenu className={styles.listIcon} /> </button>
                    </div>
                </section>
            </div>
        </header >
    );
};