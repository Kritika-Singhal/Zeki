import React from 'react';
import './App.css';
import List from './List';
import {connect} from "react-redux";

class App extends Component {
  render() {
    const { lists } = this.props;
    return (
    <div className="App">
      <p>Hello Zeki</p>
      <List title='TODO'/>
    </div>
    );
  }
}

const mapStateToProps = state => ({
    lists: state.lists
});
export default connect(mapStateToProps) (App);
