import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function useDarkMode(): ["dark"|"light", React.Dispatch<React.SetStateAction<"dark" | "light">>] {
	const [theme, setTheme] = useState(
		typeof window !== "undefined" ? String(localStorage.theme) : "dark"
	) as ["dark" | "light", Dispatch<SetStateAction<"dark" | "light">>];

	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove((theme === "dark" ? "light" : "dark") + "-theme");
		root.classList.add(theme + "-theme");
		if (typeof window !== "undefined") localStorage.setItem("theme", theme);
	}, [theme]);
	return [theme, setTheme];
}
