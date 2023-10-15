import axios from "axios";
import { useQuery } from "react-query";
import { PAGE_LIMIT } from "common/constants";

const fetchData = async (url, pageNumber) => {
	return await axios.get(`${url}?_limit=${PAGE_LIMIT}&_page=${pageNumber}`);
};
const useFetch = (queryName, url, pageNumber) => {
	return useQuery(queryName, () => fetchData(url, pageNumber));
};

export default useFetch;
