import React, { useState } from "react";
import "./Gerador.css";

function Gerador(props) {
	const [numeros, setNumeros] = useState([]);
	let qtdNumeros = props.qtdNumeros;

	const gerarNumeros = () => {
		setNumeros([]);
		console.log("qtdNumeros", qtdNumeros);
		let listaNumeros = [];
		let n = 0;
		for (let i = 0; i < qtdNumeros; i++) {
			n = Math.floor(Math.random() * 100);
			listaNumeros.push(n);
		}

		setNumeros(listaNumeros);
	};

	return (
		<div className="megasena">
			<button onClick={gerarNumeros}>Gerar</button>
			<ul>
				{numeros.map((numero) => (
					<li>{numero}</li>
				))}
			</ul>
		</div>
	);
}

export default Gerador;
