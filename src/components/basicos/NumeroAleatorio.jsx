import React from "react";

function NumeroAleatorio(props) {
	const { min, max } = props;
	return(  
      <>
      <h1>Gerando número aleatorio</h1>
      <h2> Valor gerado: {Math.floor(Math.random() * (min + max))}</h2>
      </>
   );
}

export default NumeroAleatorio;
