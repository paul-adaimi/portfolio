import { useMemo } from "react";
import Index from "../components/AboutPage/Index";
import { AnimatedTextCoordinatorProvider } from "../components/Global/AnimatedTextCoordinatorProvider";
import { useAnimatedTitle } from "../components/Global/AnimatedTitleProvider";

export default function About() {
  const data = useMemo(
    () => ({
      education: [
        {
          title: "American University of Beirut",
          description: "Bachelor of Science in Computer Science",
        },
        {
          title: "Northeastern University",
          description: `Master of Science in Computer Science Master of Science in Computer Science Master of Science in Computer Science

Master of Science in Computer Science Master of Science in Computer Science Master of Science in Computer Science`,
        },
        {
          title: "Harvard University",
          description: "Graduate Certificate in Data Science",
        },
      ],
      experience: [
        {
          title: "Google",
          description: "Software Engineer",
        },
        {
          title: "Facebook",
          description: "Software Engineer",
        },
        {
          title: "Microsoft",
          description: "Software Engineer",
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
