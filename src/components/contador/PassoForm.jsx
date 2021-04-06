import React from "react";

function PassoForm(props) {
	return (
		<div>
			<div>
				<label htmlFor="passoIncremento">Passo de incremento</label>
				<input
					id="passoIncremento"
					type="number"
					value={props.passoIncremento}
					onChange={(e) =>
						props.setPassoIncremento(parseInt(e.target.value))
					}
				/>
			</div>
			<div>
				<label htmlFor="">Passo de decremento</label>
				<input
					id="passoDecremento"
					type="number"
					value={props.passoDecremento}
					onChange={(e) =>
						props.setPassoDecremento(parseInt(e.target.value))
					}
				/>
			</div>
		</div>
	);
}

export default PassoForm;
