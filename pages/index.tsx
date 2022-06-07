import type { NextPage } from "next";
import Head from "next/head";
import FrontPage from "../components/frontpage/frontpage";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Between Software</title>
			</Head>
			<FrontPage />
		</>
	);
};

export default Home;

