import EventItem from "./EventItem";
import { Link } from "react-router-dom";

const EventsList = ({ data }) => {
	return (
		<div>
			{data?.map((event) => (
				<Link key={event.id} to={`/events/${event.id}`}>
					<EventItem data={event} />
				</Link>
			))}
		</div>
	);
};

export default EventsList;
