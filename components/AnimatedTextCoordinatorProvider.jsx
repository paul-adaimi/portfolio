import React, { createContext, useContext, useEffect, useState } from "react";

const AnimatedTextCoordinatorContext = createContext();

export const AnimatedTextCoordinatorProvider = ({
  children,
  shouldStart = true,
}) => {
  const [currentAnimatingId, setCurrentAnimatingId] = useState(-1);

  useEffect(() => {
    if (shouldStart) {
      setCurrentAnimatingId(0);
    } else {
      setCurrentAnimatingId(-1);
    }
  }, [shouldStart]);

  return (
    <AnimatedTextCoordinatorContext.Provider
      value={{
        currentAnimatingId,
        setCurrentAnimatingId,
      }}
    >
      {children}
    </AnimatedTextCoordinatorContext.Provider>
  );
};

export const useAnimatedTextCoordinator = () => {
  return useContext(AnimatedTextCoordinatorContext);
};
