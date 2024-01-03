import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import React, { useContext } from "react"
import { MdMenu } from "react-icons/md";
import { UserContext } from "../../../providers/UserContext";

export const Header = () => {

    const { setLoading } = useContext(UserContext);

    return (
        <header className={styles.header}>
            <div className={styles.containerBox}>
                <Link to="/" onClick={() => setLoading(true)} className={styles.homeButton} data-back="VSAMPAIO" data-front="VSAMPAIO">
                </Link>
                <section className={styles.buttonSection}>
                    <div className={styles.buttonsContainer}>
                        <Link onClick={() => setLoading(true)} to="/" className={styles.interactionButton}>
                            <span>HOME</span>
                        </Link>
                        <button className={styles.interactionButton}>
                            <span>PROJECTS</span>
                        </button>
                        <Link onClick={() => setLoading(true)} to="/about" className={styles.interactionButton}>
                            <span>ABOUT</span>
                        </Link>
                        <a href="mailto:valdirgomes.sjr@gmail.com?subject=Hi from your portfolio!" target="_blank" className={styles.interactionButton}>
                            <span>CONTACT</span>
                        </a>
                    </div>
                </section>
            </div>
        </header >
    );
};