import React from "react";
import "./search.css";

const Search = ({ HandleChange }) => {
	// const HandleChange=(event)=>{
	//     console.log(event.target.value)
	// }

	return (
		<input
			onChange={HandleChange}
			className="search-input"
			placeholder="Type keyword"
		/>
	);
};

export { Search };
