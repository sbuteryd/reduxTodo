import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import {formatTweet,formatDate} from '../utils/helpers'
import { Comment, Icon, Tooltip, Avatar,Card} from 'antd';
import {handleToggleTweet} from '../action/tweets'
import moment from 'moment';

class Tweets extends Component{
    like =(e)=>{
        e.preventDefault()
        const { dispatch, tweet, authedUser } = this.props
        dispatch(handleToggleTweet({
            id: tweet.id,
            hasLiked: tweet.hasLiked,
            authedUser
        }))
    }

    render() {
        const {tweet,authedUser} = this.props
        const actions = [
            <span key="comment-basic-like">
                <Tooltip title="Like">
                    <Icon
                        onClick={(e)=>this.like(e)}
                        type="like"
                        theme={tweet.hasLiked ? 'filled' : 'outlined'}
                    />
                </Tooltip>
                <span style={{ paddingLeft: 8, cursor: 'auto' }}>{tweet.likes ? tweet.likes:0}</span>
            </span>,

            <span key=' key="comment-basic-replyto"'>
                <Tooltip title="replyto">
                    <Icon type="edit" />
                </Tooltip>
                <span style={{ paddingLeft: 8, cursor: 'auto' }}>{tweet.replies}</span>
            </span>,
            <span key="comment-basic-reply-to">Reply to</span>,
        ];
        return (
            <Fragment>
                <Card  hoverable style={{marginTop:20}}>
                    <Comment
                        actions={actions}
                        author={<a>{tweet.name}</a>}
                        avatar={
                            <Avatar
                                src={tweet.avatar}
                                alt="Han Solo"
                            />
                        }


                      content={
                          <div>
                              <p>{tweet.parent&&`@${tweet.parent.author}`}</p>
                              <p>{tweet.text}</p>
                          </div>
                      }

                        datetime={
                            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                {tweet.timestamp !==null ? <span>{formatDate(tweet.timestamp)}</span>:<span>{moment().fromNow()}</span>
                                }
                            </Tooltip>
                        }
                    />
                </Card>
            </Fragment>
        );
    }
}


function mapStateToProps({tweets,users,authedUser},{tweetId}) {
    let tweet = tweets[tweetId]
    const parentTweet = tweets[tweet.replyingTo]
    return {
        authedUser,
        tweet:formatTweet(tweet,users[tweet.author],authedUser,parentTweet)
    }
}

export default connect(mapStateToProps)(Tweets)