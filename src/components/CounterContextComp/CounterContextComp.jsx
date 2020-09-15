import React, { useContext, useState } from 'react';
import CounterContext from "../../contexts/CounterContext";

export default function CounterContextComp() {
    const initialValue = useContext(CounterContext);

    const [count, setCount] = useState(initialValue);

    return (
        <div className="c-counter-with-hooks">
            <p>Contador {count}</p>
            <button className="c-counter-with-hooks__button" onClick={() => setCount(count + 1)}>+</button>
            <button className="c-counter-with-hooks__button" onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
};

