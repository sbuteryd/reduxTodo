import React from 'react';
import {connect} from 'react-redux'
import {handleInitData} from '../action/share'

class App extends React.Component{
    componentDidMount() {
        const {dispatch} = this.props
        dispatch(handleInitData())
    }

    render() {
    return (
        <div>
          app
        </div>
    );
  }
}

export default connect()(App);
