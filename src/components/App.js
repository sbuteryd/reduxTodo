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
      const {dispatch} = this.props
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

    }
}

export default connect(mapStateToProps)(App);
