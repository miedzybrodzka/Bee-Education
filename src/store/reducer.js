import {ANSWERS, RED} from './dataTypes';
import {UPDATE, CHECK} from './actionType';
import { initialData } from './initialData';

export default function (storeData, action) {
 
    switch(action.type) {
     case UPDATE: 
        return {
            ...storeData,
            [ANSWERS]: storeData[ANSWERS].map(elem => elem.name === action.payload.name? action.payload : elem)
        }
    case CHECK:
        return {
            ...storeData,
            [RED]: storeData[RED].map(elem =>elem.answer === action.payload.answer? action.payload : elem)


        }
    
    default:
        return storeData || initialData;
    }

        
}