import React from "react";
import "./index.css";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";

function App() {
	return (
		<div id="app">
			<h1>Fundamentos React</h1>
			<Primeiro />
			<ComParametro titulo="Segundo componente" subtitulo="Com parametro" />
		</div>
	);
}

export default App;
