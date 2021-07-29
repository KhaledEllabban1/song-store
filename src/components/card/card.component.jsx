import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import CardData from './card-data.component';
import { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
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

const SimpleCard = ({ data , selectedSingers,addSinger, removeSinger,checkedArray, toggle }) => {
  const classes = useStyles();
  const [search, setSearch ] = useState('');
  const onSearchChange = event => setSearch(event.target.value);
  const filteredData = data.filter(data => data.name.toLowerCase().includes(search.toLowerCase()));
  const [state, setState] = useState(checkedArray);

  const handleChangeOptions = (index,singer) => (event) => {
    setState(event.target.checked ? () => addSinger(singer) : () => removeSinger(singer) );
    // setState(state.map((item,indx) => 
    //   index === indx ? !item : item 
    // ));
    // need to add the state in checked={state[index]} in checkbox
    toggle(index);
  };

  console.log(search);
  // console.log( "state", state);
  console.log("selectedSingers",selectedSingers);
  console.log("checkedArray",checkedArray);
  return (
    <>
        <form className={classes.root} noValidate autoComplete="off">      
            <TextField id="outlined-basic" className={classes.pos} label="search" variant="outlined" onChange={onSearchChange } />
        </form>
        <Grid container spacing={3} justifyContent="space-around">
            {
                filteredData.slice(0,10).map((singer, index) => {
                  return(
                    <div key={singer.id}> 
                            <Grid item xs={12}>
                                <Card className={classes.root}>
                                    <CardContent>
                                        <Typography variant="h5" component="h2">
                                            <Checkbox
                                                id={index}
                                                value = {singer.name}
                                                checked={checkedArray[index]} 
                                                onChange={handleChangeOptions(index,singer)}
                                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                            />
                                            {singer.name}
                                            
                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">
                                          Albums number : {singer.albums.length}
                                        </Typography>
                                      

                                        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" >
                                            <Button onClick={() => addSinger(singer)}>Add</Button>
                                            <Button onClick={() => removeSinger(singer)}>Remove</Button>
                                        </ButtonGroup>

                                        
                                    </CardContent>
                                    <CardActions>
                                        {index}
                                    </CardActions>
                                </Card>
                            </Grid>
                    </div>
                    
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

export default connect(mapStateToProps,mapDispatchToProps)(SimpleCard);
