import React from 'react'

export default function GalleryItem (props) {


    return (
        <figure>
            <img src={props.item.imgUrl} alt="ajolote"/>
            <figcaption>
                <h4>{props.item.title}</h4>
                <p>{props.item.description}</p>
            </figcaption>
            <button onClick={() => props.fnDeleteItem(props.index)}>X</button>
        </figure>
    )
}
