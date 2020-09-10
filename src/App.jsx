import React from 'react';
import './App.scss';
import Counter from "./components/Counter/Counter";
import HelloProps from "./components/HelloProps/HelloProps";
import ListProps from "./components/ListProps/ListProps";
import { CounterEffect } from "./components/CounterEffect/CounterEffect";

function App () {
    return (
        <div className="App">
            <div className="App-header">
                {/*<HelloProps textToShow="World"/>*/}
                {/*<Counter/>*/}
                {/*<ListProps stringList={['Number 1', 'Number 2', 'Number 3']}/>*/}

                {/*<GalleryItem item={{*/}
                {/*    title: 'Master title',*/}
                {/*    description: 'Lorem ipsum',*/}
                {/*    imgUrl: 'https://static.iris.net.co/semana/upload/images/2020/4/27/666425_1.jpg'*/}
                {/*}}/>*/}

                {/*<GalleryList/>*/}
                <CounterEffect/>
            </div>
        </div>
    );
}

export default App;
