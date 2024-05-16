import { useState } from "react"

const useCounter = (initialValue = 10) => {


    const [counter, setCounter] = useState(initialValue)

    const incremental = (value = 1) => {
        setCounter(counter + value)
    }
    const decrement = (value = 1) => {
        counter > 1 && setCounter(counter - value);
    }
    const reset = () => {
        setCounter(initialValue)
    }

    return {
        counter: counter,
        incremental, decrement, reset
    }
}

export default useCounter;