import S from "./frontpage.module.scss";

export default function FrontPage() {
	return (
		<>
			<div className="p-3">
				{/* Bild für einen moderneren Look; muss nicht dieses sein und vorallem nicht in der Größe */}
				<img className={S.imageStyle} src="StockImageBackgroundFrontPage.jpg" alt="StockImageForFrontpage" />
			</div>
		</>
	);
};
