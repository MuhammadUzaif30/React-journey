import { useState } from "react"

function Counter () {
    const [count , setCount] = useState(0);
    // const [incr , setIncr] = useState();
    // const [decr , setDecr] = useState();

    const ResetCount = () => {
        setCount(0 );
    }
    const incrCount = () => {
        setCount(count + 1 )
    }
    const decrCount = () => {
        setCount(count - 1);
    }
    return(
    <div 
            className="counter-container">
            <p className="count-display">{count}</p>
            <button className = "counter-button" onClick={ResetCount}>Reset</button>
            <button className = "counter-button" onClick={incrCount}>Increment</button>
            <button className = "counter-button" onClick={decrCount}>Decrement</button>

    </div>
    )
}
export default Counter