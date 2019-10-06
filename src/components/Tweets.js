import React,{Component} from 'react'
import {connect} from 'react-redux'
import {formatTweet} from '../utils/helpers'

class Tweets extends Component{
    render() {
        console.log(this.props.tweetList)
        return (
            <div>

            </div>
        );
    }
}

function mapStateToProps({tweets,users,authedUser},{tweetId}) {
    let tweet = tweets[tweetId]
    const parentTweet = tweet.replyingTo   === null  ? null:tweet.replyingTo
    return {
        authedUser,
        tweetList:formatTweet(tweet,users[tweet.author],authedUser,parentTweet)
    }
}

export default connect(mapStateToProps)(Tweets)