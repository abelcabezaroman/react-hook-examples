import React, { useContext }  from 'react';
import CounterContext from '../../contexts/CounterContext';



export default function CounterUseReducerGlobal() {
    const [state, dispatch] = useContext(CounterContext);

    return (
        <div className="b-counter-with-hooks">
            <p>Count: {state.count}</p>

            <button className="b-counter-with-hooks__button" onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button className="b-counter-with-hooks__button" onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button className="b-counter-with-hooks__button" onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    );
}