import {applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import information from './information'
import bitcoinList from './bitcoin'
export default  applyMiddleware(thunk,information,bitcoinList)