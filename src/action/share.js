import * as API from '../utils/api'

const RECEIVE_INITDATA = 'RECEIVE_INITDATA'


function receiveInitData(){
    return (dispatch)=>{
        return API.getInitialData().then(([users,tweets])=>{
            console.log(users,tweets)
        })
    }
}