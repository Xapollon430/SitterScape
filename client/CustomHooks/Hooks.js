import { useState, useEffect } from "react";

export const useResponsive = () => {
	let [isHamburgerOpen, setisHamburgerOpen] = useState(false);
	let [innerWidth, setInnerWidth] = useState(window.innerWidth);

	const showHamburger = () => {
		setisHamburgerOpen(!isHamburgerOpen);
	};

	useEffect(() => {
		let resizer = window.addEventListener("resize", () => {
			setInnerWidth(window.innerWidth);
		});
		innerWidth > 700 ? setisHamburgerOpen(true) : setisHamburgerOpen(false);
		return () => {
			window.removeEventListener("resize", resizer);
		};
	}, [innerWidth]);

	return [showHamburger, isHamburgerOpen];
};
