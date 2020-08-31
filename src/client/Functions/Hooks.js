import { useState, useEffect } from "react";

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
