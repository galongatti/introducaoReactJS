import React from "react";

function ComParametro(params) {
	console.log("Params", params);
	const titulo = params.titulo;
	const subtitulo = params.subtitulo;
	return (
		<div>
			<strong>
				<h2>{titulo}</h2>
			</strong>
			<strong>
				<h3>{subtitulo}</h3>
			</strong>
		</div>
	);
}

export default ComParametro;
