import { calculateDurationFn } from "utils";

const EventItem = ({ data }) => {
	return (
		<div className="flex flex-col gap-2 mb-4 p-4 rounded-md shadow-md cursor-pointer bg-primary lightText  hover:transform hover:scale-95 transition-transform duration-300">
			<h1 className="font-semibold">{data.title}</h1>
			<div className="flex justify-between items-center">
				<span className="text-sm">Start time: {data.startTime}</span>
				<span className="text-sm">End time: {data.endTime}</span>
			</div>
			<span className="block text-sm">
				Duration: {calculateDurationFn(data.startTime, data.endTime)}
			</span>
		</div>
	);
};

export default EventItem;
