import { useEffect, useState } from "react";

function useDarkMode(): ["dark"|"light", React.Dispatch<React.SetStateAction<string>>] {
	const [theme, setTheme] = useState(
		typeof window !== "undefined" ? String(localStorage.theme) : "dark"
	);
	const colorTheme = theme === "dark" ? "light" : "dark";

	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.remove(colorTheme);
		root.classList.add(theme);

		if (typeof window !== "undefined") localStorage.setItem("theme", theme);
	}, [theme]);

	return [colorTheme, setTheme];
}

export default useDarkMode;
