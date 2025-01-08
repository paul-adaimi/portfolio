import { useState } from "react";
import AnimatedTitle from "../AnimatedTitle";
import styles from "./Index.module.css";
import VSCode from "./VSCode";
import Phone from "../Phone";
import Laptop from "../Laptop";
import Image from "next/image";

export default function Index({ projects }) {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const handleTabClick = (project) => {
    if (selectedProject === project) {
      return;
    }
    setSelectedProject(project);
  };

  return (
    <>
      <div className={styles.main}>
        <VSCode
          selectedProject={selectedProject}
          handleTabClick={handleTabClick}
          projects={projects}
        />
        {selectedProject.type === "web" ? (
          <Laptop isFull={true} />
        ) : (
          <Phone isFull={true}>
            <Image
              src={selectedProject.imgSrc}
              alt={selectedProject.title}
              width={300}
              height={400}
              style={{
                borderRadius: 20,
              }}
            />
          </Phone>
        )}
      </div>
      <p className={styles.footer}>{"</My Projects>"}</p>
    </>
  );
}
