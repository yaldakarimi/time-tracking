import axios from "axios";
import { useQuery } from "react-query";

const fetchData = (url) => {
	return axios.get(url);
};
const useFetch = (queryName, url) => {
	return useQuery(queryName, () => fetchData(url));
};

export default useFetch;
