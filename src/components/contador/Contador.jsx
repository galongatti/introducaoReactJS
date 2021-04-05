import React, { Component } from "react";
import "./Contador.css";

class Contador extends Component {
	constructor(props) {
		super(props);
		this.state = {
			numero: this.props.numeroInicial || 0,
			passoIncremento: 0,
			passoDecremento: 0,
		};

		this.inclementar = this.inclementar.bind(this);
	}

	inclementar() {
		console.log(this.state.passoIncremento);
		this.setState({
			numero: this.state.numero + this.state.passoIncremento,
		});
	}

	decrementar = () => {
		this.setState({
			numero: this.state.numero - this.state.passoDecremento,
		});
	};

	render() {
		const { passoIncremento, passoDecremento } = this.state;

		return (
			<div className="Contador">
				<h2>Contador</h2>
				<div>
					<label htmlFor="passoIncremento">Passo de incremento</label>
					<input
						id="passoIncremento"
						type="number"
						value={passoIncremento}
						onChange={(e) =>
							this.setState({
								passoIncremento: parseInt(e.target.value),
							})
						}
					/>
				</div>
				<div>
					<label htmlFor="">Passo de decremento</label>
					<input
						id="passoDecremento"
						type="number"
						value={passoDecremento}
						onChange={(e) =>
							this.setState({
								passoDecremento: parseInt(e.target.value),
							})
						}
					/>
				</div>
				<button onClick={this.inclementar}>+</button>
				<button onClick={this.decrementar}>-</button>
				<p>Valor atual: {this.state.numero}</p>
			</div>
		);
	}
}

export default Contador;
