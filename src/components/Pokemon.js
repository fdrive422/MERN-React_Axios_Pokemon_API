import axios from "axios";

const Pokemon = (props) => {

    const getPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(res => {
                console.log(res.data.results)
                props.setPokemon(res.data.results)
            }).catch(err => console.log(err))
    }

    return (
        <>
            <button onClick={getPokemon}>Get Pokemons</button>

            <h3>Axios Pokemon API</h3>
            {props.pokemon.length > 0 && props.pokemon.map((pokemon) => {
                return (<p>{pokemon.name}</p>)
            })
            }

        </>
    )
}

export default Pokemon;