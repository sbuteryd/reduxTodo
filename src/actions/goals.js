import * as API from 'goals-todos-api'
export const ADD_GOAL = 'ADD_GOAL'
export const REMOVE_GOAL ='REMOVE_GOAL'


function addGoalAction(goal){
    return {
        type:ADD_GOAL,
        goal
    }
}

function removeGoalAction(id){
    return {
        type:REMOVE_GOAL,
        id
    }
}

export function handleAddGoalAction(name,cb) {
    return (dispatch)=>{
        return API.saveGoal(name).then((goal)=>{
            dispatch(addGoalAction(goal))
            cb()
        }).catch(()=>{
            alert("some thing wrong")
        })
    }
}

export function handleGoalRemove(goal) {
    return (dispatch)=>{
        dispatch(removeGoalAction(goal.id))
        return API.deleteGoal(goal.id).catch(()=>{
            dispatch(addGoalAction(goal))
        })
    }
}