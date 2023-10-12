import { FaAsterisk } from "react-icons/fa6";
const FormTextInput = ({
	value,
	onChange,
	placeholder,
	name,
	type,
	id,
	label,
	isRequired,
	inputCustomClasses,
}) => {
	const inputClasses = `${inputCustomClasses} bg-gray-50 border 
	 text-gray-900 text-sm rounded-lg w-full p-2.5`;
	return (
		<div className="mb-2">
			<label
				htmlFor={id}
				className="block mb-2 text-sm font-medium text-gray-900"
			>
				<div className="flex gap-1">
					<span>{label}</span>
					{isRequired && (
						<FaAsterisk className="text-gray-400 w-2 h-3 self-start" />
					)}
				</div>
			</label>
			<input
				id={id}
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				className={inputClasses}
			/>
		</div>
	);
};

export default FormTextInput;
