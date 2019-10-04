import React,{Component} from 'react';
import Todos from "./Todos";
import Goals from "./Goals";
import {connect} from 'react-redux'

class App extends Component{
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
