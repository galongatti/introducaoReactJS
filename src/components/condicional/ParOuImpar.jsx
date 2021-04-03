import React from "react";

function ParOuImpar(props) {
	const isPar = props.valor % 2 === 0;

	return (
		<div>
			<span>
				{isPar ? `${props.valor} é par` : `${props.valor} é impar`}
			</span>
		</div>
	);
}

export default ParOuImpar;
