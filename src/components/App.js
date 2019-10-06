import React from 'react';
import {connect} from 'react-redux'
import {handleInitData} from '../action/share'
import Dashboard from './Dashboard'

class App extends React.Component{
    componentDidMount() {
        const {dispatch} = this.props
        dispatch(handleInitData())
    }
    render() {
    return (
        <div>
            <Dashboard/>
        </div>
    );
  }
}

export default connect()(App);
