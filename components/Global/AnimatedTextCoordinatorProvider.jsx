import React, {
  createContext,
  use,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const AnimatedTextCoordinatorContext = createContext();

export const AnimatedTextCoordinatorProvider = ({
  children,
  shouldStart = true,
}) => {
  const [currentAnimatingId, setCurrentAnimatingId] = useState(-1);
  const [forceRestart, setForceRestart] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [idCount, setIdCount] = useState({});
  const [animatingIdCalls, setAnimatingIdCalls] = useState({});

  const setId = useCallback((id) => {
    setIdCount((prev) => ({
      ...prev,
      [id]: prev[id] ? prev[id] + 1 : 1,
    }));
  }, []);

  const updateAnimatingIdCalls = useCallback((id) => {
    setAnimatingIdCalls((prev) => ({
      ...prev,
      [id]: prev[id] ? prev[id] + 1 : 1,
    }));
  }, []);

  useEffect(() => {
    if (
      animatingIdCalls[currentAnimatingId] &&
      animatingIdCalls[currentAnimatingId] === idCount[currentAnimatingId]
    ) {
      setCurrentAnimatingId(currentAnimatingId + 1);
    }
  }, [idCount, animatingIdCalls, currentAnimatingId]);

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
        setId,
        updateAnimatingIdCalls,
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
