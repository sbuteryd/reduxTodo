import React from "react";
import { Input,Button } from 'antd';

const { TextArea } = Input;

class Demo extends React.Component {
    state = {
        text: '',
    };

    onChange =(e)=>{
        const text = e.target.value
        this.setState((preState)=>({
            text
        }))
    }
    handleSubmit =(e)=>{
        e.preventDefault()
        const {text} = this.state

        this.setState(()=>({
            text: ''
        }))
    }

    render() {
        const { text } = this.state;
        const tweetLeft = 200 - text.length
        return (
            <div>
                <h3>Compose new Tweet</h3>
                <form onSubmit={this.handleSubmit}>
                    <TextArea
                        value={this.state.text}
                        onChange={this.onChange}
                        placeholder="Controlled autosize"
                        autosize={{ minRows: 3, maxRows: 3 }}
                        maxLength={200}
                        name='common'
                    />
                  {tweetLeft<= 100 &&(
                      <span style={{color:'red'}}>
                          {tweetLeft}
                      </span>
                  )}
                    <button disabled={text === ""}    type='primary' style={{width:100,margin:'0 auto',color:text === '' ? '#17151545':"gray"}} >Submit</button>
                    <div style={{marginTop:100}}>

                    </div>
                </form>
            </div>
        );
    }
}
export default Demo