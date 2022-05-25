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

			<div className="shadow-sm">
				<div className="pt-4 d-flex justify-content-between">
					<h1></h1>
					<h1 className="">Between-Software</h1>
					<div className="pe-4">
						<ThemeToggle className="btn btn-icon btn-secondary rounded-pill" />
					</div>
				</div>
				<div className="pe-4 d-flex justify-content-end">
					<h2>{hostPathName}</h2>
				</div>
			</div>

			<Component {...pageProps} />
		</AppContext.Provider>
	);
}

export default App;
