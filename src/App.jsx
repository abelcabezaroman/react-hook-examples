import React, { useState } from 'react';
import './App.scss';
import CounterContext from './contexts/CounterContext'
import CounterContextPlusComp from "./components/CounterContextPlusComp/CounterContextPlusComp";

function App () {
    const [count, setCount] = useState(0);
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
                {/*<CounterEffect/>*/}

                <CounterContext.Provider value={[count, setCount]}>
                    <CounterContextPlusComp/>
                </CounterContext.Provider>

                <CounterContext.Provider value={[count, setCount]}>
                    <CounterContextPlusComp/>
                </CounterContext.Provider>

            </div>
        </div>
    );
}

export default App;
