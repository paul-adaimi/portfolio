import Index from "../components/HomePage/Index";
import { useAnimatedTitle } from "../components/Global/AnimatedTitleProvider";
import { AnimatedTextCoordinatorProvider } from "../components/Global/AnimatedTextCoordinatorProvider";

export default function Home() {
  const { isAnimating } = useAnimatedTitle();
  return (
    <AnimatedTextCoordinatorProvider shouldStart={!isAnimating}>
      <Index />
    </AnimatedTextCoordinatorProvider>
  );
}
