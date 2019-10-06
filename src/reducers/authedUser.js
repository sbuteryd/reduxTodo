import {AUTHED_USER} from '../action/authedUser'


export default function authedUser(state={},action) {
    switch (action.type) {
        case AUTHED_USER:
            return action.user
        default:
            return state
    }
}