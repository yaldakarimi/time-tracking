import { Card } from "components";
import { TbFaceIdError } from "react-icons/tb";

const CustomError = ({ error }) => {
	return (
		<Card customClasses="bg-darkPurple flex flex-col gap-4 justify-center items-center">
			<TbFaceIdError className="text-6xl text-red-500" />
			<div className="text-center lightText">
				<p>{error}</p>
				<p>Ooops, something went wrong, please try again! </p>
			</div>
		</Card>
	);
};

export default CustomError;
