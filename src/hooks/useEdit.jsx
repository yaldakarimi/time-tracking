import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const updateData = async (url, data) => {
	return await axios.put(url, data);
};

const useEdit = (queryName, url) => {
	const queryClient = useQueryClient();
	return useMutation((data) => updateData(`${url}/${data.id}`, data), {
		onMutate: async (data) => {
			await queryClient.cancelQueries(queryName);
			const prevData = queryClient.getQueryData(queryName);
			queryClient.setQueryData(queryName, (preData) => {
				if (preData) {
					return {
						...preData,
						data: preData.data.map((item) =>
							item.id === data.id ? data : item
						),
					};
				}
			});

			return { prevData };
		},

		onError: (_data, _error, context) => {
			if (context && context.prevData) {
				queryClient.setQueryData(queryName, context.prevData);
			}
		},

		onSettled: () => {
			queryClient.invalidateQueries(queryName);
		},
	});
};

export default useEdit;
