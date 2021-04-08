import React from "react";

function InputQtd(props) {
	return (
		<div>
			<label htmlFor="quantidade">Quantidades de numeros a gerar:</label>
			<input
				id="quantidade"
				type="number"
				value={props.qtdNumeros}
				onChange={(e) => {
					props.definirQtd(parseInt(e.target.value));
				}}
			/>
		</div>
	);
}

export default InputQtd;
