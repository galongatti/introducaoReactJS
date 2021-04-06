import React, { useState } from "react";
import "./Contador.css";
import Display from "./Display";
import Botoes from "./Botoes";
import PassoForm from "./PassoForm";

function Contador2(props) {
	let [passoIncremento, setPassoIncremento] = useState(props.passoIncremento);
	let [passoDecremento, setPassoDecremento] = useState(props.passoDecremento);
	let [numero, setNumero] = useState(props.numero || 0);

	function incrementar() {
		setNumero(numero + passoIncremento);
	}

	function decrementar() {
		setNumero(numero - passoDecremento);
	}

	function definirIncremento(valor) {
		setPassoIncremento(valor);
	}

	function definirDecremento(valor) {
		setPassoDecremento(valor);
	}

	return (
		<div className="Contador">
			<h2>Contador</h2>
			<PassoForm
				setPassoIncremento={definirIncremento}
				passoIncremento={passoIncremento}
				setPassoDecremento={definirDecremento}
				passoDecremento={passoDecremento}
			/>
			<Botoes incrementar={incrementar} decrementar={decrementar} />
			<Display numero={numero} />
		</div>
	);
}

export default Contador2;
