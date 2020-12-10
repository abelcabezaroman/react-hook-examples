import React, { useEffect, useState } from 'react';

export default function CounterEffect(){
    const [count, setCount] = useState(0);

    // const [counter, setCounter] = useState(10);

    // function getUsers (){
    //     // fetch()
    // }
    // useEffect(getUsers, []);


    const alertMe = () => {
        console.log('Hello!');

        return () => {
            console.log('Bye!')
        }
    }
    

    useEffect(alertMe, [count]);
    
    // useEffect(() => console.log("mount"), []);
    // useEffect(() => console.log("will update count"), [count]);
    // useEffect(() => {setCount(10)}, [count]); // MAL
    // useEffect(() => console.log("will update any"));
    // useEffect(() => () => console.log("will update count or unmount"), [count]);
    // useEffect(() => () => console.log("Bye!"), []);

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

// const a = () => {return 5 + 5}
// const b = () => 5 + 5