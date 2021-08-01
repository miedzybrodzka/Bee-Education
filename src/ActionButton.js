import React, {Component} from 'react';

export class ActionButton extends Component {

    render(){
        return(
            <button className={this.props.className} onClick={this.props.action} id={this.props.id} >{this.props.content} </button>
        )
    }
}