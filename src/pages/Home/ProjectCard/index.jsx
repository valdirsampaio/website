import React, { useState, useContext } from "react"
import styles from "./style.module.scss";

export const ProjectCard = ({ project }) => {
    return (
        <>
            <li className={styles.projectCard}>
                <button className={styles.projectButton}>
                    <img src={project.image} alt="projectImg" className={styles.projectImage}/>
                    <div className={styles.textContainer}>
                        <p className={styles.projectName}>{project.name}</p>
                        <p className={styles.projectInfo}>{project.type} • {project.year} </p>
                    </div>
                    <a href={project.url} className={styles.homeButton} data-back="VIEW MORE" data-front="VIEW MORE">
                    </a>
                </button>
            </li>
        </>
    );
};