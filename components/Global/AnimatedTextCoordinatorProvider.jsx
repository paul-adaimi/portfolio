import React, { createContext, useContext, useEffect, useState } from "react";

const AnimatedTextCoordinatorContext = createContext();

export const AnimatedTextCoordinatorProvider = ({
  children,
  shouldStart = true,
}) => {
  const [currentAnimatingId, setCurrentAnimatingId] = useState(-1);
  const [forceRestart, setForceRestart] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if ((shouldStart && !isDone) || forceRestart) {
      setCurrentAnimatingId(0);
      setIsDone(true);
      setForceRestart(false);
    }
  }, [shouldStart, forceRestart, isDone]);

  return (
    <AnimatedTextCoordinatorContext.Provider
      value={{
        currentAnimatingId,
        setCurrentAnimatingId,
        setForceRestart,
      }}
    >
      {children}
    </AnimatedTextCoordinatorContext.Provider>
  );
};

export const useAnimatedTextCoordinator = () => {
  return useContext(AnimatedTextCoordinatorContext);
};
