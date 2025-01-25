import { useEffect, useState } from "react";
import { MOBILE_MAX_WIDTH } from "../constants";

const useCurrentDimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function updateResize() {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener("resize", updateResize);

    return () => {
      window.removeEventListener("resize", updateResize);
    };
  }, [dimensions]);
  return {
    dimensions,
  };
};

export default useCurrentDimensions;

export const useIsMobile = (): boolean => {
  const { dimensions } = useCurrentDimensions();
  return dimensions.width <= MOBILE_MAX_WIDTH;
};

/**
 * This custom hook is designed to provide real-time tracking of the window's dimensions
 * and an additional utility to determine if the current viewport width qualifies as "mobile".
 */
