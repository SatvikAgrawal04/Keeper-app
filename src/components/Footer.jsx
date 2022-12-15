import React from "react";

var year = new Date().getFullYear();

function footer() {
	return (
		<footer>
			<p>copyright ©{year}</p>
		</footer>
	);
}

export default footer;
