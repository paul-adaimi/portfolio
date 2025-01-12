import { useMemo } from "react";
import Index from "../components/AboutPage/Index";
import { AnimatedTextCoordinatorProvider } from "../components/Global/AnimatedTextCoordinatorProvider";
import { useAnimatedTitle } from "../components/Global/AnimatedTitleProvider";

// TODO: change accordion title color
export default function About() {
  const data = useMemo(
    () => ({
      education: [
        {
          title: "Northeastern University",
          from: "Septermber 2023",
          to: "Expected May 2025",
          description: `Master of Science in Computer Science
GPA: 4.0`,
        },
        {
          title: "American University of Beirut",
          from: "Septermber 2015",
          to: "December 2019",
          description: `Bachelor of Engineering in Computer and Communication Engineering
Placed on the Dean’s Honor List in Spring 2016, Fall 2017, Spring 2017, Fall 2018, Fall 2019

Graduated with Honors
`,
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
