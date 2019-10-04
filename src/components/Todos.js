import React,{Component} from 'react'
import  List from './List'
import {connect}  from 'react-redux'
import {
    handleTodoAction,
    handleToggleAction,
    handleRemoveTodoAction
} from '../actions/todos'

class Todos extends Component{
    addItem = ()=>{
        const {dispatch} = this.props
        const name = this.input.value
        dispatch(handleTodoAction(name,()=>this.input.value=' '))
    }
    removeItem =(todo)=>{
        const {dispatch} = this.props
        dispatch(handleRemoveTodoAction(todo))
    }
    toggleItem = (id)=>{
        const {dispatch}= this.props
        dispatch(handleToggleAction(id))
    }
    render() {
        return (
            <div>
                <h1>Todos</h1>
                <input type="text"
                       placeholder='todos'
                       ref={(input)=>this.input=input}
                />
                <button onClick={this.addItem}>button</button>
                <List
                    items={this.props.todos}
                    removeItem={this.removeItem}
                    toggleItem={this.toggleItem}
                />
            </div>
        );
    }
}

function mapStateToProps(state,ownprops) {
    return {
        todos:state.todos
    }
}

export default connect(mapStateToProps)(Todos)