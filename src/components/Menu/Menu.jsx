import React from "react";
import { Link } from "react-router-dom";
import './Menu.scss'
export default function Menu () {
    //
    // const urls = [{
    //     label: 'Counter',
    //     link: '/counter'
    // },{
    //     label: 'Gallery',
    //     link: '/gallery'
    // },{
    //     label: 'Hello World',
    //     link: '/hello'
    // },{
    //     label: 'List',
    //     link: '/list'
    // }]

    // return (<nav>
    //     {urls.map(url => <Link to={url.link}>{url.label}</Link>)}
    // </nav>)
    return(
        <nav className="c-menu">
            <Link className="c-menu__link" to="/counter">Counter</Link>
            <Link className="c-menu__link" to="/gallery">Gallery</Link>
            <Link className="c-menu__link" to="/list">List</Link>
            <Link className="c-menu__link" to="/hello">Hello</Link>
        </nav>
    )
}
