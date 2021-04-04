import React from "react";

function InderetaFilho(props) {
	const gerarIdade = () => parseInt(Math.random() * (90 - 30)) + 30;

	return (
		<div>
			<div>Filho</div>
			<button
				onClick={function (e) {
					props.quandoClicar("João", gerarIdade, true);
				}}
			>
				Fornecer informações
			</button>
		</div>
	);
}

export default InderetaFilho;
