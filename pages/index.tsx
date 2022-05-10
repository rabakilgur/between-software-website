import type NextPage from "next";
import Head from "next/head";
import { Button, PageHeader } from "antd";
import useDarkMode from "../lib/use-dark-mode";
import { Header } from "antd/lib/layout/layout";

const Home: NextPage = () => {
	const [colorTheme, setTheme] = useDarkMode();

	return (
		<>
			<Head>
				<title>Between Software</title>
			</Head>
			<PageHeader>
				<a className="logo-wrapper" href="./">
					<i className="logo"></i>
					<span>Between Software</span>
				</a>
				<Button type="primary" onClick={() => setTheme("light")}>Light Theme</Button>
				<Button type="primary" onClick={() => setTheme("dark")}>Dark Theme</Button>
			</PageHeader>
			<header className="show-shadow">

			</header>
		</>
	);
};

export default Home;
