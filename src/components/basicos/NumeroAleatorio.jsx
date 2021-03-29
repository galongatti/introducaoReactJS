import React from "react";

function NumeroAleatorio(props) {
	const { min, max } = props;
	return <h2> Valor gerado: {Math.floor(Math.random() * (min + max))}</h2>;
}

export default NumeroAleatorio;
