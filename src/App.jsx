import React from "react";
import "./App.css";
import "./index.css";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import NumeroAleatorio from "./components/basicos/NumeroAleatorio";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import Card from "./components/layout/Card";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";

function App() {
	return (
		<div className="App">
			<h1>Fundamentos React</h1>
			<div className="Cards">
				<Card titulo="#10 - Componente controaldo " color="#03396c">
					<Input />
				</Card>
				<Card titulo="#09 - Comunicação indireta " color="#011f4b">
					<IndiretaPai />
				</Card>
				<Card titulo="#08 - Comunicação direta " color="#03396c">
					<DiretaPai />
				</Card>
				<Card titulo="#07 - Renderização condicional" color="#005b96">
					<ParOuImpar valor={7} />
					<UsuarioInfo usuario={{ nome: "Gabriel" }} />
				</Card>
				<Card titulo="#06 - Desafio repetição" color="#6497b1">
					<TabelaProdutos />
				</Card>

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

				<Card titulo="#02 - Componente com parametro" color="#03396c">
					<ComParametro titulo="titulo" subtitulo="subtitulo" />
				</Card>

				<Card titulo="#01 - Componente sem parametro" color="#011f4b">
					<Primeiro />
				</Card>
			</div>
		</div>
	);
}

export default App;
