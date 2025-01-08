import styles from "./VSCode.module.css";
import ProjectsList from "./ProjectsList";

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
          <div className={styles.projectInfo}>
            <p className={styles.text}>
              <span className={styles.code}>{"<Type> "}</span>
              {selectedProject.type === "phone"
                ? "Mobile Application"
                : "Web Application"}
              <span className={styles.code}>{" </Type>"}</span>
            </p>
            <p className={styles.text}>
              <span className={styles.code}>{"<Year> "}</span>
              {selectedProject.year}
              <span className={styles.code}>{" </Year>"}</span>
            </p>
            {selectedProject.productionLinks && (
              <p className={styles.text}>
                <span className={styles.code}>{"<Production Links>"}</span>
                <br />
                {Object.keys(selectedProject.productionLinks).map(
                  (linkKey, index) => (
                    <>
                      <span
                        style={{ marginLeft: "20px" }}
                        className={styles.code}
                      >
                        {"<" + linkKey + "> "}
                      </span>
                      <a
                        href={selectedProject.productionLinks[linkKey]}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          textDecoration: "underline",
                        }}
                      >
                        {selectedProject.productionLinks[linkKey]}
                      </a>
                      <span className={styles.code}>
                        {" </" + linkKey + ">"}
                      </span>
                      <br />
                    </>
                  )
                )}
                <span className={styles.code}>{" </Production Links>"}</span>
              </p>
            )}

            <p className={styles.text}>
              <span className={styles.code}>{"<Technologies>"}</span>
              <br />
              {selectedProject.technologies.map((tech, index) => (
                <>
                  <span style={{ marginLeft: "20px" }} className={styles.code}>
                    {"<Tech-" + (index + 1) + "> "}
                  </span>
                  {tech}
                  <span className={styles.code}>
                    {" </Tech-" + (index + 1) + ">"}
                  </span>
                  <br />
                </>
              ))}
              <span className={styles.code}>{" </Technologies>"}</span>
            </p>
            <div className={styles.descriptionContainer}>
              <p className={styles.text + " " + styles.code}>
                {"<Description> "}
              </p>
              <div className={styles.description + " " + styles.text}>
                <p className={styles.descriptionText}>
                  {selectedProject.description}
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
