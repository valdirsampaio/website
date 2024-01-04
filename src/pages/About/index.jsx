import React from "react"
import styles from "./style.module.scss";
import { DefaultFooter } from "../../components/DefaultFooter";
import { DefaultHeader } from "../../components/DefaultHeader";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlinePaperClip } from "react-icons/ai";
import iconHome from "../../assets/iconHome.png";

export const About = ({ }) => {

    return (
        <DefaultFooter>
            <DefaultHeader>
                <div className={styles.aboutPage}>
                    <section className={styles.infoSection}>
                        <img src={iconHome} alt="icon" className={styles.iconImage} />
                        <h2>I'm Valdir Sampaio, a <span>Full Stack Developer</span> based in Brazil.
                        </h2>
                        <p className={styles.aboutParagraph}>
                            In my professional experiences I have always sought to bring excellence as the path, with the objective of creating innovative solutions for companies.<span> With a focus on the customer, each project carried out aimed to facilitate the work of those involved and bring the best possible solutions.</span>
                        </p>
                        <div className={styles.buttonsContainer}>
                            <a href="https://github.com/valdirsampaio" target="_blank" className={styles.socialButton} ><FaGithub className={styles.linkIcon} /> </a>
                            <a href="https://www.linkedin.com/in/valdirsampaio/" target="_blank" className={styles.socialButton} ><FaLinkedinIn className={styles.linkIcon} /> </a>
                            <a href="https://online.fliphtml5.com/pexdn/biuh/#p=1" target="_blank" className={styles.socialButton} ><AiOutlinePaperClip className={styles.linkIcon} /> </a>
                            <a href="mailto:valdirgomes.sjr@gmail.com?subject=Hi from your portfolio!" target="_blank" className={styles.contactButton} data-back="GET IN TOUCH" data-front="GET IN TOUCH">
                            </a>
                        </div>
                    </section>
                    <section className={styles.aboutSection}>
                        <section className={styles.resumeSection}>
                            <div className={styles.resumeExperience}>
                                <h5 className={styles.sectionTitle}>
                                    ——— &nbsp; &nbsp; <span>WORK EXPERIENCE</span> &nbsp; &nbsp; ———
                                </h5>
                                <p className={styles.experienceParagraph}>» 2023 // NOW
                                    <span> — Full Stack Developer —
                                    </span> FREELANCER
                                </p>
                                <p className={styles.experienceParagraph}>» 2021 // 2023
                                    <span> — Senior Planning Analyst —
                                    </span> CBA
                                </p>
                                <p className={styles.experienceParagraph}>» 2020 // 2021
                                    <span> — Planning Analyst —
                                    </span> ELFA
                                </p>
                                <p className={styles.experienceParagraph}>» 2019 // 2020
                                    <span> — Junior Planning Analyst —
                                    </span> ARMAZÉM PB
                                </p>
                                <p className={styles.experienceParagraph}>» 2018 // 2019
                                    <span> — Intern —
                                    </span> ARCONIC
                                </p>
                            </div>
                            <div className={styles.resumeEducation}>
                                <h5 className={styles.sectionTitle}>
                                    ——— &nbsp; &nbsp; <span>EDUCATION</span> &nbsp; &nbsp; ———
                                </h5>
                                <p className={styles.educationParagraph}>» 2023 // 2024
                                    <span> — Full Stack Development  —
                                    </span> Kenzie Academy
                                </p>
                                <p className={styles.educationParagraph}>» 2019 // 2022
                                    <span> — MBA in Project Management —
                                    </span> UNIPÊ
                                </p>
                                <p className={styles.educationParagraph}>» 2013 // 2018
                                    <span> — Bachelor of Production Engineering —
                                    </span> UFCG
                                </p>
                            </div>
                        </section>
                        <section className={styles.skillsSection}>
                            <p className={styles.sectionTitle}>
                                ——— &nbsp; &nbsp; <span>SKILLS</span> &nbsp; &nbsp; ———
                            </p>
                            <div className={styles.resumeSkills}>
                                <p>» HTML5</p>
                                <p>» React (Redux, ContextApi)</p>
                                <p>» CSS3 (Sass, Bootstrap)</p>
                                <p>» JavaScript (ES6+)</p>
                                <p>» Git</p>
                                <p>» TypeScript</p>
                                <p>» Node.js</p>
                                <p>» Python (Django e Flask)</p>
                                <p>» SCRUM</p>
                            </div>
                        </section>
                    </section>
                </div>
            </DefaultHeader>
        </DefaultFooter>
    );
};