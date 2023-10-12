import { BallTriangle } from "react-loader-spinner";

const CustomLoader = ({ height = 70, width = 70, color = "#d97706" }) => {
	return (
		<div className="flex justify-center items-center h-screen mx-auto">
			<BallTriangle
				height={height}
				width={width}
				radius={5}
				color={color}
				ariaLabel="ball-triangle-loading"
				visible={true}
			/>
		</div>
	);
};

export default CustomLoader;
