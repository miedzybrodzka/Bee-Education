import { UPDATE, CHECK } from './actionType';
import {ANSWERS, RED} from './dataTypes';

export const saveAnswer = (ev) => {
    return {
        type: UPDATE,
        dataType: ANSWERS,
        payload: {name: ev.target.name, answer: ev.target.value}
    }

}

export const checkWrongAnswer = (answer) => {
    return {
        type: CHECK,
        dataType: RED,
        payload: {answer: answer, color: 'red'}
    }
}