import { useCounter } from "./useCounter";

export function Counter ({initialValue= 0}){
    
    const {count, handleCounterIncrement, handleCounterDecre,handleCounterReset } = useCounter(initialValue)
    return (
        <div>
            <h4>{count}</h4>
            <button onClick={handleCounterIncrement}>Add</button>
            <button onClick={handleCounterReset}>Reset</button>
            <button onClick={handleCounterDecre}>Decrement</button>
        </div>
    )
}