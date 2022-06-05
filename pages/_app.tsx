import type { AppProps } from "next/app";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import useDarkMode from "../lib/use-dark-mode";
import "../styles/theme.scss";
import "../styles/globals.scss";
import ThemeToggle from "../components/theme-toggle/theme-toggle";

export const AppContext = React.createContext({
	theme: undefined,
	setTheme: (theme: "dark" | "light") => undefined
}) as React.Context<{
	theme?: "dark" | "light";
	setTheme: Dispatch<SetStateAction<"dark" | "light">> | ((theme: "dark" | "light") => undefined);
}>;

function App({ Component, pageProps }: AppProps) {
	const [theme, setTheme] = useDarkMode();
	const [hostPathName, setHostPathName] = useState("");
	useEffect(() => {
		if (typeof window !== "undefined") {
			window.location.pathname == "/" ? 
			setHostPathName("/home") : 
			setHostPathName(location.pathname);
		}
	}, [])
	return (
		<AppContext.Provider value={{ theme, setTheme }}>

			<div className="shadow-sm d-flex justify-content-center">
				<div className="pt-1 ps-1 d-flex col ">
					<h3 className=""> Hier das Beetween logo </h3>
				</div>
				<div className="pt-5">
				<button className="col">mock Contact</button>
				<button className="col">mock Shop</button>
				<button className="col">mock Design</button>
				<button className="col">mock Playground</button>
				</div>
				<div className="col d-flex justify-content-end">
					<h3 className="pt-5">{hostPathName}</h3>
					<div className="pe-1 pt-1">
						<ThemeToggle className="btn btn-icon btn-secondary rounded-pill" />
					</div>
				</div>
			</div>

			<Component {...pageProps} />
		</AppContext.Provider>
	);
}

export default App;
