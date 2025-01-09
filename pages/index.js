import Index from "../components/HomePage/Index";
import { useAnimatedTitle } from "../components/AnimatedTitleProvider";
import { AnimatedTextCoordinatorProvider } from "../components/AnimatedTextCoordinatorProvider";

export default function Home() {
  const { isAnimating } = useAnimatedTitle();
  return (
    <AnimatedTextCoordinatorProvider shouldStart={!isAnimating}>
      <Index />
    </AnimatedTextCoordinatorProvider>
  );
}
