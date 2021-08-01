import { createSelector } from 'reselect';

const selectSinger = state => state.singer;

export const selectChoosedSongs = createSelector(
    [selectSinger],
    singer => singer.choosedSongs
);
export const selectChoosedSongsCount = createSelector(
    [selectChoosedSongs],
    choosedSongs => choosedSongs.reduce(
        (accumalatedQuantity, song) => accumalatedQuantity + song.count  ,0)
);

export const selectChoosedSongsTotal = createSelector(
    [selectChoosedSongs],
    choosedSongs => choosedSongs.reduce(
        (accumalatedQuantity, song) => accumalatedQuantity + song.count * song.price  ,0)
);