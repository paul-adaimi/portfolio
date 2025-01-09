import React, { createContext, useContext, useState } from "react";

const AnimatedTitleContext = createContext();

export const AnimatedTitleProvider = ({ children }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  return (
    <AnimatedTitleContext.Provider
      value={{
        isAnimating,
        setIsAnimating,
      }}
    >
      {children}
    </AnimatedTitleContext.Provider>
  );
};

export const useAnimatedTitle = () => {
  return useContext(AnimatedTitleContext);
};
