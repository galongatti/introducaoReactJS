import React from "react";

function DiretaFilho(props) {
	return (
		<div>
			<div>{props.texto}</div>
			<div>{props.numero}</div>
			<div>{props.bool ? "Verdadeiro" : "Falso"}</div>
		</div>
	);
}

export default DiretaFilho;
