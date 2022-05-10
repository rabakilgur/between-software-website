import "../styles/globals.css";
import "../styles/antd.less";

import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}

export default App;
