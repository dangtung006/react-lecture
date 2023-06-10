import { useEffect, useState } from "react"
import axios from "axios";
const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchPokemonApiV1 = () => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(res => res.json())
            .then(json => setPokemons(json.results))
    }

    const fetchPokemonApiV2 = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        const data = await response.json();
        setPokemons(data.results)
    }

    const fetchPokemonApiV3 = async () => {
        try {
            setIsLoading(true)
            const response = await axios('https://pokeapi.co/api/v2/pokemon');
            const { data } = response;
            setIsLoading(false);
            data && setPokemons(data.results);
        } catch (err) {
            setError(err);
            setIsLoading(false);
        }

    }
    useEffect(() => {
        setIsLoading(true)
        axios('https://pokeapi.co/api/v2/pokemon').then(response => {
            const { data } = response;
            setIsLoading(false);
            data && setPokemons(data.results);
        }).catch(err => {
            setError(err);
            setIsLoading(false);
        })
    }, [])

    return (<div>
        <button onClick={fetchPokemonApiV3}>Fetch</button>
        {isLoading && <Loading />}
        {!isLoading && error && <ServerError />}
        {!isLoading && !error && pokemons.length > 0 && <DateResult pokemons={pokemons} />}
    </div>)
}


const Loading = () => {
    return <p> Loading</p>
}
const ServerError = () => {
    return <p>Something went wrong</p>
}
const DateResult = (props) => {
    const { pokemons } = props
    return (
        <ul>
            {
                pokemons.map(pokemon => <li key={pokemon.url}>{pokemon.name}</li>)
            }
        </ul>
    )
}
export default Home