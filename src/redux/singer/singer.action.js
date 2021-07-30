import SingerActionTypes from "./singer.types";
// SINGER ACTIONS
export const addSinger = singer => ({
    type:SingerActionTypes.ADD_SINGER,
    payload: singer
});

export const removeSinger = singer => ({
    type:SingerActionTypes.REMOVE_SINGER,
    payload: singer
});

export const toggle = index => ({
    type:SingerActionTypes.TOGGLE,
    payload: index
})
// ALBUM ACTIONS
export const addAlbum = album => ({
    type:SingerActionTypes.ADD_ALBUM,
    payload: album
});

export const removeAlbum = album => ({
    type:SingerActionTypes.REMOVE_ALBUM,
    payload: album
});

export const toggleAlbum = index => ({
    type:SingerActionTypes.TOGGLE_ALBUM,
    payload: index
});
// SONGS ACTIONS
export const addSong = song => ({
    type:SingerActionTypes.ADD_SONG,
    payload: song
});

export const removeSong = song => ({
    type:SingerActionTypes.REMOVE_SONG,
    payload: song
});

export const toggleSong = index => ({
    type:SingerActionTypes.TOGGLE_SONG,
    payload: index
});