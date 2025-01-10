import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  cloneElement,
  useState,
} from "react";
import { useRouter } from "next/router";

const AnimatedTitleContext = createContext();

export const AnimatedTitleProvider = ({ children }) => {
  const router = useRouter();
  const [currentPage] = useState(router.pathname);

  const [isWriting, setIsWriting] = useState(true);
  const [isErasing, setIsErasing] = useState(false);
  const [isPageLanding, setIsPageLanding] = useState(true);

  const isAnimating = useMemo(
    () => isWriting || isErasing,
    [isWriting, isErasing]
  );

  useEffect(() => {
    if (router.pathname !== currentPage && isPageLanding) {
      setIsPageLanding(false);
    }
  }, [router.pathname, currentPage]);

  const shouldAnimateOut = useMemo(
    () => !isPageLanding && isErasing,
    [isErasing, isPageLanding]
  );

  return (
    <AnimatedTitleContext.Provider
      value={{
        isAnimating,
        isErasing,
        setIsWriting,
        setIsErasing,
        shouldAnimateOut,
      }}
    >
      {children}
    </AnimatedTitleContext.Provider>
  );
};

export const useAnimatedTitle = () => {
  return useContext(AnimatedTitleContext);
};

export const KeepMounted = ({ children }) => {
  const { shouldAnimateOut } = useAnimatedTitle();
  const [previousChildren, setPreviousChildren] = useState(null);
  const [currentChildren, setCurrentChildren] = useState(children);

  useEffect(() => {
    if (previousChildren !== children) {
      setPreviousChildren(children);
    }
  }, [children, previousChildren]);

  useEffect(() => {
    if (!shouldAnimateOut && previousChildren === children) {
      setCurrentChildren(children);
    }
  }, [shouldAnimateOut, children, previousChildren]);

  return currentChildren;
};
