import React,{Component} from 'react'
import {connect} from 'react-redux'
import Tweets from './Tweets'

class Dashboard extends Component{
    render() {
        const {authedUser,tweetIds} = this.props
        return (
            <div>
                {tweetIds && tweetIds.map((tweetId)=>(
                    <Tweets key={tweetId} tweetId={tweetId}/>
                ))}
            </div>
        );
    }
}


function mapStateToProps({tweets,users,authedUser},{id}) {
    const tweetKey = Object.keys(tweets)
    const tweetIds = tweetKey.sort((a,b)=>(tweets[b].timestamp -tweets[a].timestamp)
    )
    return {
        authedUser,
        tweetIds
    }
}

export default connect(mapStateToProps)(Dashboard)