import { useState } from "react";
import useFetch from "hooks/useFetch";
import usePost from "hooks/usePost";
import { Layout, Modal, CustomError, CustomLoader } from "components";
import { EventForm, EventList } from "./components";
import { API_URL } from "common/constants";
import { FaPlus } from "react-icons/fa";

const HomePage = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const {
		data: events,
		isError,
		error,
		isLoading,
	} = useFetch("events", API_URL);

	const {
		mutate,
		isError: isPostError,
		error: postError,
	} = usePost("events", API_URL);

	const onCreateEvent = (event) => {
		mutate(event);
		setIsModalOpen(false);
	};

	if (isLoading) return <CustomLoader />;
	if (isError) return <CustomError error={error.message} />;
	return (
		<Layout title="Events">
			{isPostError && <h1>{postError.message}</h1>}
			<div className="flex justify-between items-center mb-4">
				<h1 className="heading3xl">Events</h1>
				<button
					className="button bg-green-500 text-white"
					onClick={() => setIsModalOpen(true)}
				>
					<div className="flex items-center gap-1">
						<FaPlus />
						Add Events
					</div>
				</button>
			</div>
			<Modal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				title="Add an event"
			>
				<EventForm submitHandler={onCreateEvent} />
			</Modal>
			<EventList data={events?.data} />
		</Layout>
	);
};

export default HomePage;
