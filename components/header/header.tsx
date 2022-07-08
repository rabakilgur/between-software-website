import { useContext, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { AppContext } from "../../pages/_app";
import Btn from "../btn/btn";
import Logo from "../logo/logo";
import ThemeToggle from "../theme-toggle/theme-toggle";
import C from "classnames";
import S from "./header.module.scss";

let themeMode: "light" | "dark" | undefined;

export default function Header(props) {
	const { dynamicBg, blowOutLogo } = props;
	const { theme, setTheme } = useContext(AppContext);

	useEffect(() => {
		themeMode = theme;
		if (dynamicBg) handleDynamicBg();
	}, [theme]);

	useEffect(() => { window.onscroll = handleScroll }, []);

	const handleDynamicBg = async () => {
		// When the user scrolls down 50px from the top of the document:
		if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
			document.getElementById("header")!.style.backgroundColor = themeMode === "dark" ? "#232527cc" : "#ebeceecc";
		} else {
			document.getElementById("header")!.style.backgroundColor = "transparent";
		}
	}
	const handleBlowOutLogo = async () => {
		// When the user scrolls down 50px from the top of the document:
		if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
			document.getElementById("header-logo")!.classList.remove(S.blownOutLogo);
		} else {
			document.getElementById("header-logo")!.classList.add(S.blownOutLogo);
		}
	}

	function handleScroll() {
		if (dynamicBg) handleDynamicBg();
		if (blowOutLogo) handleBlowOutLogo();
	}

	return (
		<Navbar id="header" variant={theme ?? "light"} fixed="top" collapseOnSelect expand="lg" className={S.header}>
			<Container>
				<Navbar.Brand href="#start">
					<Logo width="60%" color="var(--shade-900)" id="header-logo" className={S.blownOutLogo} />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="header-navigation" />
				<Navbar.Collapse id="header-navigation">
					<Nav className="ms-auto">
						<Nav.Link href="#leistungen" className="px-3">Leistungen</Nav.Link>
						<Nav.Link href="#referenzen" className="px-3">Referenzen</Nav.Link>
						<Nav.Link href="#wer-wir-sind" className="px-3">Wer wir sind</Nav.Link>
						<a href="#kontakt" className={C(S.headerFlex)}><Btn variant="primary" className="ms-3">Kontakt</Btn></a>
						<ThemeToggle className={C(S.headerFlex, S.headerItem, "px-2 ms-3")} />
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
