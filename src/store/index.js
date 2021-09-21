import {createStore} from 'redux';
import reducer from './reducer';

export default createStore(reducer);

export {saveAnswer, checkWrongAnswer, clearAnswers, cleanRed} from './actionCreator';