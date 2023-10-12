import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const addData = (url, data) => {
	return axios.post(url, data);
};

const usePost = (queryName, url) => {
	const queryClient = useQueryClient();
	return useMutation((data) => addData(url, data), {
		onMutate: async (newData) => {
			await queryClient.cancelQueries(queryName);
			const prevData = queryClient.getQueryData(queryName);
			queryClient.setQueryData(queryName, (oldQueryData) => {
				return {
					...oldQueryData,
					data: [...oldQueryData.data, newData],
				};
			});

			return { prevData };
		},

		onError: (_data,_error, context) => {
			queryClient.setQueryData(queryName, context.prevData);
		},

		onSettled: () => {
			queryClient.invalidateQueries(queryName);
		},
	});
};

export default usePost;
