import "../../style/index.scss";
import DarkModeToggleCornerWrapper from "../DarkModeToggle/DarkModeToggleCornerWrapper";

const Homepage = ({ path }: { path: string }) => {
	return (
		<>
			<DarkModeToggleCornerWrapper />

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
