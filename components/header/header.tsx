import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { AppContext } from "../../pages/_app";
import Btn from "../btn/btn";
import Logo from "../logo/logo";
import ThemeToggle from "../theme-toggle/theme-toggle";
import C from "classnames";
import S from "./header.module.scss";

export default function Header(props) {
	const { theme, setTheme } = useContext(AppContext);

	return (
		<Navbar bg={theme ?? "dark"} variant={theme ?? "dark"} className={S.header}>
			<Container>
				<Navbar.Brand href="#top">
					<Logo width="60%" color="var(--shade-900)" />
				</Navbar.Brand>
				<Nav className="ms-auto">
					<Nav.Link href="#about" className="px-3">Über uns</Nav.Link>
					<Nav.Link href="#features" className="px-3">Features</Nav.Link>
					<Nav.Link href="#pricing" className="px-3">Preise</Nav.Link>
					<a href="#kontakt" className={S.headerFlex}><Btn variant="primary" className="ms-3">Kontakt</Btn></a>
					<ThemeToggle className={C(S.headerFlex, "px-2 ms-3")} />
				</Nav>
			</Container>
		</Navbar>
	);
};
