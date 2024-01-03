import React, { useState, useContext } from "react"
import styles from "./style.module.scss";

export const ProjectCard = ({ project }) => {
    return (
        <>
            <li className={styles.projectCard}>
                <button className={styles.projectButton}>
                    <div className={styles.backgroundBox}>
                        <img src={project.image} alt="projectImg" className={styles.projectImage} />
                        <a href={project.url} className={styles.viewButton} data-back="VISIT WEBSITE" data-front="VISIT WEBSITE" target="_blank">
                        </a>
                    </div>
                    <div className={styles.textContainer}>
                        <p className={styles.projectName}>{project.name}</p>
                        <p className={styles.projectInfo}>{project.type} • {project.year} </p>
                    </div>

                </button>
            </li>
        </>
    );
};