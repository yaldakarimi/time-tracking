import React from "react";

const Card = ({ children, customClasses }) => {
	const classes = `card ${customClasses}`;
	return <div className={classes}>{children}</div>;
};

export default Card;
