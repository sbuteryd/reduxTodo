import * as API  from 'goals-todos-api'

export const INIT_DATA = 'INIT_DATA'

function initDataAction(todos,goals) {
    return {
        type:INIT_DATA,
        todos,
        goals
    }
}

export default function handleInitAction() {
    return (dispatch)=>{
        return Promise.all([API.fetchTodos(),API.fetchGoals()]).then(([todos,goals])=>{
            dispatch(initDataAction(todos,goals))
        })
    }
}