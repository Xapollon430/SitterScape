import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

//This hook is to literally just show off my skills... I don't even use it...

export const useResponsive = () => {
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
