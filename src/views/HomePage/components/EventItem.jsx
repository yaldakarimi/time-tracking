import { calculateDurationFn } from "utils";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const EventItem = ({ data, onEventDeleteHandler }) => {
	const handleDelete = (id) => {
		onEventDeleteHandler(id);
	};
	return (
		<div className="mb-4 p-4 rounded-md shadow-md cursor-pointer bg-primary lightText  hover:transform hover:scale-95 transition-transform duration-300">
			<Link to={`/events/${data.id}`}>
				<div className="flex flex-col gap-2">
					<h1 className="font-semibold">{data.title}</h1>
					<div className="flex justify-between items-center">
						<span className="text-sm">Start time: {data.startTime}</span>
						<span className="text-sm">End time: {data.endTime}</span>
					</div>
					<span className="block text-sm">
						Duration: {calculateDurationFn(data.startTime, data.endTime)}
					</span>
				</div>
			</Link>
			<div className="flex justify-end ">
				<FaTrash className="fill-red-400" onClick={() => handleDelete(data.id)} />
			</div>
		</div>
	);
};

export default EventItem;
