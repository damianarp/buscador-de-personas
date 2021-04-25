import SearchBox from './components/SearchBox/index';
import SearchResults from './components/SearchResults/index';
import {useEffect, useState} from "react";

import "./style.css";

export default function Search() {

	const [isAtTop, setIsAtTop] = useState(false);
	const [results, setResults] = useState([]);
	const [data, setData] = useState([]);

	//Utilizamos useEffect, un metodo que viene de React, para hacer el llamado a la API
	useEffect(()=>{
		const getUsers = async () => {
			const response = await fetch('https://jsonplaceholder.typicode.com/users');
			const data = await response.json();
			
			setData(data);
		};
		getUsers().catch(null);
	}, []);

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