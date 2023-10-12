import { useParams } from "react-router-dom";
import useFetchDetails from "hooks/useFetchDetails";
import { API_URL } from "common/constants";
import { formatDate, calculateDurationFn } from "utils";
import { Layout, CustomError, CustomLoader } from "components";
import { ColorTag } from "./components";

const DetailsPage = () => {
	const { id } = useParams();
	const { data, isError, error, isLoading } = useFetchDetails(
		API_URL,
		"event",
		id
	);

	console.log();

	if (isLoading) return <CustomLoader />;
	if (isError) return <CustomError error={error.message} />;
	return (
		<Layout title="Event details">
			<h1 className="text-accent text-2xl font-semibold mb-4">
				{data?.data.title}
			</h1>

			<div className="flex flex-col gap-2 pb-4 border-b-2 border-gray-200">
				<div>
					<span className="text-darkPurple font-semibold">Start: </span>
					<span className="text-sm">
						{formatDate(data?.data.startDate)} at {data?.data.startTime}
					</span>
				</div>

				<div>
					<span className="text-darkPurple font-semibold">End: </span>
					<span className="text-sm">
						{formatDate(data?.data.endDate)} at {data?.data.endTime}
					</span>
				</div>

				<div className="flex justify-between items-center">
					<div>
						<span className="text-darkPurple font-semibold">Duration: </span>
						<span className="text-sm">
							{calculateDurationFn(data?.data.startTime, data?.data.endTime)}
						</span>
					</div>

					<div className="flex gap-2 items-center">
						<span className="text-darkPurple font-semibold">Event Color: </span>
						<ColorTag color={data?.data.color} />
					</div>
				</div>
			</div>

			<div className="mt-4">
				<span className="block mb-2 text-darkPurple font-semibold">Event Description: </span>
				<p>{data?.data.description}</p>
			</div>

		</Layout>
	);
};

export default DetailsPage;
