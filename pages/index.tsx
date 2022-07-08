import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Container } from "react-bootstrap";
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
			<Header dynamicBg blowOutLogo />
			<span id="start"></span>
			<Container className="position-relative">
				<img src="./between_frontpage_bg.png" width="60%" className="position-absolute end-0 m-3" style={{ top: "80px" }} />
			</Container>
			<Container>
				<div style={{ height: "400px" }}></div>
				<p>Lorem Ipsum</p>
				<div style={{ height: "400px" }}></div>
				<p>Lorem Ipsum</p>
				<div style={{ height: "400px" }}></div>
				<p>Lorem Ipsum</p>
				<div style={{ height: "400px" }}></div>
				<p>Lorem Ipsum</p>
				<div style={{ height: "400px" }}></div>
				<p>Lorem Ipsum</p>
				<div style={{ height: "400px" }}></div>
				<p>Lorem Ipsum</p>
				<div style={{ height: "400px" }}></div>
				<p>Lorem Ipsum</p>
				<div style={{ height: "400px" }}></div>
			</Container>
		</>
	);
};

export default Home;

