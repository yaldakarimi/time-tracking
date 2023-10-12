import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FormColorInput, FormRegularInput } from "components";

const EventForm = ({ submitHandler }) => {
	const values = {
		title: "",
		description: "",
		color: "",
		startDate: "",
		endDate: "",
		startTime: "",
		endTime: "",
	};
	const [formValues, setFormValues] = useState(values);
	const [validationError, setValidationError] = useState("");

	const onFormValueChange = (e) => {
		const { name, value } = e.target;
		setFormValues((preFormValues) => {
			return { ...preFormValues, [name]: value };
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();

		// Check if any required field is empty
		const requiredFields = [
			"title",
			"description",
			"color",
			"startDate",
			"endDate",
			"startTime",
			"endTime",
		];
		const emptyFields = requiredFields.filter((field) => !formValues[field]);

		if (emptyFields.length > 0) {
			setValidationError("Please fill in all the required fields.");
			return;
		}

		// Reset validation error if all fields are filled
		setValidationError("");
		const newEventObject = {
			id: uuidv4(),
			title: formValues.title,
			description: formValues.description,
			color: formValues.color,
			startDate: formValues.startDate,
			endDate: formValues.endDate,
			startTime: formValues.startTime,
			endTime: formValues.endTime,
		};
		submitHandler(newEventObject);
	};
	return (
		<div>
			{validationError && <p className="text-red-700">{validationError}</p>}
			<form onSubmit={onSubmit}>
				<FormRegularInput
					label="Event name"
					id="title"
					name="title"
					type="text"
					value={formValues.title}
					onChange={onFormValueChange}
					isRequired
					inputCustomClasses={
						!formValues.title && validationError
							? "border-2 border-red-600"
							: ""
					}
				/>

				<FormRegularInput
					label="Event description"
					id="description"
					name="description"
					type="text"
					value={formValues.description}
					onChange={onFormValueChange}
					isRequired
					inputCustomClasses={
						!formValues.description && validationError
							? "border-2 border-red-600"
							: ""
					}
				/>

				<FormColorInput
					label="Event color"
					id="color"
					name="color"
					value={formValues.color}
					onChange={onFormValueChange}
					isRequired
					inputCustomClasses={
						!formValues.color && validationError
							? "border-2 border-red-600"
							: ""
					}
				/>

				<FormRegularInput
					label="Start date"
					type="date"
					name="startDate"
					value={formValues.startDate}
					onChange={onFormValueChange}
					isRequired
					inputCustomClasses={
						!formValues.startDate && validationError
							? "border-2 border-red-600"
							: ""
					}
				/>

				<FormRegularInput
					label="End date"
					name="endDate"
					type="date"
					value={formValues.endDate}
					onChange={onFormValueChange}
					isRequired
					inputCustomClasses={
						!formValues.endDate && validationError
							? "border-2 border-red-600"
							: ""
					}
				/>

				<FormRegularInput
					label="Start time"
					name="startTime"
					type="time"
					value={formValues.startTime}
					onChange={onFormValueChange}
					isRequired
					inputCustomClasses={
						!formValues.startTime && validationError
							? "border-2 border-red-600"
							: ""
					}
				/>

				<FormRegularInput
					label="End time"
					name="endTime"
					type="time"
					value={formValues.endTime}
					onChange={onFormValueChange}
					isRequired
					inputCustomClasses={
						!formValues.endTime && validationError
							? "border-2 border-red-600"
							: ""
					}
				/>
				<button className="button bg-green-500 text-white w-full" type="submit">
					Create
				</button>
			</form>
		</div>
	);
};

export default EventForm;
