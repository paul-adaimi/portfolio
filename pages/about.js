import { useMemo } from "react";
import Index from "../components/AboutPage/Index";
import { AnimatedTextCoordinatorProvider } from "../components/Global/AnimatedTextCoordinatorProvider";
import { useAnimatedTitle } from "../components/Global/AnimatedTitleProvider";

export default function About() {
  const data = useMemo(
    () => ({
      education: [
        {
          sectionName: "Northeastern University",
          type: "Master of Science in Computer Science",
          period: "Septermber 2023 - Expected May 2025",
          more: "GPA: 4.0",
        },
        {
          sectionName: "American University of Beirut",
          type: "Bachelor of Engineering in Computer and Communication Engineering",
          period: "Septermber 2015 - December 2019",
          more: `Placed on the Dean’s Honor List in Spring 2016, Fall 2017, Spring 2017, Fall 2018, Fall 2019.

Graduated with Honors
`,
        },
        {
          sectionName: "International College",
          type: "Bacalaureate in General Sciences",
          period: "2012 - 2015",
          more: "Graduated with distinction",
        },
      ],
      experience: [
        {
          sectionName: "Northeastern University",
          "title 1": "Teaching Assistant - Web Development",
          "period 1": "September 2024 - May 2025",
          "title 2": "Head Teaching Assistant - Algorithms",
          "period 2": "January 2023 - May 2023",
          description: `Offering weekly recitations to provide hands-on experience with implementations, debugging, and optimization techniques.

Grading quizzes and homework while offering constructive feedback to support student learning and progress.`,
        },
        {
          sectionName: "GTLogic",
          title: "Web Developer",
          period: "February 2020 - September 2023",
          technologies: `Frameworks: Ember.js, React
Langauges: TypeScript, JavaScript, HTML, CSS
Version Control: Git, Github
CI/CD: CircleCI, SonarCloud, Percy`,
          description: `Developed the front-end for Vimly Benefits Solutions’ SIMON web-app, enhancing employer-supported staff decisions on health benefits and plan costs.

Revamped MagMutual’s One-Model web-app from a legacy React code to a more modern and improved version, upgrading the platform for physicians managing their medical practice insurance.

Trained more than 10 new hires in company-specific technologies, enhancing team proficiency and integration.`,
        },
        {
          sectionName: "Murex",
          title: "Full-Stack Developer, Intern",
          period: "May 2019 - August 2019",
          technologies: `Frameworks: React, Java Spring, DotNet Core
Langauges: Java, C#, JavaScript, HTML, CSS
Version Control: Git, Github
CI/CD: Jenkins`,
          description: `Engineered, in a team of three, a back-end web service using Java Spring and C#, coupled with React for front-end, to automate command sequences for Murex developers, enhancing task flow in cloud environments.`,
        },
        {
          sectionName: "American University of Beirut",
          title: "Research Assistant",
          period: "May 2017 - May 2018",
          technologies: `Frameworks: JQuery, D3.js
Langauges: JavaScript, HTML, CSS`,
          description: `Collaborated with two AUB professors on a General Electric funded project aimed at improving crowd management in public spaces, such as Mecca during pilgrimage, by predicting incidents through analysis of sensor data including heart rate, accelerometer, and GPS.

Developed, in JavaScript, a data visualization tool that anticipates potential stampede locations
and timings, enhancing preventive measures.

Engineered a client-server application for data acquisition from Android mobiles and custom wearables, facilitating streamlined data gathering.`,
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
