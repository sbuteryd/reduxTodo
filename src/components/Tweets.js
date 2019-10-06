import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import {formatTweet,formatDate} from '../utils/helpers'
import { Comment, Icon, Tooltip, Avatar,Card} from 'antd';
import moment from 'moment';

class Tweets extends Component{
    state = {
        likes: 0,
        dislikes: 0,
        action: null,
    };

    like = () => {
        this.setState({
            likes: 1,
            dislikes: 0,
            action: 'liked',
        });
    };

    dislike = () => {
        this.setState({
            likes: 0,
            dislikes: 1,
            action: 'disliked',
        });
    };
    render() {
        const {tweet,authedUser} = this.props
        console.log(tweet)
        const { likes, dislikes, action } = this.state;

        const actions = [
            <span key="comment-basic-like">
                <Tooltip title="Like">
                    <Icon
              type="like"
              theme={action === 'liked' ? 'filled' : 'outlined'}
              onClick={this.like}
                    />
                </Tooltip>
                <span style={{ paddingLeft: 8, cursor: 'auto' }}>{tweet.likes ? tweet.likes:likes}</span>
            </span>,
            <span key=' key="comment-basic-dislike"'>
                <Tooltip title="Dislike">
                    <Icon
                        type="dislike"
                        theme={action === 'disliked' ? 'filled' : 'outlined'}
                        onClick={this.dislike}
                    />
                </Tooltip>
                <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
            </span>,
            <span key="comment-basic-reply-to">Reply to</span>,
        ];
        return (
            <Fragment>
                <Card  hoverable style={{width:800,marginTop:20}}>
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