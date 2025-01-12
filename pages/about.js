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
          type: "Master of Science in Computer Science",
          years: "Septermber 2023 - Expected May 2025",
          more: "GPA: 4.0",
        },
        {
          title: "American University of Beirut",
          type: "Bachelor of Engineering in Computer and Communication Engineering",
          years: "Septermber 2015 - December 2019",
          more: `Placed on the Dean’s Honor List in Spring 2016, Fall 2017, Spring 2017, Fall 2018, Fall 2019.

Graduated with Honors
`,
        },
        {
          title: "International College",
          type: "Bacalaureate in General Sciences",
          years: "2012 - 2015",
          more: "Graduated with distinction",
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
