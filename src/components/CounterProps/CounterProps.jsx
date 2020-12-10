import React, { useState } from 'react';
import './CounterProps.scss';

export default function CounterProps (props) {
    // const arrayTal =  useState(0);
    // const count = arrayTal[0];
    // const setCount = arrayTal[1];

    const [count, setCount] = useState(props.defaultNumber);

    // const valoresIniciales = ['Abel', 'Carlos']
    // const [variable1, variable2] = valoresIniciales;

    return (
        <div className="c-counter">
            <p>Contador {count}</p>
            <button className="c-counter__button" onClick={() => setCount(count + 1)}>+</button>
            <button className="c-counter__button" onClick={() => setCount(count - 1)}>-</button>
            <button className="c-counter__button" onClick={() => setCount(count * 2)}>* 2</button>
            <button className="c-counter__button" onClick={() => setCount(count / 2)}>/ 2</button>
            <button className="c-counter__button"
                    onClick={() => setCount(0)}>Reset
            </button>
        </div>
    )
};

