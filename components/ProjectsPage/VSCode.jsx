import styles from "./VSCode.module.css";
import ProjectsList from "./ProjectsList";
import { useState } from "react";

export default function VSCode({ projects, selectedProject, handleTabClick }) {
  return (
    <div className={styles.window}>
      <div className={styles.windowTop}>
        <div className={styles.button + " " + styles.close}></div>
        <div className={styles.button + " " + styles.minimize}></div>
        <div className={styles.button + " " + styles.expand}></div>
      </div>
      <div className={styles.windowMain}>
        <div className={styles.windowMainLeft}></div>
        <div className={styles.windowMainRight}>
          <ProjectsList
            prefix={"<"}
            selectedProject={selectedProject}
            handleTabClick={handleTabClick}
            projects={projects}
          />
          <div className={styles.projectInfo}></div>
          <ProjectsList
            prefix={"</"}
            selectedProject={selectedProject}
            handleTabClick={handleTabClick}
            projects={projects}
          />
        </div>
      </div>
      <div className={styles.windowBottom}></div>
    </div>
  );
}
