import React, {
  useState,
  useEffect,
  useRef,
  createContext,
  useContext,
} from "react";

// Context to track delaying status
const DelayedRenderContext = createContext(false);

// Hook to access the delay status
export const useDelayedRender = () => {
  return useContext(DelayedRenderContext);
};

export const DelayRender = ({ children, delay, shouldSkipFirst = true }) => {
  const [currentChild, setCurrentChild] = useState(children);
  const isActiveRef = useRef(!shouldSkipFirst);
  const [isDelaying, setIsDelaying] = useState(false);

  useEffect(() => {
    let timeout;
    if (children === currentChild) {
      return;
    } else if (isActiveRef.current) {
      isActiveRef.current = false;
      setCurrentChild(children);
    } else {
      setIsDelaying(true);

      // Delay the render of the new child
      timeout = setTimeout(() => {
        setCurrentChild(children);
        setIsDelaying(false);
      }, delay);
    }

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [children, delay, currentChild]);

  return (
    <DelayedRenderContext.Provider value={{ isDelaying }}>
      {currentChild}
    </DelayedRenderContext.Provider>
  );
};
