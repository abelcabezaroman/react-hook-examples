import React from 'react';

export default function ListProps (props) {
    return (
        <ul>
            {props.stringList.map(stringText => <li>{stringText}</li>)}
        </ul>
    )
}
