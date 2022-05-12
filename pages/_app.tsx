import type { AppProps } from "next/app";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import useDarkMode from "../lib/use-dark-mode";
import "../styles/theme.scss";
import "../styles/globals.scss";

export const AppContext = React.createContext({
	theme: undefined,
	setTheme: (theme: "dark" | "light") => undefined
}) as React.Context<{
	theme?: "dark" | "light";
	setTheme: Dispatch<SetStateAction<"dark" | "light">> | ((theme: "dark" | "light") => undefined);
}>;

function App({ Component, pageProps }: AppProps) {
	const [theme, setTheme] = useDarkMode();

	return (
		<AppContext.Provider value={{ theme, setTheme }}>
			<Component {...pageProps} />
		</AppContext.Provider>
	);
}

export default App;
