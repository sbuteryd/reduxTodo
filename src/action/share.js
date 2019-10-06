import {receiveTweets} from './tweets'
import {receiveUsers} from './users'
import {authedUser} from './authedUser'
import * as API from '../utils/api'

export const RECEIVE_INITDATA = 'RECEIVE_INITDATA'


const AUTHED_USERS = 'tylermcginnis'

export function handleInitData(){
    return (dispatch)=>{
        return API.getInitialData().then(({tweets,users})=>{
            dispatch(receiveUsers(users))
            dispatch(receiveTweets(tweets))
            dispatch(authedUser(AUTHED_USERS))
        })

    }
}

