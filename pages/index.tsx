import type { NextPage } from "next";
import Head from "next/head";
import FrontPage from "../components/frontpage/frontpage";
import Header from "../components/header/header";
import ThemeToggle from "../components/theme-toggle/theme-toggle";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Between Software</title>
			</Head>
			{/* <FrontPage /> */}
			<Header />
			<span id="top"></span>
		</>
	);
};

export default Home;

