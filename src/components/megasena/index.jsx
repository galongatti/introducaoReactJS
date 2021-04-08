import React, { useState } from "react";
import InputQtd from "./InputQtd";
import Gerador from "./Gerador";

function MegaSena() {
	let [qtdNumeros, setQtdNumeros] = useState(0);

	return (
		<div>
			<InputQtd definirQtd={setQtdNumeros} qtdNumeros={qtdNumeros} />
			<Gerador qtdNumeros={qtdNumeros} />
		</div>
	);
}

export default MegaSena;
