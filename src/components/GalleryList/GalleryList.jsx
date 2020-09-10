import React, { useState } from 'react'
import GalleryItem from "../GalleryItem/GalleryItem";

export default function GalleryList () {

    const [list, setList] = useState([
        {
            title: 'Master title',
            description: 'Lorem ipsum',
            imgUrl: 'https://static.iris.net.co/semana/upload/images/2020/4/27/666425_1.jpg'
        },
        {
            title: 'Master title 2',
            description: 'Lorem ipsum 2',
            imgUrl: 'https://static.iris.net.co/semana/upload/images/2020/4/27/666425_1.jpg'
        }
    ]);

    const deleteItem = (i) => {
        const localList = [...list]
        localList.splice(i, 1)
        setList(localList);
    }


    // let itemsToShow = [];
    //
    // for(let i = 0; i < list.length; i++) {
    //     let item = list[i];
    //     itemsToShow.push(<GalleryItem key={i} index={i} item={item} fnDeleteItem={deleteItem}/>)
    // }

    return (
        <div>
            {/*{itemsToShow}*/}
            {list.map((item, i) => <GalleryItem key={i} index={i} item={item} fnDeleteItem={deleteItem}/>)}
        </div>
    )
}
