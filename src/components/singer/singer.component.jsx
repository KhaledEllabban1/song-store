import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CardData from './singer-data.component';
import { useState } from 'react';
import { connect } from 'react-redux';
import { addSinger, removeSinger, toggle } from '../../redux/singer/singer.action';
import React from 'react';

const Singer = ({ data,addSinger, removeSinger,checkedArray, toggle }) => {
  const [state, setState] = useState(checkedArray);

  const handleChange = (index,singer) => (event) => {
    toggle(index);
    setState(event.target.checked ? () => addSinger(singer) : () => removeSinger(singer));
  };

  // console.log('search: ',search);
  // console.log("selectedSingers: ",selectedSingers);
  // console.log("checkedArray: ",checkedArray);
  return (
        <Grid container spacing={7} justifyContent="space-around">
            {
                data.slice(0,9).map((singer, index) => {
                  return(
                    <CardData key={singer.id} singer= {singer} index = {index} handleChange = {handleChange } />
                  )  
                })
                  
            }
        </Grid>
  );
}
const mapDispatchToProps = dispatch => ({
  addSinger: singer => dispatch(addSinger(singer)),
  removeSinger: singer => dispatch(removeSinger(singer)),
  toggle: (value) => dispatch(toggle(value))
});

const mapStateToProps = state => ({
    data: state.singer.data,
    selectedSingers : state.singer.selectedSingers,
    checkedArray : state.singer.checkedArray
});

export default connect(mapStateToProps,mapDispatchToProps)(Singer);
