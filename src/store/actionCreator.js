import { UPDATE, CHECK, CLEAR, CLEAN } from './actionType';
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

export const clearAnswers = (name) => {
    return {
        type: CLEAR,
        dataType: ANSWERS,
        payload: {name: name, answer:''}
    }
}

export const cleanRed = (answer) => {
    return {
        type: CLEAN,
        dataType: RED,
        payload: {answer: answer, color:''}
    }
}