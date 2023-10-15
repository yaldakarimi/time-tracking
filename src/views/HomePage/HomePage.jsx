import { useState } from "react";
import useFetch from "hooks/useFetch";
import usePost from "hooks/usePost";
import useDelete from "hooks/useDelete";
import { Layout, Modal, CustomError, CustomLoader } from "components";
import { EventList } from "./components";
import { EventForm } from "components/common";
import { API_URL, PAGE_LIMIT } from "common/constants";
import { FaPlus } from "react-icons/fa";

const HomePage = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [pageNumber, setPageNumber] = useState(1);

	const {
		data: events,
		isError,
		error,
		isLoading,
	} = useFetch(["events", pageNumber], API_URL, pageNumber);

	const {
		mutate,
		isError: isPostError,
		error: postError,
	} = usePost("events", API_URL);

	const { mutate: deleteMutate } = useDelete();

	const onCreateEvent = (event) => {
		mutate(event);
		setIsModalOpen(false);
	};

	const onEventDeleteHandler = (id) => {
		deleteMutate(id);
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
			<EventList
				data={events?.data}
				onEventDeleteHandler={onEventDeleteHandler}
			/>
			<div className="flex justify-between">
				<button
					className="button bg-slate-500 text-white disabled:bg-slate-400 "
					disabled={pageNumber === 1}
					onClick={() => setPageNumber((prevPage) => prevPage - 1)}
				>
					Back
				</button>

				<button
					className="button bg-slate-500 text-white disabled:bg-slate-400 "
					disabled={events && events.data.length < PAGE_LIMIT}
					onClick={() => setPageNumber((prevPage) => prevPage + 1)}
				>
					Next
				</button>
			</div>
		</Layout>
	);
};

export default HomePage;
