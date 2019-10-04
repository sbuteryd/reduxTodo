import React,{Component} from 'react'
import List from './List'
import {handleAddGoalAction,handleGoalRemove} from '../actions/goals'
import {connect} from 'react-redux'

class Goals extends Component{
    addItem = (goal)=>{
        const {dispatch}= this.props
        const name = this.input.value
        dispatch(handleAddGoalAction(name,()=>this.input.value=' '))
    }
    removeItem=(id)=>{
        const {dispatch}=this.props
        dispatch(handleGoalRemove(id))

    }
    render() {
        return (
            <div>
                <h1>Goals</h1>
                <input
                    type="text"
                    placeholder='Goals'
                    ref={(input)=>this.input=input}
                />
                <button onClick={this.addItem}>button</button>
                <List
                    items={this.props.goals}
                    removeItem={this.removeItem}
                />
            </div>
        );
    }
}

function mapStateToProps(state,own) {
    return {
        goals:state.goals
    }
}

export default   connect(mapStateToProps)(Goals)