import SingerActionTypes from './singer.types';
import data from './data';
import { add, remove, checkedSinger, toggleFun, selectedAlbum } from '../utils';

const INITIAL_STATE = {
    data : data,
    selectedSingers : [],
    checkedArray : checkedSinger(data),
    selectedAlbums : [],
    checkedArrayOfAlbums : [],
    choosedAlbums : [] 
}

const singerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SingerActionTypes.ADD_SINGER : 
            return {
                ...state,
                selectedSingers: add(state.selectedSingers, action.payload),
                selectedAlbums: selectedAlbum(add(state.selectedSingers, action.payload)),
                checkedArrayOfAlbums: selectedAlbum(add(state.selectedSingers, action.payload)).fill(false)
            };
        case SingerActionTypes.REMOVE_SINGER:
            return {
                ...state,
                selectedSingers: remove(state.selectedSingers, action.payload),
                selectedAlbums: selectedAlbum(remove(state.selectedSingers, action.payload)),
                checkedArrayOfAlbums: selectedAlbum(remove(state.selectedSingers, action.payload)).fill(false)
            };
        case SingerActionTypes.TOGGLE:
            return{
                ...state,
                checkedArray: toggleFun(state.checkedArray, action.payload),
            }
            case SingerActionTypes.ADD_ALBUM : 
            return {
                ...state,
                choosedAlbums:add(state.choosedAlbums, action.payload)
            };
        case SingerActionTypes.REMOVE_ALBUM:
            return {
                ...state,
                choosedAlbums:remove(state.choosedAlbums, action.payload)
            };
        case SingerActionTypes.TOGGLE_ALBUM:
            return{
                ...state,
                checkedArrayOfAlbums: toggleFun(state.checkedArrayOfAlbums, action.payload )
            }
        default:
            return state
    }
}

export default singerReducer;