import Grid from '@material-ui/core/Grid';
import SongData from './song-data.componet';
import { useState } from 'react';
import { connect } from 'react-redux';
import { addSong, removeSong, toggleSong } from '../../redux/singer/singer.action';
import React from 'react';

const Song = ({addSong, removeSong,checkedArrayOfSongs, toggleSong, choosedAlbums,selectedSongs}) => {
  const [state, setState] = useState(checkedArrayOfSongs);

  const handleChange = (index,song) => (event) => {
    toggleSong(index);
    setState(event.target.checked ? () => addSong(song) : () => removeSong(song));
  };

  // console.log('search: ',search);
  // console.log("selectedSingers: ",selectedSingers);
  // console.log("checkedArrayOfSongs: ",checkedArrayOfSongs);
  // console.log("selectedAlbums:", selectedAlbums);
  // console.log("choosedAlbums:", choosedAlbums);
  // console.log("selectedSongs:", selectedSongs)
  // console.log("choosedSongs:", choosedSongs)
  return (

        <Grid container spacing={7} justifyContent="space-around">
            {
              choosedAlbums.map(album => (<p> {album.name} </p>))
            }
            {
                selectedSongs.map((song, index) => {
                  return(
                    <SongData  key={song.id} song= {song} index = {index} handleChange = {handleChange } />
                  )  
                })
            }
        </Grid>
  );
}
const mapDispatchToProps = dispatch => ({
  addSong: singer => dispatch(addSong(singer)),
  removeSong: singer => dispatch(removeSong(singer)),
  toggleSong: (value) => dispatch(toggleSong(value))
});

const mapStateToProps = state => ({
    selectedSingers : state.singer.selectedSingers,
    checkedArrayOfSongs : state.singer.checkedArrayOfSongs,
    choosedAlbums: state.singer.choosedAlbums,
    selectedSongs : state.singer.selectedSongs,
});

export default connect(mapStateToProps,mapDispatchToProps)(Song);
