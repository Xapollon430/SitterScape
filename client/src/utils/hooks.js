import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// This hook is to literally just show off my skills... I don't even use it...
// Looking at this a year later I found a better solution. I kept the shitty version down below
// New version is more concise and performant
export const useResponsive = () => {
  let [isMenuShowing, setIsMenuShowing] = useState(
    window.innerWidth > 700 ? true : false
  );

  const showMenu = () => {
    setIsMenuShowing(!isMenuShowing);
  };

  useEffect(() => {
    let resizer = window.addEventListener("resize", () => {
      window.innerWidth > 700
        ? setIsMenuShowing(true)
        : setIsMenuShowing(false);
    });
    return () => {
      window.removeEventListener("resize", resizer);
    };
  }, []);

  return [isMenuShowing, showMenu];
};

export const useShittyOldUseResponsive = () => {
  let [isMenuShowing, setIsMenuShowing] = useState(false);
  let [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const showMenu = () => {
    setIsMenuShowing(!isMenuShowing);
  };

  useEffect(() => {
    let resizer = window.addEventListener("resize", () => {
      setInnerWidth(window.innerWidth);
    });
    innerWidth > 700 ? setIsMenuShowing(true) : setIsMenuShowing(false);
    return () => {
      window.removeEventListener("resize", resizer);
    };
  }, [innerWidth]);

  return [showMenu, isMenuShowing];
};

export const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};
