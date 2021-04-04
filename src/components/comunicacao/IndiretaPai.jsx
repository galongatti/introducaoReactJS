import React, { useState } from "react";
import InderetaFilho from "./IndiretaFilho";

function IndiretaPai(props) {
	let [nome, setNome] = useState("?");
	let [idade, setIdade] = useState(0);
	let [nerd, setNerd] = useState(false);

	function fornecerInformações(nome, idade, nerd) {
		setNome(nome);
		setIdade(idade);
		setNerd(nerd);
	}

	return (
		<div>
			<div>
				<span>{nome} </span>
				<span>{idade} </span>
				<span>{nerd ? "Verdadeiro" : "Falso"} </span>
			</div>
			<InderetaFilho quandoClicar={fornecerInformações}></InderetaFilho>
		</div>
	);
}

export default IndiretaPai;
