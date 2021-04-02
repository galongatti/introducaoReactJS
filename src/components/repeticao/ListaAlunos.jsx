import React from "react";
import alunos from "../../data/alunos.js";

function ListaAlunos() {
	const listaAlunos = alunos.map((aluno) => {
		return (
			<li key={aluno.id}>{`${aluno.id}) ${aluno.nome} -> ${aluno.nota}`}</li>
		);
	});

	return (
		<div>
			<ul
				style={{
					listStyle: "none",
					textAlign: "start",
				}}
			>
				{listaAlunos}
			</ul>
		</div>
	);
}

export default ListaAlunos;
