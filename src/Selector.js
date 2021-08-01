import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Start } from './subpages-components/Start';
import {ApisMelifera} from './subpages-components/ApisMelifera';
import {Anatomy} from './subpages-components/Anatomy';
import {SocialStructure} from './subpages-components/SocialStructure';
import {LifeCycle} from './subpages-components/LifeCycle';
import {YearForBees} from './subpages-components/YearForBees';
import {Products} from './subpages-components/Products';
import {Quiz} from './subpages-components/Quiz';



export class Selector extends Component {
    render(){
        return( 
            <Switch>
                <Route path = '/pszczola-miodna' component = {ApisMelifera}/>
                <Route path = '/anatomia-pszczoly' component = {Anatomy}/>
                <Route path = '/struktura-spoleczna' component = {SocialStructure}/>
                <Route path = '/cykl-zycia' component = {LifeCycle}/>
                <Route path = '/rok-rodziny-pszczelej' component = {YearForBees}/>
                <Route path = '/produkty-pszczele' component = {Products}/>
                <Route path = '/quiz' component = {Quiz}/>
                <Route path = '/' component = {Start}/>
            </Switch>         
        )  
    }
}