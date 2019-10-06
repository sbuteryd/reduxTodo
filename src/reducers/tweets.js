import {RECEIVE_TWEETS,SAVE_LIKE} from '../action/tweets'


export default function tweets(state={},action) {
    switch (action.type) {
        case RECEIVE_TWEETS:
            return  action.tweets
        case SAVE_LIKE:
            console.log('SAVE_LIKE',action.id)
            return  {
                ...state,
                [action.id]:{
                    ...state[action.id],
                    likes:action.hasLiked === true  ?
                        state[action.id].likes.filter((name)=> name !== action.authedUser)
                        :state[action.id].likes.concat(action.authedUser)
                }
            }
        default:
            return state

    }
}
