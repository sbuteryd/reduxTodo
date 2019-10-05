import {INIT_DATA} from '../actions/share'
function loading(state=true,action) {
    switch (action.type) {
        case INIT_DATA:
            return !state
        default:
            return  state
    }
}


export default loading