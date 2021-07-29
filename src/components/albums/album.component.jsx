import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import AlbumData from './album-data.componet';
import { useState } from 'react';
import { connect } from 'react-redux';
import { addAlbum, removeAlbum, toggleAlbum } from '../../redux/singer/singer.action';
import React from 'react';

const useStyles = makeStyles({
    root: {
      flexGrow: 1
    },
    pos: {
        marginBottom: 40,
    }
});

const Album = ({selectedSingers,addAlbum, removeAlbum,checkedArrayOfAlbums, toggleAlbum, selectedAlbums, choosedAlbums}) => {
  const classes = useStyles();
  const [search, setSearch ] = useState('');
  const onSearchChange = event => setSearch(event.target.value);
  const filteredData = selectedSingers.filter(data => data.name.toLowerCase().includes(search.toLowerCase()));
  const [state, setState] = useState(checkedArrayOfAlbums);

  const handleChange = (index,album) => (event) => {
    toggleAlbum(index);
    setState(event.target.checked ? () => addAlbum(album) : () => removeAlbum(album));
  };

  console.log('search: ',search);
  console.log("selectedSingers: ",selectedSingers);
  console.log("selectedAlbums:", selectedAlbums)
  console.log("checkedArrayOfAlbums: ",checkedArrayOfAlbums);
  console.log("choosedAlbums:", choosedAlbums)
  return (
    <>
        <form className={classes.root} noValidate autoComplete="off">      
            <TextField id="outlined-basic" className={classes.pos} label="search" variant="outlined" onChange={onSearchChange } />
        </form>
        <Grid container spacing={7} justifyContent="space-around">
            {
                selectedAlbums.map((album, index) => {
                  return(
                    <AlbumData key={album.id} album= {album} index = {index} handleChange = {handleChange } />
                  )  
                })
            }
        </Grid>
    </>


  );
}
const mapDispatchToProps = dispatch => ({
  addAlbum: singer => dispatch(addAlbum(singer)),
  removeAlbum: singer => dispatch(removeAlbum(singer)),
  toggleAlbum: (value) => dispatch(toggleAlbum(value))
});

const mapStateToProps = state => ({
    selectedSingers : state.singer.selectedSingers,
    checkedArrayOfAlbums : state.singer.checkedArrayOfAlbums,
    selectedAlbums: state.singer.selectedAlbums,
    choosedAlbums: state.singer.choosedAlbums
});

export default connect(mapStateToProps,mapDispatchToProps)(Album);
