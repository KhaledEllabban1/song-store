import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import CardData from './singer-data.component';
import { useState } from 'react';
import { connect } from 'react-redux';
import { addSinger, removeSinger, toggle } from '../../redux/singer/singer.action';
import React from 'react';

const useStyles = makeStyles({
    root: {
      flexGrow: 1
    },
    pos: {
        marginBottom: 40,
    }
});

const Singer = ({ data , selectedSingers,addSinger, removeSinger,checkedArray, toggle }) => {
  const classes = useStyles();
  const [search, setSearch ] = useState('');
  const onSearchChange = event => setSearch(event.target.value);
  const filteredData = data.filter(data => data.name.toLowerCase().includes(search.toLowerCase()));
  const [state, setState] = useState(checkedArray);

  const handleChange = (index,singer) => (event) => {
    toggle(index);
    setState(event.target.checked ? () => addSinger(singer) : () => removeSinger(singer));
  };

  // console.log('search: ',search);
  // console.log("selectedSingers: ",selectedSingers);
  // console.log("checkedArray: ",checkedArray);
  return (
    <>
        <form className={classes.root} noValidate autoComplete="off">      
            <TextField id="outlined-basic" className={classes.pos} label="search" variant="outlined" onChange={onSearchChange } />
        </form>
        <Grid container spacing={7} justifyContent="space-around">
            {
                filteredData.slice(0,10).map((singer, index) => {
                  return(
                    <CardData key={singer.id} singer= {singer} index = {index} handleChange = {handleChange } />
                  )  
                })
                  
            }
        </Grid>
    </>


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
