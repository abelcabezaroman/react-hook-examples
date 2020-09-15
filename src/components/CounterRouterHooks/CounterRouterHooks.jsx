import React, { useState } from 'react';
import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom";

export function CounterRouterHooks () {
    const [count, setCount] = useState(Number(useParams().initialValue));
    const history = useHistory();

    console.log('##ABEL## >> useLocation >>  ', useLocation());
    console.log('##ABEL## >> useHistory >>  ', useHistory());
    console.log('##ABEL## >> useParams >>  ', useParams());
    console.log('##ABEL## >> useRouterMatch >>  ', useRouteMatch());

    const goList = () => {
        // history.push('../list')
        history.push('/list')
    }

    const goBack = () => {
        history.goBack()
    }

    return (
        <div className="b-counter-with-hooks">

            <button onClick={goList}>Go List!</button>
            <button onClick={goBack}>Go Back!</button>
            {/*<p>Valor inicial del parametro {query.get('initialParamValue')}</p>*/}
            <p>Contador {count}</p>
            <button className="b-counter-with-hooks__button" onClick={() => setCount(count + 1)}>+</button>
            <button className="b-counter-with-hooks__button" onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
};

