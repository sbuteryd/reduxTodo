import React from "react";
import { Input,Button } from 'antd';

const { TextArea } = Input;

class Demo extends React.Component {
    state = {
        value: '',
    };

    onChange = ({ target: { value } }) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;

        return (
            <div>
                <TextArea
                    value={value}
                    onChange={this.onChange}
                    placeholder="Controlled autosize"
                    autosize={{ minRows: 3, maxRows: 3 }}
                    maxLength={150}
                />
                <span style={{color:'red'}}>{150-this.state.value.length}</span>
                <Button  type='primary'style={{width:100,margin:'0 auto'}} >提交</Button>
                <div style={{marginTop:100}}>
                    
                </div>
            </div>
        );
    }
}
export default Demo