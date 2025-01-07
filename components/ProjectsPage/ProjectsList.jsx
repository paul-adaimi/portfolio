import React, { useState } from "react";
import styles from "./ProjectsList.module.css";

const ProjectsList = ({
  projects,
  selectedProject,
  handleTabClick,
  prefix = "<",
  suffix = ">",
}) => {
  return (
    <div className={styles.tabsContainer}>
      {projects.map((project, index) => (
        <div
          key={index}
          className={
            styles.tab +
            " " +
            (selectedProject === project ? styles.selected : "")
          }
          onClick={() => handleTabClick(project)}
        >
          <h3 className={styles.title}>{prefix + project.title + suffix}</h3>
        </div>
      ))}
    </div>
  );
};

export default ProjectsList;
