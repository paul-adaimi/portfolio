import { useState } from "react";
import styles from "./Index.module.css";
import VSCode from "./VSCode";
import Phone from "../Global/Phone";
import Laptop from "../Global/Laptop";
import Image from "next/image";
import { useAnimatedTextCoordinator } from "../Global/AnimatedTextCoordinatorProvider";
import { useAnimatedTitle } from "../Global/AnimatedTitleProvider";
import { AnimatedTextCoordinatorProvider } from "../Global/AnimatedTextCoordinatorProvider";
import { DelayRender, useDelayedRender } from "../Global/DelayRender";

// TODO: Fix Unique Keys

export default function Index({ projects }) {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const { shouldAnimateOut, isAnimating } = useAnimatedTitle();

  return (
    <>
      <div className={styles.main}>
        <AnimatedTextCoordinatorProvider shouldStart={!isAnimating}>
          <VSCodeWithTextCoordinator
            setSelectedProject={setSelectedProject}
            selectedProject={selectedProject}
            projects={projects}
          />
        </AnimatedTextCoordinatorProvider>

        <div
          className={`${styles.deviceContainer} ${
            shouldAnimateOut && styles.animateOut
          }`}
        >
          <DelayRender isActive={!isAnimating} delay={1000}>
            <Device
              isAnimating={isAnimating}
              selectedProject={selectedProject}
            />
          </DelayRender>
        </div>
      </div>
      <p className={styles.footer}>{"</My Projects>"}</p>
    </>
  );
}

const VSCodeWithTextCoordinator = ({
  selectedProject,
  setSelectedProject,
  projects,
}) => {
  const { setForceRestart } = useAnimatedTextCoordinator();

  const handleTabClick = (project) => {
    if (selectedProject === project) {
      return;
    }
    setSelectedProject(project);
    setForceRestart(true);
  };

  return (
    <VSCode
      selectedProject={selectedProject}
      handleTabClick={handleTabClick}
      projects={projects}
    />
  );
};

const Device = ({ selectedProject, isAnimating }) => {
  const { isDelaying } = useDelayedRender();
  return (
    <div
      className={`${styles.device} ${!isAnimating && styles.animateIn} ${
        isDelaying && !isAnimating && styles.animateOut
      }`}
    >
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
  );
};
