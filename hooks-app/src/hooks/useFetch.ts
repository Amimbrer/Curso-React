import { useEffect, useState } from "react"
import { IPokemon } from "../interfaces/IPokemon"

type stateProps = {
    data: (IPokemon | null),
    isLoading: boolean,
    hasError: boolean,
    error: any
}

type Cache = {
    [url: string]: IPokemon
}

const localCache: Cache = {};


const useFetch = (url: string): stateProps => {

    const initialState: stateProps = {
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    }


    const [state, setState] = useState(initialState)


    useEffect(() => {
        getFetch();
    }, [url]);

    const setLoadingState = () => {
        setState(initialState);
    };

    // Realiza llamda Fetch para obtener datos
    const getFetch = async () => {

        if (localCache[url]) {
            console.log('Usando cache');
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null
            })

            return;
        }


        setLoadingState();

        const resp = await fetch(url);

        await new Promise(resolve => setTimeout(resolve, 2000))

        if (!resp.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    message: resp.statusText
                }
            });

            return;
        }

        const data = await resp.json();
        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null
        })


        // Manejo de caché
        localCache[url] = data;

    }

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
        error: state.error,
    }
}

export default useFetch