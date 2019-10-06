import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import  reducers from '../src/reducers'
import middleware from '../src/middleware'
import 'antd/dist/antd.css'





const store =createStore(reducers,middleware)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

