import React, { useState } from "react";
import "./Input.css";

function Input(props) {
	const [valor, setValor] = useState("Inicial");

	return (
		<div className="Input">
			<h2>{valor}</h2>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
				}}
			>
				<input
					value={valor}
					onChange={(e) => {
						setValor(e.target.value);
					}}
				/>

				<input value={valor} readOnly />
			</div>
		</div>
	);
}

export default Input;
