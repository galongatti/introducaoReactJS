import React, { cloneElement, Children } from "react";

function Familia(props) {
	return (
		<div>
			{Children.map(props.children, (e, i) => {
				return cloneElement(e, { ...props, key: i });
			})}
		</div>
	);
}

export default Familia;
