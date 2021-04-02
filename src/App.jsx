import React from "react";
import "./App.css";
import "./index.css";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import NumeroAleatorio from "./components/basicos/NumeroAleatorio";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";

import Card from "./components/layout/Card";

function App() {
	return (
		<div className="App">
			<h1>Fundamentos React</h1>

			<div className="Cards">
				<Card titulo="#05 - Repetição" color="#b3cde0">
					<ListaAlunos />
				</Card>

				<Card titulo="#04 - Componente com filhos" color="#6497b1">
					<Familia sobrenome="Ferreira">
						<FamiliaMembro nome="Pedro" />
						<FamiliaMembro nome="Ana" />
						<FamiliaMembro nome="Caio" />
					</Familia>
				</Card>

				<Card titulo="#03 - Desafio aleatório" color="#005b96">
					<NumeroAleatorio min={1} max={10} />
					<NumeroAleatorio min={1} max={10} />
				</Card>

				<Card titulo="#02 - Compoenente com parametro" color="#03396c">
					<ComParametro titulo="titulo" subtitulo="subtitulo" />
				</Card>

				<Card titulo="#01 - Compoenente sem parametro" color="#011f4b">
					<Primeiro />
				</Card>
			</div>
		</div>
	);
}

export default App;
