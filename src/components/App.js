import React,{Component} from 'react';
import './App.css';
import ZekiList from './ZekiList';
import {connect} from "react-redux";

class App extends Component {
  render() {
    const { lists } = this.props;
    return (
    <div className="App">
      <h4>Hello Zeki</h4>
      <div className="listContainer">
        { lists.map(list => (
          <ZekiList title={list.title} cards={list.cards}/>
        ))}
      </div>
      
    </div>
    );
  }
}

const mapStateToProps = state => ({
    lists: state.lists
});
export default connect(mapStateToProps) (App);
