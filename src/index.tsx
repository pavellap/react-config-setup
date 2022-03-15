import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <Fragment>
        <h1>rendered in index file</h1>
        <h2>sample </h2>
        <App/>
    </Fragment>,
    document.getElementById('root')
);
