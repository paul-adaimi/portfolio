import styles from "./VSCode.module.css";
import ProjectsList from "./ProjectsList";
import AnimatedTextCoordinated from "../Global/AnimatedTextCoordinated";
import { useAnimatedTitle } from "../Global/AnimatedTitleProvider";

export default function VSCode({ projects, selectedProject, handleTabClick }) {
  const { shouldAnimateOut } = useAnimatedTitle();

  return (
    <div
      className={`${styles.window} ${shouldAnimateOut && styles.animateOut}`}
    >
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
          <div key={selectedProject.id} className={styles.projectInfo}>
            <p className={styles.text}>
              <span className={styles.code}>{"<Type> "}</span>
              <AnimatedTextCoordinated id={0}>
                {selectedProject.type === "phone"
                  ? "Mobile App"
                  : selectedProject.type === "web"
                  ? "Web App"
                  : "Desktop App"}
              </AnimatedTextCoordinated>
              <span className={styles.code}>{" </Type>"}</span>
            </p>
            <p className={styles.text}>
              <span className={styles.code}>{"<Year> "}</span>
              <AnimatedTextCoordinated id={1}>
                {selectedProject.year}
              </AnimatedTextCoordinated>
              <span className={styles.code}>{" </Year>"}</span>
            </p>
            {selectedProject.productionLinks && (
              <p className={styles.text}>
                <span className={styles.code}>{"<Production Links>"}</span>
                <br />
                {Object.keys(selectedProject.productionLinks).map(
                  (linkKey, index) => (
                    <span key={index}>
                      <span
                        style={{ marginLeft: "20px" }}
                        className={styles.code}
                      >
                        {"<" + index + "> "}
                      </span>
                      <a
                        href={selectedProject.productionLinks[linkKey]}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          textDecoration: "underline",
                        }}
                        aria-label={`Visit ${
                          selectedProject.title
                        } on ${capitalize(linkKey)}`}
                      >
                        <AnimatedTextCoordinated typingSpeed={20} id={2}>
                          {capitalize(linkKey)}
                        </AnimatedTextCoordinated>
                      </a>
                      <span className={styles.code}>{"</" + index + "> "}</span>
                      <br />
                    </span>
                  )
                )}
                <span className={styles.code}>{" </Production Links>"}</span>
              </p>
            )}

            <p className={styles.text}>
              <span className={styles.code}>{"<Technologies>"}</span>
              <br />
              {selectedProject.technologies.map((tech, index) => (
                <span style={{ whiteSpace: "nowrap" }} key={index}>
                  <span style={{ marginLeft: "20px" }} className={styles.code}>
                    {"<" + (index + 1) + "> "}
                  </span>
                  <AnimatedTextCoordinated
                    typingSpeed={50}
                    id={selectedProject.productionLinks ? 3 : 2}
                    noWrap={true}
                  >
                    {tech}
                  </AnimatedTextCoordinated>
                  <span className={styles.code}>
                    {" </" + (index + 1) + ">"}
                  </span>
                  <br />
                </span>
              ))}
              <span className={styles.code}>{" </Technologies>"}</span>
            </p>
            <div className={styles.descriptionContainer}>
              <p className={styles.text + " " + styles.code}>
                {"<Description> "}
              </p>
              <div className={styles.description + " " + styles.text}>
                <p className={styles.descriptionText}>
                  <AnimatedTextCoordinated
                    typingSpeed={10}
                    id={selectedProject.productionLinks ? 4 : 3}
                  >
                    {selectedProject.description}
                  </AnimatedTextCoordinated>
                </p>
              </div>
              <p className={styles.text + " " + styles.code}>
                {"</Description> "}
              </p>
            </div>
          </div>
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

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
