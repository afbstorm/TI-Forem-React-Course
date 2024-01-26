import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Details = () => {
    const [ pokemonData, setPokemonData ] = useState(null);
    const { name } = useParams();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(res => setPokemonData(res.data))
            .catch(err => console.error(err))
    }, [name])

    console.log(pokemonData);

    return (
        <>
            {pokemonData ? (
                <div>
                    <h1>{pokemonData.name}</h1>
                    <img src={pokemonData.sprites.front_shiny} alt={`Image shiny de ${name}`} />
                    <p>Height: {pokemonData.height}</p>
                    <p>Weight: {pokemonData.weight}</p>
                </div>
            ) : (
                <h3>Loading...</h3>
            )}
        </>
    )
}

export default Details;