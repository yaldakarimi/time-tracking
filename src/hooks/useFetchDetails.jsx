import axios from "axios";
import { useQuery } from "react-query";

const fetchDetails = (url) => {
	return axios.get(url);
};

const useFetchDetails = (url, queryName, id) => {
	return useQuery([queryName, id], () => fetchDetails(`${url}/${id}`));
};

export default useFetchDetails;
