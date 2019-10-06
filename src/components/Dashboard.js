import React,{Component} from 'react'
import {connect} from 'react-redux'

class Dashboard extends Component{
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
            </div>
        );
    }
}


function mapStateToProps({tweets,users,authedUser},{id}) {

    const tweetKey = Object.keys(tweets)
    const tweetIds = tweetKey.sort((a,b)=>(tweets[b].timestamp,-tweets[a].timestamp)
    )
    return {
        tweetIds
    }
}

export default connect(mapStateToProps)(Dashboard)