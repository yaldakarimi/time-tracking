import React, { useEffect } from "react";
import ReactModal from "react-modal";
import { FaTimes } from "react-icons/fa";

const Modal = ({ isOpen, onClose, children, title }) => {
	ReactModal.setAppElement("#root");

	const customStyles = {
		overlay: {
			backgroundColor: "rgba(0, 0, 0, 0.6)",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			zIndex: 50,
		},
		content: {
			position: "relative",
			top: "auto",
			left: "auto",
			right: "auto",
			bottom: "auto",
			border: "none",
			background: "white",
			overflow: "auto",
			borderRadius: "0.375rem",
			outline: "none",
			padding: "1.5rem",
			width: "80%",
			maxWidth: "800px",
		},
	};

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
	}, [isOpen]);

	return (
		<ReactModal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
			<div className="flex justify-between items-center border-b pb-4 mb-4">
				<h1>{title}</h1>
				<FaTimes onClick={onClose} />
			</div>
			{children}
		</ReactModal>
	);
};

export default Modal;
