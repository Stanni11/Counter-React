import { useState } from "react"
import './Counter.css';
const Counter = () => {

    const [count, setCount] = useState(0)

    const add = () => {
        setCount(count + 1)
    }

    const minus = () => {

        count !== 0 ? setCount(count - 1) : setCount(0)
        /* 
                if (count !== 0) {
                    setCount(count - 1)
                } else {
                    setCount(0)
                } */

    }

    const reset = () => {
        setCount(0)
    }

    return (
        <><div className="container">
            <div className="rechner">
                <button className="plusbutton" onClick={add}>+</button>
                <span>{count}</span>
                <button className="minusbutton" onClick={minus}>-</button>
            </div>
            <div>
                <button className="resetbutton" onClick={reset}>Reset</button>
            </div>
        </div>
        </>
    )
}

export default Counter