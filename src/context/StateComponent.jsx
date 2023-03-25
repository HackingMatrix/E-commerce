import { counterContext } from "./CounterContext";
import { useState } from "react";

const StateComponent = ({children, data}) => {


    const [counter, setCounter] = useState(0)

    const incrementar = () => {
        if (counter !== data) {
            setCounter(counter + 1)
        }
    }
  
    const restar = () => {
        if (counter !== 0) {
            setCounter(counter - 1)
        }
    }

    const reset = () => {
        setCounter(0) 
    }

    return <counterContext.Provider value={{counter, incrementar, restar, reset}}>
        {children}
    </counterContext.Provider>
}

export default StateComponent