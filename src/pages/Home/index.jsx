import React, { useState, useContext } from "react"
import styles from "./style.module.scss";
import { DefaultFooter } from "../../components/DefaultFooter";
import { DefaultHeader } from "../../components/DefaultHeader";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlinePaperClip } from "react-icons/ai";
import { projects } from "../../assets/database/projects";
import { ProjectCard } from "./ProjectCard";
import iconHome from "../../assets/iconHome.png";

export const Home = ({ }) => {

    return (
        <DefaultFooter>
            <DefaultHeader>
                <div className={styles.homePage}>
                    <section className={styles.infoSection}>
                        <p className={styles.sectionTitle}>
                            ——— &nbsp; &nbsp; <span>HI, I'M VALDIR SAMPAIO</span> &nbsp; &nbsp; ———
                        </p>
                        <h1>Let's create <img src={iconHome} alt="icon" className={styles.iconImage} />
                            <br /> some <p className={styles.homeCard} data-back="products" data-front="websites">
                            </p>
                             <span> together!</span>
                        </h1>
                        <div className={styles.buttonsContainer}>
                            <button className={styles.socialButton} ><FaGithub className={styles.linkIcon} /> </button>
                            <button className={styles.socialButton} ><FaLinkedinIn className={styles.linkIcon} /> </button>
                            <button className={styles.socialButton} ><AiOutlinePaperClip className={styles.linkIcon} /> </button>
                            <a className={styles.homeButton} data-back="GET IN TOUCH" data-front="GET IN TOUCH">
                            </a>
                        </div>
                    </section>
                    <section className={styles.projectsSection}>
                        <p className={styles.sectionTitle}>
                            ————— SELECTED PROJECTS —————
                        </p>
                        <ul className={styles.projectsList}>
                            {
                                projects.map((project) => {
                                    return (
                                        <ProjectCard key={project.id} project={project} />
                                    )
                                })
                            }
                        </ul>
                    </section>
                    <section className={styles.aboutSection}>
                        <p className={styles.sectionTitle}>
                            ————— ABOUT ME —————
                        </p>
                        <h3>
                            ... I'm a passionate designer who thrives on the dance between creativity and functionality. With a boundless curiosity to create meaningful experiences, I dive headfirst into the field of product design.
                        </h3>
                        <a className={styles.homeButton} data-back="ABOUT ME" data-front="ABOUT ME"></a>
                    </section>
                </div>
            </DefaultHeader>
        </DefaultFooter>
    );
};