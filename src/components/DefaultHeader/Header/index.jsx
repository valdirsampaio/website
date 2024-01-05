import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import React, { useContext, useState } from "react"
import { MdMenu } from "react-icons/md";
import { UserContext } from "../../../providers/UserContext";
import { Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

export const Header = () => {

    const { setLoading, aboutPage, setAboutPage } = useContext(UserContext);

    const navigateToAbout = () => {
        setAboutPage(true)
        setLoading(true)
    }

    const navigateToHome = () => {
        setAboutPage(false)
        setLoading(true)
    }

    return (
        <header className={styles.header}>
            <div className={styles.containerBox}>
                <Link to="/" onClick={() => navigateToHome()} className={styles.homeButton} data-back="VSAMPAIO" data-front="VSAMPAIO">
                </Link>
                <section className={styles.buttonSection}>
                    <div className={styles.buttonsContainer}>
                        <Link onClick={() => navigateToHome()} to="/" className={styles.interactionButton}>
                            <span>HOME</span>
                        </Link>
                        {
                            !aboutPage ? <Button to="projects" spy={true}
                                smooth={true}
                                offset={50}
                                duration={1000} className={styles.interactionButton}>
                                <span>PROJECTS</span>
                            </Button>
                                :
                                <Link to="/" onClick={() => navigateToHome()} className={styles.interactionButton}>
                                    <span>PROJECTS</span>
                                </Link>
                        }
                        <Link onClick={() => navigateToAbout()} to="/about" className={styles.interactionButton}>
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