import React, { createContext, useContext, useEffect, useState } from "react";

const AnimatedTextCoordinatorContext = createContext();

export const AnimatedTextCoordinatorProvider = ({
  children,
  shouldStart = true,
}) => {
  const [currentAnimatingId, setCurrentAnimatingId] = useState(-1);
  const [forceRestart, setForceRestart] = useState(false);

  useEffect(() => {
    if (shouldStart) {
      setCurrentAnimatingId(0);
    } else {
      setCurrentAnimatingId(-1);
    }
  }, [shouldStart, forceRestart]);

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
