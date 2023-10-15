
const colorTag = ({ color }) => {
	return (
		<div>
			{color && (
				<div
					className={`w-6 h-6 rounded-full border border-gray-200 overflow-hidden bg-[${color}]`}
				></div>
			)}
		</div>
	);
};

export default colorTag;
