import { useMemo } from "react";
import Index from "../../components/ProjectsPage/Index";

export default function Projects() {
  const projects = useMemo(
    () => [
      {
        title: "Bleumer",
        description: "This is the description for Project 1",
        type: "phone",
      },
      {
        title: "Book Me",
        description: "This is the description for Project 2",
        type: "web",
      },
      {
        title: "Air Hockey",
        description: "This is the description for Project 3",
        type: "phone",
      },
    ],
    []
  );
  return <Index projects={projects} />;
}
