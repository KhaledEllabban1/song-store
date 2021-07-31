import Grid from '@material-ui/core/Grid';
import AlbumData from './album-data.componet';
import { useState } from 'react';
import { connect } from 'react-redux';
import { addAlbum, removeAlbum, toggleAlbum } from '../../redux/singer/singer.action';
import React from 'react';

const Album = ({addAlbum, removeAlbum,checkedArrayOfAlbums, toggleAlbum, selectedAlbums, choosedAlbums}) => {
  const [state, setState] = useState(checkedArrayOfAlbums);

  const handleChange = (index,album) => (event) => {
    toggleAlbum(index);
    setState(event.target.checked ? () => addAlbum(album) : () => removeAlbum(album));
  };

//   console.log("selectedSingers: ",selectedSingers);
//   console.log("checkedArrayOfAlbums: ",checkedArrayOfAlbums);
  console.log("selectedAlbums:", selectedAlbums);
  console.log("choosedAlbums:", choosedAlbums);
  
  return (
        <Grid container spacing={7} justifyContent="space-around">
            {
                selectedAlbums.map((album, index) => {
                  return(
                    <AlbumData key={album.id} album= {album} index = {index} handleChange = {handleChange } />
                  )  
                })
            }
        </Grid>
  );
}
const mapDispatchToProps = dispatch => ({
  addAlbum: singer => dispatch(addAlbum(singer)),
  removeAlbum: singer => dispatch(removeAlbum(singer)),
  toggleAlbum: (value) => dispatch(toggleAlbum(value))
});

const mapStateToProps = state => ({
    checkedArrayOfAlbums : state.singer.checkedArrayOfAlbums,
    selectedAlbums: state.singer.selectedAlbums,
    choosedAlbums: state.singer.choosedAlbums
});

export default connect(mapStateToProps,mapDispatchToProps)(Album);
