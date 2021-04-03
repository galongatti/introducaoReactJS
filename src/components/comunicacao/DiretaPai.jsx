import React from "react";
import DiretaFilho from "./DiretaFilho";

function DiretaPai(props) {
	return (
		<div>
			<DiretaFilho texto="filho1" numero={10} bool={true} />
		</div>
	);
}

export default DiretaPai;
