import AnimatedTitle from "../AnimatedTitle";
import styles from "./Index.module.css";
import VSCode from "./VSCode";
import { useMemo } from "react";

export default function Index() {
  const projects = useMemo(
    () => [
      {
        title: "Bleumer",
        description: "This is the description for Project 1",
      },
      {
        title: "Book Me",
        description: "This is the description for Project 2",
      },
      {
        title: "Air Hockey",
        description: "This is the description for Project 3",
      },
    ],
    []
  );
  return (
    <div className={styles.content}>
      <div className={styles.titleContainer}>
        <AnimatedTitle>{"My Projects"}</AnimatedTitle>
      </div>
      <VSCode projects={projects} />
    </div>
  );
}
