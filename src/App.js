import React, { useReducer, useState } from 'react';
import './App.scss';
import Counter from './components/Counter/Counter';
import CounterUseReducer from './components/CounterUseReducer/CounterUseReducer';
import CounterContextPlusComp from './components/CounterContextPlusComp/CounterContextPlusComp';
import CounterEffect from './components/CounterEffect/CounterEffect';
import CounterProps from './components/CounterProps/CounterProps';
import Gallery from './components/Gallery/Gallery';
import Tab from './components/Tab/Tab';
import CounterContext from './contexts/CounterContext';
import CounterUseReducerGlobal from './components/CounterUserReducerGlobal/CounterUserReducerGlobal';

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return initialState;
        default:
            throw new Error();
    }
}

function App() {
    const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="App">
            <div className="App-header">
                {/* <HelloProps textToShow="World"/> */}
                <Counter />
                <CounterProps defaultNumber={10} />
                {/*<ListProps stringList={['Number 1', 'Number 2', 'Number 3']}/>*/}

                {/*<GalleryItem item={{*/}
                {/*    title: 'Master title',*/}
                {/*    description: 'Lorem ipsum',*/}
                {/*    imgUrl: 'https://static.iris.net.co/semana/upload/images/2020/4/27/666425_1.jpg'*/}
                {/*}}/>*/}

                <Gallery />
                <CounterEffect />


                <Tab tabs={[
                    { title: 'Tab 1', content: 'Soy el contenido de un tab' },
                    { title: 'Tab 2', content: 'Soy el contenido de un tab' },
                    { title: 'Tab 3', content: 'Soy el contenido de un tab' }
                ]}></Tab>



                {/* <CounterContext.Provider value={5}>
                    <CounterContextComp />
                </CounterContext.Provider>

                <CounterContext.Provider value={10}>
                    <CounterContextComp />
                </CounterContext.Provider> */}


                <CounterContext.Provider value={[count, setCount]}>
                    <CounterContextPlusComp />
                </CounterContext.Provider>

                <CounterContext.Provider value={[count, setCount]}>
                    <CounterContextPlusComp />
                </CounterContext.Provider>

                <CounterUseReducer></CounterUseReducer>

                <CounterContext.Provider value={[state, dispatch]}>
                    <CounterUseReducerGlobal></CounterUseReducerGlobal>
                </CounterContext.Provider>


            </div>
        </div>
    );
}

export default App;
