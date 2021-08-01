import React, {Component} from 'react';
import './App.css';
import {Navigation} from './Navigation';
import {Selector} from './Selector';
import {Footer} from './Footer'
import {BrowserRouter as Router} from 'react-router-dom';
import {Start} from './subpages-components/Start';
import {ApisMelifera} from './subpages-components/ApisMelifera';
import {Anatomy} from './subpages-components/Anatomy';
import {SocialStructure} from './subpages-components/SocialStructure';
import {LifeCycle} from './subpages-components/LifeCycle';
import {YearForBees} from './subpages-components/YearForBees';
import {Products} from './subpages-components/Products';
import {Quiz} from './subpages-components/Quiz';
import {Provider} from 'react-redux';
import dataStore from './store';


export default class App extends Component {
  render(){
    return(
      <Provider store = {dataStore}>
        <Router>
          <div className = 'page-container'>
            <div className = 'page-wrap'>
              <header>
                  <Navigation/>
              </header>
              <section>
                <Selector>
                  <Start />
                  <ApisMelifera />
                  <Anatomy />
                  <SocialStructure />
                  <LifeCycle />
                  <YearForBees />
                  <Products />
                  <Quiz />
                </Selector>           
              </section>
              <Footer />
            </div>
          </div>
        </Router>
      </Provider> 
    )
  } 
}