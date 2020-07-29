import React,{Component} from 'react';
import './App.css';
import ZekiList from './ZekiList';
import {connect} from "react-redux";
import ActionButton from "./ActionButton";

class App extends Component {
  render() {
    const { lists } = this.props;
    return (
    <div className="App">
      <h4>Hello Zeki</h4>
      <div className="listContainer">
        { lists.map(list => (
          <ZekiList listID={ list.id} key={list.id} title={list.title} cards={list.cards}/>
        ))}
         <ActionButton list/>
      </div>
    </div>
    );
  }
}

const mapStateToProps = state => ({
    lists: state.lists
});
export default connect(mapStateToProps) (App);
