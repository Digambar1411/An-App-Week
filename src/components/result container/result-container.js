import React from "react";
import "./result-container.css";
import { NameCard } from "../nameCard/nameCard";

const ResultContainer = ({ suggestedNames }) => {
	return (
		<div className="result-container">
			{suggestedNames && suggestedNames.map((name) => <NameCard key={name} name={name} />)}
		</div>
	);
};

export { ResultContainer };
