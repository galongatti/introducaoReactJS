import React from "react";
import "./Card.css";

function Card(props) {
	const cardStyle = {
		backgroundColor: props.color || "#F00",
		borderColor: props.color || "#F00",
	};

	const titulo = props.titulo;
	return (
		<div className="Card" style={cardStyle}>
			<div className="Title">{titulo}</div>
			<div className="Content">{props.children}</div>
		</div>
	);
}

export default Card;
