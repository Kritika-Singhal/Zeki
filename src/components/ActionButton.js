import React, {Component} from "react";
import Icon from '@material-ui/core/Icon';
import TextareaAutosize from 'react-textarea-autosize';
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import './ActionButton.css';
import {connect} from 'react-redux';
import {addList, addCard} from '../actions';

class ActionButton extends Component {

    state = {
        formOpen: false,
        text: ""
    }

    openForm = () => {
        this.setState ({
            formOpen: true 
        });
    };

    closeForm = () => {
        this.setState({
            formOpen: false
        });
    };

    handleChange = e => {
        this.setState ({
            text: e.target.value
        })
    }

    handleAddList = e => {
        const {dispatch} = this.props;
        const {text} = this.state;

        if (text) {
            this.setState ({
                text: ""
            })
            dispatch(addList(text))
        }

        return;
    }
    handleAddCard = e => {
        const {dispatch,listID} = this.props;
        const {text} = this.state;

        if (text) {
            this.setState ({
                text: ""
            })
            dispatch(addCard(listID,text))
        }

        return;
    }

    renderForm = () => {
        const {list} = this.props;

        const placeholder = list ? "Enter list title" : "Enter a title for card";
        const buttonTitle = list ? "Add List" : "Add Card";
        return (
            <div>
            <Card className="card">
                <TextareaAutosize className="textarea" placeholder={placeholder} autoFocus onBlur={this.closeForm} value={this.state.text} onChange={this.handleChange}/>
            </Card>
            <div className="formButtonGroup">
                <Button variant="contained" className="addBtn" onMouseDown={list? this.handleAddList : this.handleAddCard}>
                {buttonTitle}
                </Button>
                <Icon className="closeIcon">close</Icon>
            </div>
            </div>
        );
    };

    renderActionButton = () => {
        const {list} = this.props;
        const name = list ? "combine listClass" : "cardClass combine";
        const buttonText = list ? "Add another list" : "Add another card" ;

        return (
            <div className={name} onClick={this.openForm}>
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    };

    render() {
        return this.state.formOpen ? this.renderForm() : this.renderActionButton();
    };

};

export default connect() (ActionButton);