import SingerActionTypes from './singer.types';
import data from './data';
import { add, checkedSinger, toggleFun } from '../utils';

const INITIAL_STATE = {
    data : data,
    selectedSingers : [],
    checkedArray : checkedSinger(data)
}

const singerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SingerActionTypes.ADD_SINGER : 
            return {
                ...state,
                selectedSingers: add(state.selectedSingers, action.payload)
            };
        case SingerActionTypes.REMOVE_SINGER:
            return {
                ...state,
                selectedSingers: state.selectedSingers.filter(
                    singer => singer.id !== action.payload.id
                )
            };
        case SingerActionTypes.TOGGLE:
            return{
                ...state,
                checkedArray: toggleFun(state.checkedArray, action.payload)
            }
        default:
            return state
    }
}

export default singerReducer;