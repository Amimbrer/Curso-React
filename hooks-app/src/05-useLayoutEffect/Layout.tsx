import { LoadingMessage } from "../03-examples/LoadingMessage";
import { PokemonCard } from "../03-examples/PokemonCard";
import useCounter from "../hooks/useCounter";
import useFetch from "../hooks/useFetch"

const Layout = () => {

    const { counter, decrement, incremental } = useCounter(1);
    const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    console.log(data?.sprites);


    return (
        <>
            <h1>Informacion de Pokemón</h1>
            <hr />

            {
                isLoading
                    ? <LoadingMessage />
                    : <PokemonCard {...data} sprites={[
                        data?.sprites?.back_default,
                        data?.sprites?.back_shiny,
                        data?.sprites?.front_default,
                        data?.sprites?.front_shiny
                    ]}
                    />
            }

            <h2>{data?.name}</h2>

            <br />
            <button onClick={() => decrement()}>
                Anteriores
            </button>
            <button onClick={() => incremental()}>
                Siguiente
            </button>
        </>
    )
}

export default Layout