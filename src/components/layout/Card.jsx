import React from "react";
import "./Card.css";

function Card(props) {
	const titulo = props.titulo;
	return (
		<div className="Card">
			<div className="Title">{titulo}</div>
			<div className="Content">{props.children}</div>
		</div>
	);
}

export default Card;
