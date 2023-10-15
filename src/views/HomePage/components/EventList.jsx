import EventItem from "./EventItem";

const EventsList = ({ data, onEventDeleteHandler }) => {
	return (
		<div>
			{data?.map((event) => (
				<EventItem
					key={event.id}
					data={event}
					onEventDeleteHandler={onEventDeleteHandler}
				/>
			))}
		</div>
	);
};

export default EventsList;
