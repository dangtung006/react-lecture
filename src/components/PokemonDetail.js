import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PokeMonDetail = () => {

    const params = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${params.name}`).then(res => {
            setPokemon(res.data)
        })
    }, [params.name]);

    return (<div>
        {
            pokemon && <div>
                <p>Name : {pokemon.name}</p>
                <p>Image : <img src={pokemon.sprites.front_default} /></p>
            </div>
        }
    </div>)
}

export default PokeMonDetail;