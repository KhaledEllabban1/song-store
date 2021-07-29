import { createSelector } from 'reselect';

const selectSinger = state => state.singer;

export const selectSingers = createSelector(
    [selectSinger],
    singer => singer.selectSingers
);

// export const selectSingerAlbums = createSelector(
//     [selectSingers],
//      selectSingers => selectedSingers
// );