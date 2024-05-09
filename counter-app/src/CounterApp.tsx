import { useState } from "react"



type CounterAPPProps = {
    value: number
}

const CounterAPP = ({ value }: CounterAPPProps) => {

    const [counter, setCounter] = useState(value);

    const handleAdd = () => setCounter(counter + 1)
    const handleDecrease = () => setCounter(counter - 1)
    const handleReset = () => setCounter(value)
    return (
        <>
            <h1>CounterAPP</h1>
            <h2>{counter}</h2>

            <button onClick={handleAdd}> Aumentar el contador  </button>
            <button onClick={handleDecrease}> Disminuir el contador  </button>
            <button onClick={handleReset}> Reset  </button>
        </>
    )
}

export default CounterAPP