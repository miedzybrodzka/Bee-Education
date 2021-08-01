import React, {Component} from 'react';
import {ActionButton} from './ActionButton';
import menu from './images/menu.png';
import close from './images/close-button.png';
import {Link} from 'react-router-dom';


export class Navigation extends Component {


    constructor(props){
        super(props);
        this.state = {
            showOrHide: 'hide'
        }
    }

    showOrHideFunction = () => {
        this.setState({showOrHide: this.state.showOrHide === 'hide'? 'show' : 'hide'})
    }


    render(){
        return (
            <React.Fragment>
                <ul className = {`menu ${this.state.showOrHide}`}>
                    <li><ActionButton className='action-button' action = {this.showOrHideFunction} content = {<img className = 'img-fluid' src = {close} alt = ''/>}/></li>
                    <li><Link to ='/' onClick={this.showOrHideFunction}>Start</Link></li>
                    <li><Link to ='/pszczola-miodna' onClick = {this.showOrHideFunction}>Pszczoła miodna</Link></li>
                    <li><Link to = '/anatomia-pszczoly' onClick = {this.showOrHideFunction}> Anatomia pszczoły</Link></li>
                    <li><Link to = '/struktura-spoleczna' onClick = {this.showOrHideFunction}>Struktura społeczna</Link></li>
                    <li><Link to = '/cykl-zycia' onClick = {this.showOrHideFunction}>Cykl życia</Link></li>
                    <li><Link to = '/rok-rodziny-pszczelej' onClick = {this.showOrHideFunction}>Rok rodziny pszczelej</Link></li>
                    <li><Link to = '/produkty-pszczele' onClick = {this.showOrHideFunction}>Produkty pszczele</Link></li>
                    <li><Link to = '/quiz' onClick = {this.showOrHideFunction}>Quiz</Link></li>
                </ul>
            <ActionButton className = 'action-button menu-button' action = {this.showOrHideFunction} content = {<img className = 'img-fluid' src = {menu} alt = ''/>}/>
            </React.Fragment>
        )
    }

}