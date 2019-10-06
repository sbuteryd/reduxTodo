import {applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import  information from './information'

export default applyMiddleware(thunk,information)