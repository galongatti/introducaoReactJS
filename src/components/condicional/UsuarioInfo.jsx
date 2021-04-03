import React from "react";
import Condicional from "./Condicional";

function UsuarioInfo(props) {
	const usuario = props.usuario || {};

	return (
		<div>
			<Condicional test={usuario && usuario.nome}>
				Seja bem vindo <strong>{usuario.nome}</strong>
			</Condicional>
		</div>
	);
}

export default UsuarioInfo;
