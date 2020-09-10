import React, { useEffect, useState } from 'react';

export const CounterEffect = function () {
    const [count, setCount] = useState(0);

    // const [counter, setCounter] = useState(props.initialValue);

    // function getUsers (){
    //     // fetch()
    // }
    // useEffect(getUsers, []);


    const alertMe = () => {
        console.log('Hey!');

        return () => {
            console.log('Bye!')
        }
    }


    useEffect(alertMe, [count]);
    //
    // useEffect(() => console.log("mount"), []);
    // useEffect(() => console.log("will update count"), [count]);
    // useEffect(() => console.log("will update any"));
    // useEffect(() => () => console.log("will update count or unmount"), [count]);
    // useEffect(() => () => console.log("unmount"), []);

    // useEffect(() => console.log("mount"))

    return (
        <div className="b-counter">
            <p>Counter {count}</p>
            <button className="b-counter__button" onClick={() => setCount(count + 1)}>+</button>
            <button className="b-counter__button" onClick={() => setCount(count - 1)}>-</button>

            {/*<p>Contador {counter}</p>*/}
            {/*<button className="b-counter-with-hooks__button" onClick={() => setCounter(counter + 1)}>+</button>*/}
            {/*<button className="b-counter-with-hooks__button" onClick={() => setCounter(counter - 1)}>-</button>*/}
        </div>
    )
};

