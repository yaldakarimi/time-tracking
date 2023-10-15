// hooks/useDeleteEvent.js
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const deleteEvent = async (id) => {
	return axios.delete(`http://localhost:8001/events/${id}`);
};

const useDelete = () => {
	const queryClient = useQueryClient();

	return useMutation(deleteEvent, {
		onSuccess: () => {
			queryClient.invalidateQueries("events");
		},
	});
};

export default useDelete;
