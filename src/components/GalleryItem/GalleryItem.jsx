import React from 'react'

export default function GalleryItem (props) {


    return (
        <figure>
            <img src={props.item.imgUrl} alt="ajolote"/>
            <figcaption> 
                <h4>{props.item.title}</h4>
            </figcaption>
            <p>{props.item.description}</p>
        </figure>
    )
}
