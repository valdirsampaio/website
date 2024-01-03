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
import { Link } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";

export const Home = ({ }) => {

    const { setLoading } = useContext(UserContext);

    return (
        <DefaultFooter>
            <DefaultHeader>
                <div className={styles.homePage}>
                    <section className={styles.infoSection}>
                        <p className={styles.sectionTitle}>
                            ——— &nbsp; &nbsp; <span>HI, I'M VALDIR SAMPAIO</span> &nbsp; &nbsp; ———
                        </p>
                        <div className={styles.sectionInfo}>
                            <h1>Let's create</h1> <img src={iconHome} alt="icon" className={styles.iconImage} />
                            <p>some
                            <span className={styles.homeCard} data-back="websites" data-front="products">
                            </span>
                            together!</p>
                        </div>
                        <div className={styles.buttonsContainer}>
                            <a href="https://github.com/valdirsampaio" target="_blank" className={styles.socialButton} ><FaGithub className={styles.linkIcon} /> </a>
                            <a href="https://www.linkedin.com/in/valdirsampaio/" target="_blank" className={styles.socialButton} ><FaLinkedinIn className={styles.linkIcon} /> </a>
                            <a href="https://online.fliphtml5.com/pexdn/biuh/#p=1" target="_blank" className={styles.socialButton} ><AiOutlinePaperClip className={styles.linkIcon} /> </a>
                            <a href="mailto:valdirgomes.sjr@gmail.com?subject=Hi from your portfolio!" target="_blank" className={styles.contactButton} data-back="GET IN TOUCH" data-front="GET IN TOUCH">
                            </a>
                        </div>
                    </section>
                    <section className={styles.projectsSection}>
                        <p className={styles.sectionTitle}>
                            ——— &nbsp; &nbsp; <span>SELECTED PROJECTS</span> &nbsp; &nbsp; ———
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
                            ——— &nbsp; &nbsp; <span>ABOUT ME</span> &nbsp; &nbsp; ———
                        </p>
                        <h3>... Always committed to carrying out projects with excellence and organization, in order to provide the best experience to the customer,<span> as well as facilitating the work of the team included in the project. </span>
                        </h3>
                        <div className={styles.buttonsContainer}>
                            <Link onClick={() => setLoading(true)} to="/about" className={styles.contactButton} data-back="ABOUT ME" data-front="ABOUT ME">
                            </Link>
                        </div>
                    </section>
                </div>
            </DefaultHeader>
        </DefaultFooter>
    );
};