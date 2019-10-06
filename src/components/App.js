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
            {this.props.authedUser !==null ?   <Dashboard/>:null}
        </div>
    );
  }
}

function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(App);
