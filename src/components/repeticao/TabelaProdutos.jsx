import React from "react";
import produtos from "../../data/produtos.js";
import "./TabelaProdutos.css";

function TabelaProdutos() {
	const listaProdutos = produtos.map((produto, i) => {
		return (
			<tr key={produto.id} className={i % 2 === 0 ? "Par" : "Impar"}>
				<td>{produto.id}</td>
				<td>{produto.descricao}</td>
				<td>R${produto.preco.toFixed(2).replace(".", ",")}</td>
			</tr>
		);
	});

	return (
		<div className="TabelaDeProduto">
			<table>
				<thead>
					<tr>
						<th>Produto</th>
						<th>Descrição</th>
						<th>Preço</th>
					</tr>
				</thead>

				<tbody>{listaProdutos}</tbody>
			</table>
		</div>
	);
}

export default TabelaProdutos;
