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
			<ThemeToggle className="btn btn-icon btn-secondary rounded-pill position-fixed end-0 bottom-0 mb-3 me-4 shadow-lg fs-2" />
		</>
	);
};

export default Home;

