import { useEffect, useRef } from "react";
import spline from "../../vendor/sline";
import SimplexNoise from "simplex-noise";

function map(n, start1, end1, start2, end2) {
	return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
}

function createPoints() {
	const points: Json[] = [];
	// how many points do we need
	const numPoints = 6;
	// used to equally space each point around the circle
	const angleStep = (Math.PI * 2) / numPoints;
	// the radius of the circle
	const rad = 75;

	for (let i = 1; i <= numPoints; i++) {
		// x & y coordinates of the current point
		const theta = i * angleStep;

		const x = 100 + Math.cos(theta) * rad;
		const y = 100 + Math.sin(theta) * rad;

		// store the point's position
		points.push({
			x: x,
			y: y,
			// we need to keep a reference to the point's original point for when we modulate the values later
			originX: x,
			originY: y,
			// more on this in a moment!
			noiseOffsetX: Math.random() * 1000,
			noiseOffsetY: Math.random() * 1000
		});
	}
	return points;
}

export default function Blob(props) {
	const rootRef = useRef<SVGSVGElement>(null);
	const pathRef = useRef<SVGPathElement>(null); // Used to set our custom property values

	const shouldAnimate = props.animate === undefined ? true : Boolean(props.animate);
	const animationSpeed = props.speed === undefined ? 1 : Number(props.speed);
	let hueNoiseOffset = 0;
	let noiseStep = animationSpeed * 0.0002;
	const simplex = new SimplexNoise();
	const points = createPoints();
	const noise = (x, y) => simplex.noise2D(x, y);
	const hueNoise = noise(hueNoiseOffset, hueNoiseOffset);
	const hueStart = props.hueRange ? props.hueRange[0] : 170;
	let hueEnd = props.hueRange ? props.hueRange[1] : 200;
	if (hueEnd < hueStart) hueEnd += 360;
	const hue = map(hueNoise, -1, 1, hueStart, hueEnd);

	useEffect(() => {
		(function animate() {
			pathRef.current!.setAttribute("d", spline(points, 1, true));

			for (let i = 0; i < points.length; i++) {
				const point = points[i];

				// return a pseudo random value between -1 / 1 based on this point's current x, y positions in "time"
				const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
				const nY = noise(point.noiseOffsetY, point.noiseOffsetY);
				// map this noise value to a new value, somewhere between it's original location -20 and it's original location + 20
				const x = map(nX, -1, 1, point.originX - 20, point.originX + 20);
				const y = map(nY, -1, 1, point.originY - 20, point.originY + 20);

				// update the point's current coordinates
				point.x = x;
				point.y = y;

				// progress the point's x, y values through "time"
				point.noiseOffsetX += noiseStep;
				point.noiseOffsetY += noiseStep;
			}

			rootRef.current?.style.setProperty("--stopColor", `hsl(${hue + 60}, 100%, 60%)`);
			rootRef.current?.style.setProperty("--startColor", `hsl(${hue}, 100%, 60%)`);
			// document.body.style.background = `hsl(${hue + 60}, 75%, 5%)`;

			hueNoiseOffset += noiseStep / 6;

			if (shouldAnimate) requestAnimationFrame(animate);
		})();
	}, []);

	return (
		<div className={props.className} style={props.style}>
			<svg viewBox="0 0 200 200" ref={rootRef}>
				<defs>
					<linearGradient id="gradient" gradientTransform="rotate(90)">
						<stop offset="0%" stopColor="var(--startColor)" />
						<stop offset="100%" stopColor="var(--stopColor)" />
					</linearGradient>
				</defs>
				<path d="" fill="url('#gradient')" ref={pathRef}></path>
			</svg>
		</div>
	);
}
