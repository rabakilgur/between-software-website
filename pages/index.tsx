import type { NextPage } from "next";
import Head from "next/head";
import { Button, ButtonToolbar } from "react-bootstrap";
import useDarkMode from "../lib/use-dark-mode";

const Home: NextPage = () => {
	const [colorTheme, setTheme] = useDarkMode();

	return (
		<>
			<Head>
				<title>Between Software</title>
			</Head>
			<div className="p-4">
				<Button variant="primary" className="me-2" onClick={() => setTheme("light")}>Light Theme</Button>
				<Button variant="secondary" onClick={() => setTheme("dark")}>Dark Theme</Button>

				<form className="pt-4">
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
						<div className="col-sm-10">
							<button type="submit" className="btn btn-primary">Submit</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default Home;
