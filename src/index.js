import ReactDOM from "react-dom";
import React from "react";
import "./index.css";
import Primeiro from "../src/components/basicos/Primeiro";
import ComParametro from "../src/components/basicos/ComParametro";

const tag = (
	<div>
		<Primeiro />
		<ComParametro titulo="Segundo componente" subtitulo="Com parametro" />
	</div>
);
const element = document.getElementById("root");
ReactDOM.render(<div>{tag}</div>, element);
