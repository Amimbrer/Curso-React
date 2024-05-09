import useCounter from '../hooks/useCounter'

const CounterWithCustomHook = () => {

    const { counter, incremental, decrement, reset } = useCounter();


    return (
        <>
            <h1>Counter With Hook: {counter}</h1>
            <hr />


            <button aria-label="Aumentar contador" onClick={() => incremental(2)}> +1 </button>
            <button onClick={reset}>Reset</button>
            <button aria-label="Diminuir contador" onClick={() => decrement(2)}>-1</button>
        </>
    )
}

export default CounterWithCustomHook
