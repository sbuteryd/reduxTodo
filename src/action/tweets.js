import {saveLikeToggle,saveTweet} from '../utils/api'
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export  const SAVE_LIKE = 'SAVE_LIKE'

export function receiveTweets (tweets){
    return {
        type:RECEIVE_TWEETS,
        tweets
    }
}


// function saveLike(info) {
//     return {
//         type:SAVE_LIKE,
//         info
//     }
// }
//
//
// export function handleSaveLike(info) {
//     console.log('info info',info)
//     return (dispatch)=> {
//         dispatch(saveLike(info))
//         return API.saveLikeToggle(info)
//     }
// }

function toggleTweet ({ id, authedUser, hasLiked }) {
    return {
        type: SAVE_LIKE,
        id,
        authedUser,
        hasLiked
    }
}

export function handleToggleTweet (info) {
    return (dispatch) => {
        dispatch(toggleTweet(info))

        return saveLikeToggle(info)
            .catch((e) => {
                console.warn('Error in handleToggleTweet: ', e)
                dispatch(toggleTweet(info))
                alert('The was an error liking the tweet. Try again.')
            })
    }
}