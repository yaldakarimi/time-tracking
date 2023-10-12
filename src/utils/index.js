export const formatDate = (date) => {
	const day = new Date(date).toLocaleString("en-US", { day: "2-digit" });
	const month = new Date(date).toLocaleString("en-US", { month: "long" });
	const year = new Date(date).getFullYear();

	return `${month} ${day}, ${year}`;
};

export const calculateDurationFn = (startTime, endTime) => {
	const start = new Date(`2000-01-01T${startTime}`);
	const end = new Date(`2000-01-01T${endTime}`);
	const timeDiff = end - start;

	const hours = Math.floor(timeDiff / (1000 * 60 * 60));
	const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

	return `${
		minutes === 0 ? `${hours} hours` : `${hours} hours ${minutes} minutes`
	}`;
};
