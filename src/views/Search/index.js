import SearchBox from './components/SearchBox/index';
import SearchResults from './components/SearchResults/index';
import {useState} from "react";

import data from "../../data/users.json";
import "./style.css";

export default function Search() {

	const [isAtTop, setIsAtTop] = useState(false);
	const [results, setResults] = useState([]);

	const handleCloseSearch = () => {
		setIsAtTop(false);
		setResults([]);
	};
	const handleSearchClick = (searchText) => {
		setIsAtTop(true);
		if(data?.length) {
			const searchTextMinus = searchText.toLowerCase();
			const filteredData = data.filter((value) => (
				
					value.name.toLowerCase().includes(searchTextMinus) || 
					value.phone.toLowerCase().includes(searchTextMinus) ||
					value.email.toLowerCase().includes(searchTextMinus) ||
					value.username.toLowerCase().includes(searchTextMinus)
				)
			);
			setResults(filteredData);
		}		 
	};

	return (
		<div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
			<SearchBox 
				onSearch={handleSearchClick}
				onClose={handleCloseSearch}
				isSearching={isAtTop}
				/>
			<SearchResults 
				results={results} 
				isSearching={isAtTop} />	
		</div>
	);
}