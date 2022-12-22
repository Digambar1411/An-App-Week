import "./App.css";
import { useState } from "react";
import { Header } from "./components/header/header";
import { Search } from "./components/search/search";
import { ResultContainer } from "./components/result container/result-container";
const names = require('@rstacruz/startup-name-generator');

function App() {
	const [headerExpanded, setHeaderExpanded] = useState(true);
	const [suggestedNames, setSuggestedNames] = useState([]);

	const HandleChange = (event) => {
		setHeaderExpanded(() => (event.target.value.length > 0 ? false : true));
		setSuggestedNames(event.target.value.length > 0 ? names(event.target.value).slice(0,40) : "");
	};

	return (
		<div className="App">
			<Header headerExpanded={headerExpanded} />
			<Search HandleChange={HandleChange} />

			<ResultContainer suggestedNames={suggestedNames} />
		</div>
	);
}

export default App;
