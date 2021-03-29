import React from "react";
import "./index.css";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import NumeroAleatorio from "./components/basicos/NumeroAleatorio";

function App() {
	return (
		<div id="app">
			<h1>Fundamentos React</h1>
			<NumeroAleatorio min={1} max={10}  />
			<Primeiro />
			<ComParametro titulo="Segundo componente" subtitulo="Com parametro" />
		</div>
	);
}

export default App;
