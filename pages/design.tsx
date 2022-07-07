import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
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
			<span key={`H2-${i}`}><a href={`#${h2.id}`} className="text-decoration-none" style={{ color: "var(--shade-900)" }}><h5 className="mt-2">{h2.textContent?.replace(":", "")}</h5></a>
				<ul>
					{getSubHeadings(h2).map((h3, j) =>
						<li key={`H3-${j}`}><a href={`#${h3.id}`} className="text-decoration-none" style={{ color: "var(--shade-800)" }}>{h3.textContent?.replace(":", "")}</a></li>
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
						<div className="my-4 pt-2 pb-4 px-4 rounded bg-shade">
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

							<h2 className="pt-4">Colors:</h2>
							<h3>Grays:</h3>
							<div className="row">
								<div className="col-md-3 p-3 text-black bg-white">$white</div>
								<div className="col-md-3 p-3 text-black bg-gray-100">$gray-100</div>
								<div className="col-md-3 p-3 text-black bg-gray-200">$gray-200</div>
								<div className="col-md-3 p-3 text-black bg-gray-300">$gray-300</div>
								<div className="col-md-3 p-3 text-black bg-gray-400">$gray-400</div>
								<div className="col-md-3 p-3 text-white bg-gray-500">$gray-500</div>
								<div className="col-md-3 p-3 text-white bg-gray-600">$gray-600</div>
								<div className="col-md-3 p-3 text-white bg-gray-700">$gray-700</div>
								<div className="col-md-3 p-3 text-white bg-gray-800">$gray-800</div>
								<div className="col-md-3 p-3 text-white bg-gray-900">$gray-900</div>
								<div className="col-md-3 p-3 text-white bg-black">$black</div>
								<div className="col-md-3 p-3 text-white bg-gray">$gray</div>
							</div>
							<h3 className="mt-3">General colors:</h3>
							<div className="row">
								<div className="col-md-3 p-3 text-white bg-blue">$blue</div>
								<div className="col-md-3 p-3 text-white bg-indigo">$indigo</div>
								<div className="col-md-3 p-3 text-white bg-purple">$purple</div>
								<div className="col-md-3 p-3 text-white bg-pink">$pink</div>
								<div className="col-md-3 p-3 text-white bg-red">$red</div>
								<div className="col-md-3 p-3 text-white bg-orange">$orange</div>
								<div className="col-md-3 p-3 text-white bg-yellow">$yellow</div>
								<div className="col-md-3 p-3 text-white bg-green">$green</div>
								<div className="col-md-3 p-3 text-white bg-teal">$teal</div>
								<div className="col-md-3 p-3 text-white bg-cyan">$cyan</div>
								<div className="col-md-3 p-3 text-white bg-brown">$brown</div>
							</div>
							<h3 className="mt-3">Theme colors:</h3>
							<div className="row">
								<div className="col-md-3 p-3 text-white bg-primary">$primary</div>
								<div className="col-md-3 p-3 text-white bg-secondary">$secondary</div>
								<div className="col-md-3 p-3 text-white bg-danger">$danger</div>
								<div className="col-md-3 p-3 text-white bg-warning">$warning</div>
								<div className="col-md-3 p-3 text-white bg-success">$success</div>
								<div className="col-md-3 p-3 text-white bg-info">$info</div>
								<div className="col-md-3 p-3 text-white bg-dark">$dark</div>
								<div className="col-md-3 p-3 text-black bg-light">$light</div>
							</div>
							<h3 className="mt-3">Adaptive theme colors:</h3>
							<i className="text-muted"><b>Note:</b> These are only available as CSS classes and not as SCSS variables</i>
							<div className="row">
								<div className="col-md-3 p-3 text-theme bg-theme">.bg-theme</div>
								<div className="col-md-3 p-3 text-theme bg-shade">$shade</div>
								<div className="col-md-3 p-3 text-theme bg-shade-000">$shade-000</div>
								<div className="col-md-3 p-3 text-theme bg-shade-100">$shade-100</div>
								<div className="col-md-3 p-3 text-theme bg-shade-200">$shade-200</div>
								<div className="col-md-3 p-3 text-theme bg-shade-300">$shade-300</div>
								<div className="col-md-3 p-3 text-theme bg-shade-400">$shade-400</div>
								<div className="col-md-3 p-3 text-theme bg-shade-500">$shade-500</div>
								<div className="col-md-3 p-3 text-antitheme bg-shade-600">$shade-600</div>
								<div className="col-md-3 p-3 text-antitheme bg-shade-700">$shade-700</div>
								<div className="col-md-3 p-3 text-antitheme bg-shade-800">$shade-800</div>
								<div className="col-md-3 p-3 text-antitheme bg-shade-900">$shade-900</div>
								<div className="col-md-3 p-3 text-antitheme bg-shade-900">$shade-1000</div>
							</div>
							<h3 className="mt-3">Brand colors:</h3>
							<div className="row">
								<div className="col-md-3 p-3 text-white bg-brand">$brand</div>
								<div className="col-md-3 p-3 text-white bg-brand-darker">$brand-darker</div>
								<div className="col-md-3 p-3 text-white bg-brand-darker2">$brand-darker2</div>
								<div className="col-md-3 p-3 text-white bg-brand-lighter">$brand-lighter</div>
								<div className="col-md-3 p-3 text-white bg-brand-brighter">$brand-brighter</div>
							</div>

							<h2 className="pt-4">Forms:</h2>
							<i className="text-muted"><b>More info:</b> <a href="https://react-bootstrap.github.io/forms/form-control/" target="_blank" rel="noreferrer">https://react-bootstrap.github.io/forms/form-control/</a> & <a href="https://getbootstrap.com/docs/5.1/forms/overview/" target="_blank" rel="noreferrer">https://getbootstrap.com/docs/5.1/forms/overview/</a></i>
							<div className="row">
								<form className="pt-4 col-md-6">
									<h3>Checkboxes:</h3>
									<Form.Check id="custom-checkbox" label="Default checkbox input" />
									<Form.Check id="custom-checkbox-checked" label="Checked checkbox input" defaultChecked />
									<Form.Check id="custom-checkbox-disabled" label="Disabled checkbox input" disabled />
									<Form.Check id="custom-checkbox-checked-disabled" label="Disabled checked checkbox input" defaultChecked  disabled />
									<div className="pt-2">
										<Form.Check id="custom-checkbox-inline-1" label="1" inline />
										<Form.Check id="custom-checkbox-inline-2" label="2" inline />
										<Form.Check id="custom-checkbox-inline-3" label="3" inline />
									</div>
								</form>
								<form className="pt-4 col-md-6">
									<h3>Switches:</h3>
									<Form.Check type="switch" id="custom-switch" label="Default switch checkbox input" />
									<Form.Check type="switch" id="custom-switch-checked" label="Checked switch checkbox input" defaultChecked />
									<Form.Check type="switch" id="custom-switch-disabled" label="Disabled switch checkbox input" disabled />
									<Form.Check type="switch" id="custom-switch-checked-disabled" label="Disabled checked switch checkbox input" defaultChecked  disabled />
									<div className="pt-2">
										<Form.Check type="switch" id="custom-checkbox-inline-1" label="1" inline />
										<Form.Check type="switch" id="custom-checkbox-inline-2" label="2" inline />
										<Form.Check type="switch" id="custom-checkbox-inline-3" label="3" inline />
									</div>
								</form>
							</div>
							<form className="pt-4">
								<h3>Typical Form:</h3>
								<Form.Group as={Row} controlId="formPlaintextEmail">
									<Form.Label column sm="2">Email</Form.Label>
									<Col sm="10">
										<Form.Control />
									</Col>
								</Form.Group>
								<Form.Group as={Row} className="mt-2" controlId="exampleFormPassword">
									<Form.Label column sm="2">Passwort</Form.Label>
									<Col sm="10">
										<Form.Control placeholder="Passwort" />
									</Col>
								</Form.Group>
								<Form.Group as={Row} className="mt-2" controlId="exampleFormRole">
									<Form.Label column sm="2">Rolle</Form.Label>
									<Col sm="10">
										<Form.Select>
											<option value="0"></option>
											<option value="1">Entwickler</option>
											<option value="2">Tester</option>
											<option value="3">Qualitätssicherung</option>
										</Form.Select>
									</Col>
								</Form.Group>
								<Form.Group as={Row} className="mt-2" controlId="exampleFormRememberPassword">
									<Col sm={{ span: 10, offset: 2 }}>
										<Form.Check label="Zugangsdaten merken" />
									</Col>
								</Form.Group>
								<Form.Group className="mt-3">
									<Col sm={{ span: 10, offset: 2 }} className="btn-row">
										<Button type="submit">Senden</Button>
										<Btn>Überspringen</Btn>
										<Btn variant="outline-danger">Abbrechen</Btn>
									</Col>
								</Form.Group>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Design;
