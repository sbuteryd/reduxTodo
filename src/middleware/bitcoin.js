import {ADD_TODO} from '../actions/todos'
import {ADD_GOAL} from "../actions/goals";

const bitcoinList = (store)=>(next)=>(action)=>{

    if(action.type === ADD_TODO
        && action.todo.name.toLocaleLowerCase().includes('bitcoin'))
    {
        return alert("that is bad ideal")
    }
    if(action.type === ADD_GOAL && action.goal.name.toLocaleLowerCase().includes('bitcoin')) {
        return  alert("that is bad ideal")
    }
    return next(action)
}

export default bitcoinList

