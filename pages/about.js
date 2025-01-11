import { useMemo } from "react";
import Index from "../components/AboutPage/Index";
import { AnimatedTextCoordinatorProvider } from "../components/Global/AnimatedTextCoordinatorProvider";
import { useAnimatedTitle } from "../components/Global/AnimatedTitleProvider";

export default function About() {
  const data = useMemo(
    () => ({
      education: [
        {
          title: "Northeastern University",
          description: `Master of Science in Computer Science`,
        },
        {
          title: "American University of Beirut",
          description: "Bachelor of Science in Computer Science",
        },
        {
          title: "International College",
          description: "Graduate Certificate in Data Science",
        },
      ],
      experience: [
        {
          title: "Northeastern University",
          description: "Software Engineer",
        },
        {
          title: "GTLogic",
          description: "Software Engineer",
        },
        {
          title: "Murex",
          description: "Software Engineer",
        },
        {
          title: "American University of Beirut",
          description: `Collaborated with two AUB professors on a General Electric funded project aimed at improving crowd management in public spaces, such as Mecca during pilgrimage, by predicting incidents through analysis of sensor data including heart rate, accelerometer, and GPS.

Developed, in JavaScript, a data visualization tool that anticipates potential stampede locations
and timings, enhancing preventive measures.

Engineered a client-server application for data acquisition from Android mobiles and custom wear-
ables, facilitating streamlined data gathering.`,
        },
      ],
    }),
    []
  );
  const { isAnimating } = useAnimatedTitle();
  return (
    <AnimatedTextCoordinatorProvider shouldStart={!isAnimating}>
      <Index data={data} />
    </AnimatedTextCoordinatorProvider>
  );
}
