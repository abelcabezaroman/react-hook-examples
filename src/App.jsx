import React from 'react';
import './App.scss';
import Counter from "./components/Counter/Counter";
import HelloProps from "./components/HelloProps/HelloProps";
import ListProps from "./components/ListProps/ListProps";

function App () {
    return (
        <div className="App">
            <div className="App-header">
                <HelloProps textToShow="World"/>
                <Counter/>
                <ListProps stringList={['Number 1', 'Number 2', 'Number 3']}/>

                {/*<GalleryItem item={}/>*/}
                {/*<figure>*/}
                {/*    <img src="" alt=""/>*/}
                {/*    <figcaption>*/}
                {/*        <h3>Titulo</h3>*/}
                {/*        <p>asdasdasdasd</p>*/}
                {/*    </figcaption>*/}
                {/*</figure>*/}
            </div>
        </div>
    );
}

export default App;
