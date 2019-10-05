import {
    ADD_GOAL,
    REMOVE_GOAL
}from '../actions/goals'
import {INIT_DATA} from "../actions/share";



export default function goals(state=[],action) {
    switch (action.type) {
        case ADD_GOAL:
            return state.concat([action.goal])
        case REMOVE_GOAL:
            return  state.filter((goal)=>goal.id !== action.id)
        case INIT_DATA:
            return  action.goals
        default:
            return  state
    }
}