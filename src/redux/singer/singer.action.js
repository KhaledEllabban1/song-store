import SingerActionTypes from "./singer.types";

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
})