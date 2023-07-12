import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import useEventListener from "@use-it/event-listener";
import C from "classnames";
import { useEffect, useState } from "preact/hooks";
import "../../style/index.scss";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import Logo from "../Logo/Logo";
import S from "./Header.module.scss";

const HeaderItem = (props: any) => <span className={S.headerItem}><Link {...props}>{props.children}</Link></span>;

export default function Header({ dynamicBg = false, blowOutLogo = false }: { dynamicBg?: boolean, blowOutLogo?: boolean }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isHeaderSeamless, setIsHeaderSeamless] = useState(dynamicBg);

	useEventListener("scroll", handleScroll);

	const handleDynamicBg = async () => {
		// When the user scrolls down 50px from the top of the document:
		if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
			setIsHeaderSeamless(false);
			// document.getElementById("header")!.style.backgroundColor = true ? "#232527cc" : "#ebeceecc";
			console.debug("hideBg", true);
		} else {
			// document.getElementById("header")!.style.backgroundColor = "transparent";
			setIsHeaderSeamless(true);
			console.debug("hideBg", false);
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
		<Navbar className={C(S.header, isHeaderSeamless && S.headerSeamless)}>
			<NavbarMenuToggle
				aria-label={isMenuOpen ? "Close menu" : "Open menu"}
				className="sm:hidden"
			/>
			<NavbarBrand>
				<Logo width="unset" height="2.25em" color="hsl(var(--nextui-foreground))" id="header-logo" className={S.blownOutLogo} />
			</NavbarBrand>

			<NavbarContent className="hidden sm:flex gap-4" justify="end">
				<NavbarItem as={HeaderItem} color="foreground" href="#leistungen">
					Leistungen
				</NavbarItem>
				<NavbarItem as={HeaderItem} color="foreground" href="#referenzen">
					Referenzen
				</NavbarItem>
				<NavbarItem as={HeaderItem} color="foreground" href="#wer-wir-sind">
					Wer wir sind
				</NavbarItem>
				<NavbarItem>
					<Button as={Link} color="primary" href="#kontakt" variant="flat">
						Kontakt
					</Button>
				</NavbarItem>

				<DarkModeToggle style={{ background: "none" }} />

				<NavbarMenu>
					{["xxxxxx", "yyyyyy"].map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								className="w-full"
								href="#"
								size="lg"
							>
							{item}
							</Link>
						</NavbarMenuItem>
					))}
				</NavbarMenu>
			</NavbarContent>
		</Navbar>
	);
}
