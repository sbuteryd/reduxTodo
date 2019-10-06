import React,{Component} from 'react'
import {connect} from 'react-redux'
import {formatTweet} from '../utils/helpers'

class Tweets extends Component{
    render() {
        return (
            <div>
                <h1>Tweets</h1>
            </div>
        );
    }
}

function mapStateToProps({tweets,users,authedUser},{tweetId}) {
    let tweet = tweets[tweetId]
    const parentTweet = tweet.replyingTo   === null  ? null:tweet.replyingTo

     console.log(users[tweet.author])
    return {
        authedUser,
        // tweetList:formatTweet(tweet,users[tweet.author],authedUser,parentTweet)
    }
}

export default connect(mapStateToProps)(Tweets)