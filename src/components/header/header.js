import React from "react";
import "./header.css";

const Header = ({ headerExpanded }) => {
	return (
		<div className="head-container">
			<img
				className={`head-image ${headerExpanded ? "expanded" : "shrink"}`}
				src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
				alt="head"
			/>
			<p className="text">Name It !!</p>
		</div>
	);
};

export { Header };
