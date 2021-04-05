import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import { PHOTOS } from './utils/constants';
import { Carousel } from './components/components';

function App() {
    return <>
            <Carousel photos={PHOTOS} showDots={false}/>
           </>
}

ReactDOM.render(< App />, document.getElementById("root"));