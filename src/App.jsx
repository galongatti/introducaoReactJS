import React from "react";
import "./App.css";
import "./index.css";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import NumeroAleatorio from "./components/basicos/NumeroAleatorio";

import Card from "./components/layout/Card";

function App() {
	return (
		<div className="App">
			<h1>Fundamentos React</h1>

			<div className="Cards">
				<Card titulo="#03 - Desafio aleatório">
					<NumeroAleatorio min={1} max={10} />
					<NumeroAleatorio min={1} max={10} />
				</Card>

				<Card titulo="#02 - Compoenente com parametro">
					<ComParametro titulo="titulo" subtitulo="subtitulo" />
				</Card>

				<Card titulo="#01 - Compoenente sem parametro">
					<Primeiro />
				</Card>
			</div>
		</div>
	);
}

export default App;
