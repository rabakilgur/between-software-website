import type { NextPage } from "next";
import Head from "next/head";
import { Button, ButtonToolbar } from "react-bootstrap";
import Btn from "../components/btn/btn";
import ThemeToggle from "../components/theme-toggle/theme-toggle";
// import useDarkMode from "../lib/use-dark-mode";

const Home: NextPage = () => {
	// const [colorTheme, setTheme] = useDarkMode();

	return (
		<>
			<Head>
				<title>Between Software</title>
			</Head>
			<div className="p-4">
				<ThemeToggle className="btn btn-icon btn-secondary rounded-pill" />

				{/* <Button variant="primary" className="me-2" onClick={() => setTheme("light")}>Light Theme</Button>
				<Button variant="secondary" onClick={() => setTheme("dark")}>Dark Theme</Button> */}

				<div className="mt-3">
					<h5>Normal/default buttons:</h5>
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
					<h5>Filled buttons:</h5>
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
					<h5>Outlined buttons:</h5>
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

				<form className="pt-4">
					<h5>Form:</h5>
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
		</>
	);
};

export default Home;
