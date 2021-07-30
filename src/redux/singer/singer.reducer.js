import SingerActionTypes from './singer.types';
import data from './data';
import { add, remove, checkedSinger, toggleFun, selectedAlbum, selectedSongs } from '../utils';

const INITIAL_STATE = {
    data : data,
    selectedSingers : [],
    checkedArray : checkedSinger(data),
    selectedAlbums : [],
    checkedArrayOfAlbums : [],
    choosedAlbums : [],
    selectedSongs : [],
    checkedArrayOfSongs : [],
    choosedSongs : []
}

const singerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //                         Singer
        case SingerActionTypes.ADD_SINGER : 
            return {
                ...state,
                selectedSingers: add(state.selectedSingers, action.payload),
                selectedAlbums: selectedAlbum(add(state.selectedSingers, action.payload)),
                checkedArrayOfAlbums: selectedAlbum(add(state.selectedSingers, action.payload)).fill(false),
                choosedAlbums:[]
            };
        case SingerActionTypes.REMOVE_SINGER:
            return {
                ...state,
                selectedSingers: remove(state.selectedSingers, action.payload),
                selectedAlbums: selectedAlbum(remove(state.selectedSingers, action.payload)),
                checkedArrayOfAlbums: selectedAlbum(remove(state.selectedSingers, action.payload)).fill(false),
                choosedAlbums:[] // to reset when go back and edit
            };
        case SingerActionTypes.TOGGLE:
            return{
                ...state,
                checkedArray: toggleFun(state.checkedArray, action.payload),
            }
        //                        Album
        case SingerActionTypes.ADD_ALBUM : 
            return {
                ...state,
                choosedAlbums:add(state.choosedAlbums, action.payload),
                selectedSongs:selectedSongs(add(state.choosedAlbums, action.payload)),
                checkedArrayOfSongs: selectedSongs(add(state.choosedAlbums, action.payload)).fill(false),
                choosedSongs:[] // to reset when go back and edit
            };
        case SingerActionTypes.REMOVE_ALBUM:
            return {
                ...state,
                choosedAlbums:remove(state.choosedAlbums, action.payload),
                selectedSongs:selectedSongs(remove(state.choosedAlbums, action.payload)),
                checkedArrayOfSongs: selectedSongs(add(state.choosedAlbums, action.payload)).fill(false),
                choosedSongs:[]
            };
        case SingerActionTypes.TOGGLE_ALBUM:
            return{
                ...state,
                checkedArrayOfAlbums: toggleFun(state.checkedArrayOfAlbums, action.payload )
            }
        //                        Song
        case SingerActionTypes.ADD_SONG : 
            return {
                ...state,
                choosedSongs:add(state.choosedSongs, action.payload)
            }
        case SingerActionTypes.REMOVE_SONG :
            return {
                ...state,
                choosedSongs:remove(state.choosedSongs, action.payload)
            }
        case SingerActionTypes.TOGGLE_SONG :
            return {
                ...state,
                checkedArrayOfSongs: toggleFun(state.checkedArrayOfSongs, action.payload )
            } 
        default:
            return state
    }
}

export default singerReducer;