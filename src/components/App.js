import React,{Component} from 'react';
import Todos from "./Todos";
import Goals from "./Goals";
import {connect} from 'react-redux'
import handleInitAction from '../actions/share'

class App extends Component{
    componentDidMount() {
        this.props.dispatch(handleInitAction())
    }

    render() {
      const {dispatch,loading} = this.props
        if(loading === true){
            return  <h1>Loading</h1>
        }
        return (
            <div>
            <Todos dispatch={dispatch}/>
            <Goals dispatch={dispatch}/>
        </div>
    );
  }
}

function mapStateToProps(state,own) {
    return {
        loading:state.loading
    }
}

export default connect(mapStateToProps)(App);
