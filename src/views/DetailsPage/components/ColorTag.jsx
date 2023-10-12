import React from "react";

const colorTag = ({ color }) => {
	return (
		<div
			className={`w-6 h-6 rounded-full border border-gray-200 bg-[${color}]`}
		></div>
	);
};

export default colorTag;
