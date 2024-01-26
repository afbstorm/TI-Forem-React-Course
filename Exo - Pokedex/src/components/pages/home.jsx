import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();
    const [ name, setName ] = useState('');

    const searchPokemon = () => {
        navigate(`/details/${name}`);
    }

    return (
        <div>
            <input 
                type="text"
                placeholder='Entrer un nom de pokémon' 
                onChange={(e) => setName(e.target.value)}
            />

            <button onClick={searchPokemon}>Rechercher</button>
        </div>
    )
}

export default Home;