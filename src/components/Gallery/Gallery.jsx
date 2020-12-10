import React, { useState } from 'react'
import GalleryList from "../GalleryList/GalleryList";

export default function Gallery () {

    const [list, setList] = useState([
        {
            title: 'Master title',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro ut dolore obcaecati perspiciatis, at illum debitis pariatur dolor ipsum eveniet recusandae, animi sequi blanditiis, consectetur numquam nam fugit dolorum velit.',
            imgUrl: 'https://static.iris.net.co/semana/upload/images/2020/4/27/666425_1.jpg'
        },
        {
            title: 'Master title 2',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro ut dolore obcaecati perspiciatis, at illum debitis pariatur dolor ipsum eveniet recusandae, animi sequi blanditiis, consectetur numquam nam fugit dolorum velit.',
            imgUrl: 'https://static.iris.net.co/semana/upload/images/2020/4/27/666425_1.jpg'
        }
    ]);

    return (
        <GalleryList list={list}></GalleryList>
    )
}
