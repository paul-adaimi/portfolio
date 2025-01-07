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
    <div className={styles.content}>
      <div className={styles.titleContainer}>
        <AnimatedTitle>{"My Projects"}</AnimatedTitle>
      </div>
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
              src="/images/bleumer.png"
              alt="Bleumer"
              width={300}
              height={400}
              style={{
                borderRadius: 20,
              }}
            />
          </Phone>
        )}

        {/* <Phone isFull={true}>

        </Phone> */}
      </div>
    </div>
  );
}
