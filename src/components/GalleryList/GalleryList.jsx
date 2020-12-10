import React, { useState } from 'react'
import GalleryItem from "../GalleryItem/GalleryItem";

export default function GalleryList (props) {

 
    return (
        <div>
            {props.list.map((item, i) => <GalleryItem key={i} item={item} />)}
        </div>
    )
}
