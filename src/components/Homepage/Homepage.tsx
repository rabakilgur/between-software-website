import "../../style/index.scss";
import DarkModeToggleCornerWrapper from "../DarkModeToggle/DarkModeToggleCornerWrapper";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import Tooltip from "../Tooltip/Tooltip";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import useDarkMode from "../../vendor/hooks/useDarkMode";
import Header from "../Header/Header";

const Homepage = ({ path }: { path: string }) => {
	return (
		<>
			<Header dynamicBg blowOutLogo />

			<div className="container mx-auto" style={{ paddingInline: "1.2rem" }}>
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
			</div>
		</>
	);
};
export default Homepage;
