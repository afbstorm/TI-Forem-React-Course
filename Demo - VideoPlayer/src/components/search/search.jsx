import { useState } from "react";
import './search.css';


const Search = (props) => {
    // Récupération du prop
    const { setSearch } = props;

    // Création d'un state pour l'input de recherche
    const [ searchValue, setSearchValue ] = useState('');

    // Fonction pour envoyer la recherche utilisateur au composant parent via le prop setSearch
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(searchValue)
    }

    // Fonction pour mettre à jour le state searchValue
    const handleInputChange = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <div className="search-layout">
            <p className="search-title">Search Field</p>
            <form onSubmit={handleSubmit}>
                <div className="search-container">
                    <input className="search" type="text" placeholder="Search..." onChange={handleInputChange} />
                    <button className="submit" type="submit">Search</button>
                </div>
            </form>
        </div>
    )
}

export default Search;