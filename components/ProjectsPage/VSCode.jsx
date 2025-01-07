import styles from "./VSCode.module.css";
import ProjectsList from "./ProjectsList";
import { useState } from "react";
import Phone from "../Phone";

export default function VSCode({ projects }) {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const handleTabClick = (project) => {
    if (selectedProject === project) {
      return;
    }
    setSelectedProject(project);
  };

  return (
    <div className={styles.window}>
      <div className={styles.windowTop}>
        <div className={styles.button + " " + styles.close}></div>
        <div className={styles.button + " " + styles.minimize}></div>
        <div className={styles.button + " " + styles.expand}></div>
      </div>
      <div className={styles.windowMain}>
        <div className={styles.windowMainLeft}>
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
        <div className={styles.windowMainRight}>
          <Phone>p</Phone>
        </div>
      </div>
      <div className={styles.windowBottom}></div>
    </div>
  );
}
