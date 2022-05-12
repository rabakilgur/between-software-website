import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import Btn from "../components/btn/btn";
import ThemeToggle from "../components/theme-toggle/theme-toggle";

function getSubHeadings(el: HTMLElement, foundSiblings: HTMLElement[] = [], subHeadingTag = "H" + (Number(el.tagName.slice(-1)) + 1)): HTMLElement[] {
	const nextSibling = el.nextSibling as HTMLElement;
	const headingTag = "H" + (Number(subHeadingTag.slice(-1)) - 1);
	if (nextSibling && nextSibling.tagName != headingTag) {
		if (nextSibling.tagName == subHeadingTag) {
			foundSiblings.push(nextSibling);
		} else {
			[...nextSibling.getElementsByTagName(subHeadingTag)].forEach(subHeading => {
				foundSiblings.push(subHeading as HTMLElement);
			});
		}
		getSubHeadings(nextSibling, foundSiblings, subHeadingTag);
	}
	return foundSiblings;
}

const Design: NextPage = () => {
	let toc: ReactDOMClient.Root | null = null;

	useEffect(() => {
		document.querySelectorAll("h2, h3").forEach((val, key) => {
			val.id = `${val.tagName}-${key}-${val.textContent?.toLowerCase().replaceAll(" ", "_").replaceAll("/", "_").replace(":", "")}`;
		});
		if (!toc) toc = ReactDOMClient.createRoot(document.getElementById("toc")!);
		toc.render([...document.querySelectorAll("h2")].map((h2, i) =>
			<span key={`H2-${i}`}><a href={`#${h2.id}`}><h5 className="mt-2">{h2.textContent?.replace(":", "")}</h5></a>
				<ul>
					{getSubHeadings(h2).map((h3, j) =>
						<li key={`H3-${j}`}><a href={`#${h3.id}`}>{h3.textContent?.replace(":", "")}</a></li>
					)}
				</ul>
			</span>
		));
	}, []);

	return (
		<>
			<Head>
				<title>Between Software | Theme & Design</title>
			</Head>
			<div className="container-fluid">
				<div className="row" style={{ height: "100vh" }}>
					<div className="col-lg-3 overflow-auto">
						<div className="my-4 pt-2 pb-4 px-4 rounded bg-dark text-white">
							<ul className="mb-0 ps-0" id="toc" style={{ lineHeight: "1.75" }}></ul>
						</div>
					</div>
					<div className="col-lg-9 h-100 overflow-auto">
						<div className="p-4">
							<ThemeToggle className="btn btn-icon btn-secondary rounded-pill position-fixed end-0 bottom-0 mb-3 me-4 shadow-lg fs-2" />

							<h1>Theme & Design Overview</h1>

							<h2>Buttons</h2>
							<div className="mt-3">
								<h3>Normal/default buttons:</h3>
								<Button className="me-2">Button</Button>
								<Btn className="me-2">Btn</Btn>
								<Btn className="me-2">Btn</Btn>
								<Btn className="me-2">Btn</Btn>
							</div>
							<div className="dark-theme bg-dark mx-n2 mt-3 p-2">
								<Button className="me-2">Button</Button>
								<Btn className="me-2">Btn</Btn>
								<Btn className="me-2">Btn</Btn>
								<Btn className="me-2">Btn</Btn>
							</div>
							<div className="light-theme bg-light mx-n2 mt-3 p-2">
								<Button className="me-2">Button</Button>
								<Btn className="me-2">Btn</Btn>
								<Btn className="me-2">Btn</Btn>
								<Btn className="me-2">Btn</Btn>
							</div>

							<div className="mt-3">
								<h3>Filled buttons:</h3>
								<Button variant="primary" className="me-2">Primary</Button>
								<Button variant="secondary" className="me-2">Secondary</Button>
								<Button variant="danger" className="me-2">Danger</Button>
								<Button variant="warning" className="me-2">Warning</Button>
								<Button variant="success" className="me-2">Success</Button>
								<Button variant="info" className="me-2">Info</Button>
								<Button variant="dark" className="me-2">Dark</Button>
								<Button variant="light" className="me-2">Light</Button>
							</div>
							<div className="mt-3">
								<Button variant="primary" className="me-2" disabled>Primary</Button>
								<Button variant="secondary" className="me-2" disabled>Secondary</Button>
								<Button variant="danger" className="me-2" disabled>Danger</Button>
								<Button variant="warning" className="me-2" disabled>Warning</Button>
								<Button variant="success" className="me-2" disabled>Success</Button>
								<Button variant="info" className="me-2" disabled>Info</Button>
								<Button variant="dark" className="me-2" disabled>Dark</Button>
								<Button variant="light" className="me-2" disabled>Light</Button>
							</div>
							<div className="dark-theme bg-dark mx-n2 mt-3 p-2">
								<Button variant="primary" className="me-2">Primary</Button>
								<Button variant="secondary" className="me-2">Secondary</Button>
								<Button variant="danger" className="me-2">Danger</Button>
								<Button variant="warning" className="me-2">Warning</Button>
								<Button variant="success" className="me-2">Success</Button>
								<Button variant="info" className="me-2">Info</Button>
								<Button variant="dark" className="me-2">Dark</Button>
								<Button variant="light" className="me-2">Light</Button>
							</div>
							<div className="dark-theme bg-dark mx-n2 p-2">
								<Button variant="primary" className="me-2" disabled>Primary</Button>
								<Button variant="secondary" className="me-2" disabled>Secondary</Button>
								<Button variant="danger" className="me-2" disabled>Danger</Button>
								<Button variant="warning" className="me-2" disabled>Warning</Button>
								<Button variant="success" className="me-2" disabled>Success</Button>
								<Button variant="info" className="me-2" disabled>Info</Button>
								<Button variant="dark" className="me-2" disabled>Dark</Button>
								<Button variant="light" className="me-2" disabled>Light</Button>
							</div>
							<div className="light-theme bg-light mx-n2 mt-3 p-2">
								<Button variant="primary" className="me-2">Primary</Button>
								<Button variant="secondary" className="me-2">Secondary</Button>
								<Button variant="danger" className="me-2">Danger</Button>
								<Button variant="warning" className="me-2">Warning</Button>
								<Button variant="success" className="me-2">Success</Button>
								<Button variant="info" className="me-2">Info</Button>
								<Button variant="dark" className="me-2">Dark</Button>
								<Button variant="light" className="me-2">Light</Button>
							</div>
							<div className="light-theme bg-light mx-n2 p-2">
								<Button variant="primary" className="me-2" disabled>Primary</Button>
								<Button variant="secondary" className="me-2" disabled>Secondary</Button>
								<Button variant="danger" className="me-2" disabled>Danger</Button>
								<Button variant="warning" className="me-2" disabled>Warning</Button>
								<Button variant="success" className="me-2" disabled>Success</Button>
								<Button variant="info" className="me-2" disabled>Info</Button>
								<Button variant="dark" className="me-2" disabled>Dark</Button>
								<Button variant="light" className="me-2" disabled>Light</Button>
							</div>

							<div className="mt-3">
								<h3>Outlined buttons:</h3>
								<Button variant="outline-primary" className="me-2">Primary</Button>
								<Button variant="outline-secondary" className="me-2">Secondary</Button>
								<Button variant="outline-danger" className="me-2">Danger</Button>
								<Button variant="outline-warning" className="me-2">Warning</Button>
								<Button variant="outline-success" className="me-2">Success</Button>
								<Button variant="outline-info" className="me-2">Info</Button>
								<Button variant="outline-dark" className="me-2">Dark</Button>
								<Button variant="outline-light" className="me-2">Light</Button>
							</div>
							<div className="mt-3">
								<Button variant="outline-primary" className="me-2" disabled>Primary</Button>
								<Button variant="outline-secondary" className="me-2" disabled>Secondary</Button>
								<Button variant="outline-danger" className="me-2" disabled>Danger</Button>
								<Button variant="outline-warning" className="me-2" disabled>Warning</Button>
								<Button variant="outline-success" className="me-2" disabled>Success</Button>
								<Button variant="outline-info" className="me-2" disabled>Info</Button>
								<Button variant="outline-dark" className="me-2" disabled>Dark</Button>
								<Button variant="outline-light" className="me-2" disabled>Light</Button>
							</div>
							<div className="dark-theme bg-dark mx-n2 mt-3 p-2">
								<Button variant="outline-primary" className="me-2">Primary</Button>
								<Button variant="outline-secondary" className="me-2">Secondary</Button>
								<Button variant="outline-danger" className="me-2">Danger</Button>
								<Button variant="outline-warning" className="me-2">Warning</Button>
								<Button variant="outline-success" className="me-2">Success</Button>
								<Button variant="outline-info" className="me-2">Info</Button>
								<Button variant="outline-dark" className="me-2">Dark</Button>
								<Button variant="outline-light" className="me-2">Light</Button>
							</div>
							<div className="dark-theme bg-dark mx-n2 p-2">
								<Button variant="outline-primary" className="me-2" disabled>Primary</Button>
								<Button variant="outline-secondary" className="me-2" disabled>Secondary</Button>
								<Button variant="outline-danger" className="me-2" disabled>Danger</Button>
								<Button variant="outline-warning" className="me-2" disabled>Warning</Button>
								<Button variant="outline-success" className="me-2" disabled>Success</Button>
								<Button variant="outline-info" className="me-2" disabled>Info</Button>
								<Button variant="outline-dark" className="me-2" disabled>Dark</Button>
								<Button variant="outline-light" className="me-2" disabled>Light</Button>
							</div>
							<div className="light-theme bg-light mx-n2 mt-3 p-2">
								<Button variant="outline-primary" className="me-2">Primary</Button>
								<Button variant="outline-secondary" className="me-2">Secondary</Button>
								<Button variant="outline-danger" className="me-2">Danger</Button>
								<Button variant="outline-warning" className="me-2">Warning</Button>
								<Button variant="outline-success" className="me-2">Success</Button>
								<Button variant="outline-info" className="me-2">Info</Button>
								<Button variant="outline-dark" className="me-2">Dark</Button>
								<Button variant="outline-light" className="me-2">Light</Button>
							</div>
							<div className="light-theme bg-light mx-n2 p-2">
								<Button variant="outline-primary" className="me-2" disabled>Primary</Button>
								<Button variant="outline-secondary" className="me-2" disabled>Secondary</Button>
								<Button variant="outline-danger" className="me-2" disabled>Danger</Button>
								<Button variant="outline-warning" className="me-2" disabled>Warning</Button>
								<Button variant="outline-success" className="me-2" disabled>Success</Button>
								<Button variant="outline-info" className="me-2" disabled>Info</Button>
								<Button variant="outline-dark" className="me-2" disabled>Dark</Button>
								<Button variant="outline-light" className="me-2" disabled>Light</Button>
							</div>

							<h2 className="pt-4">Forms:</h2>
							<form className="pt-4">
								<h3>Typical Form:</h3>
								<div className="form-group row">
									<label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
									<div className="col-sm-10">
										<input type="text" className="form-control" />
									</div>
								</div>
								<div className="form-group row mt-2">
									<label htmlFor="inputPassword" className="col-sm-2 col-form-label">Passwort</label>
									<div className="col-sm-10">
										<input type="password" className="form-control"placeholder="Password" />
									</div>
								</div>
								<div className="form-group row justify-content-end mt-2">
									<div className="col-sm-10">
										<input type="checkbox" className="form-check-input me-2" id="exampleCheck1" />
										<label className="form-check-label" htmlFor="exampleCheck1">Zugangsdaten merken</label>
									</div>
								</div>
								<div className="form-group row justify-content-end mt-3">
									<div className="col-sm-10 btn-row">
										<Button type="submit">Senden</Button>
										<Btn>Überspringen</Btn>
										<Btn variant="outline-danger">Abbrechen</Btn>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Design;
