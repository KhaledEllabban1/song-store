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