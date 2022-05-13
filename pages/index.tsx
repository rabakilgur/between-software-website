import type { NextPage } from "next";
import Head from "next/head";
import ThemeToggle from "../components/theme-toggle/theme-toggle";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Between Software</title>
			</Head>
			<div className="p-4">
				<ThemeToggle className="btn btn-icon btn-secondary rounded-pill" />
				<h1 className="pt-4 text-center">In Arbeit...</h1>
			</div>
		</>
	);
};

export default Home;
