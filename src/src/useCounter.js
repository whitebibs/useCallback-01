import { useState, useCallback} from "react"

export function useCounter ({initialValue = 0 }){
    const [count, setCounter] = useState(initialValue)

    const handleCounterIncrement= useCallback(()=>{
        setCounter((num) => num+1)
    }, [])
   
    const handleCounterDecre = useCallback(()=>{
        setCounter((num) => num -1)
    },[])
 
    const handleCounterReset = useCallback(()=>{
        setCounter(initialValue)
    },[initialValue])
   

    return{
       count, 
       handleCounterIncrement,
       handleCounterDecre, handleCounterReset
    }
}