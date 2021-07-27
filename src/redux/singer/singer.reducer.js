import SingerActionTypes from './singer.types';
import data from './data';
import { add } from '../utils';

const INITIAL_STATE = {
    data : data,
    selectedSingers : [],
    checked : false
}

const singerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SingerActionTypes.ADD_SINGER : 
            return {
                ...state,
                selectedSingers: add(state.selectedSingers, action.payload),
                checked: !state.checked
            };
        case SingerActionTypes.REMOVE_SINGER:
            return {
                ...state,
                selectedSingers: state.selectedSingers.filter(
                    singer => singer.id !== action.payload.id
                ),
                checked: !state.checked
            };
        // case SingerActionTypes.TOGGLE:
        //     return{
        //         ...state,
                
        //     }
        default:
            return state
    }
}

export default singerReducer;