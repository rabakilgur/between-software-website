import { Button } from "react-bootstrap";

export default function Btn(props) {
	const modProps = Object.assign({}, props);
	modProps.variant = modProps.variant ?? "outline-secondary";
	return <Button {...modProps}></Button>;
}
