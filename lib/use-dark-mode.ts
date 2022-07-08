import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const getTheme = () => (localStorage.getItem("theme") ?? "undefined") !== "undefined" ? String(localStorage.getItem("theme")) : undefined;

export default function useDarkMode(): ["dark"|"light", React.Dispatch<React.SetStateAction<"dark" | "light">>] {
	const [theme, setTheme] = useState(
		typeof window !== "undefined" ? getTheme() : "light"
	) as ["dark" | "light", Dispatch<SetStateAction<"dark" | "light">>];

	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove((theme === "dark" ? "light" : "dark") + "-theme");
		root.classList.add(theme + "-theme");
		if (typeof window !== "undefined") localStorage.setItem("theme", theme);
	}, [theme]);
	return [theme, setTheme];
}
