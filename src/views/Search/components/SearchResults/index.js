import SearchResultsItem from "./SearchResultsItem";
import "./style.css";

export default function SearchResults({results, isSearching}) {
    return (
        <div className="search-results">
            {!results?.length && isSearching && <p className="no-results">Ningun resultado coincide con la búsqueda</p>}
            {results?.map((value) => <SearchResultsItem key={value.id} {...value} />                
            )}
        </div>
    );
}