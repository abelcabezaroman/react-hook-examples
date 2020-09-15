import React, { useContext, useState } from 'react';
import CounterContext from "../../contexts/CounterContext";

export default function CounterContextPlusComp() {
    const [count, setCount] = useContext(CounterContext);
    return (
        <div className="c-counter-with-hooks">
            <p>Contador {count}</p>
            <button className="c-counter-with-hooks__button" onClick={() => setCount(count + 1)}>+</button>
            <button className="c-counter-with-hooks__button" onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
};
