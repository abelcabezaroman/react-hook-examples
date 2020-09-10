import React from 'react';

export default function ListProps (props) {
    return (
        <ul>
            {props.stringList.map((stringText, i) => <li key={i}>{stringText}</li>)}
        </ul>
    )
}
