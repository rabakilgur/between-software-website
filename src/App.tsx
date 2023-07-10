import { NextUIProvider } from "@nextui-org/system";
import { render } from "preact";
import AsyncRoute from "preact-async-route";
import Router from "preact-router";
import Homepage from "./components/Homepage/Homepage";

render(
	<NextUIProvider locale="de-DE">
		<Router>
			<Homepage path="/" />
			<AsyncRoute
				path="/friends/:id"
				getComponent={() => import("./components/Playground/Playground").then((module) => module.default)}
				// loading={() => <div></div>}
			/>
		</Router>
	</NextUIProvider>,
	document.getElementById("app")!
);
