import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import SongData from './song-data.componet';
import { useState } from 'react';
import { connect } from 'react-redux';
import { addSong, removeSong, toggleSong } from '../../redux/singer/singer.action';
import React from 'react';

const useStyles = makeStyles({
    root: {
      flexGrow: 1
    },
    pos: {
        marginBottom: 40,
    }
});

const Song = ({selectedSingers,addSong, removeSong,checkedArrayOfSongs, toggleSong, selectedAlbums, choosedAlbums, choosedSongs,selectedSongs}) => {
  const classes = useStyles();
  const [search, setSearch ] = useState('');
  const onSearchChange = event => setSearch(event.target.value);
  const filteredData = selectedAlbums.filter(data => data.name.toLowerCase().includes(search.toLowerCase()));
  const [state, setState] = useState(checkedArrayOfSongs);

  const handleChange = (index,song) => (event) => {
    toggleSong(index);
    setState(event.target.checked ? () => addSong(song) : () => removeSong(song));
  };

//   console.log('search: ',search);
//   console.log("selectedSingers: ",selectedSingers);
  console.log("checkedArrayOfSongs: ",checkedArrayOfSongs);
  console.log("selectedAlbums:", selectedAlbums);
  console.log("choosedAlbums:", choosedAlbums);
  console.log("selectedSongs:", selectedSongs)
  console.log("choosedSongs:", choosedSongs)
  return (
    <>
        <form className={classes.root} noValidate autoComplete="off">      
            <TextField id="outlined-basic" className={classes.pos} label="search" variant="outlined" onChange={onSearchChange } />
        </form>
        <Grid container spacing={7} justifyContent="space-around">
            {
              choosedAlbums.map(album => (<p> {album.name} </p>))
            }
            {
                selectedSongs.map((song, index) => {
                  return(
                    <SongData  key={Math.floor(Math.random() * 1000000)} song= {song} index = {index} handleChange = {handleChange } />
                  )  
                })
            }
        </Grid>
    </>


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
    selectedAlbums: state.singer.selectedAlbums,
    choosedAlbums: state.singer.choosedAlbums,
    selectedSongs : state.singer.selectedSongs,
    choosedSongs : state.singer.choosedSongs
});

export default connect(mapStateToProps,mapDispatchToProps)(Song);
