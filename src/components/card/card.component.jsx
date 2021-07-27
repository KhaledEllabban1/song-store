import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import CardData from './card-data.component';
import { useState } from 'react';

const useStyles = makeStyles({
    root: {
      flexGrow: 1
    },
    pos: {
        marginBottom: 40,
    }
});

const SimpleCard = ({ data , selectedSingers }) => {
  const classes = useStyles();
  const [search, setSearch ] = useState('');
  const onSearchChange = event => setSearch(event.target.value);
  const filteredData = data.filter(data => data.name.toLowerCase().includes(search.toLowerCase()));
  const choosedSinger = selectedSingers;

  // const compareFun = (filteredData, choosedSinger) => {
  //   const checkedValue = filteredData.filter(element => choosedSinger.includes(element));
  //   console.log(checkedValue)
  // }
  console.log(selectedSingers);
  // compareFun();

  console.log(search);
  return (
    <>
        <form className={classes.root} noValidate autoComplete="off">      
            <TextField id="outlined-basic" className={classes.pos} label="search" variant="outlined" onChange={onSearchChange } />
        </form>
        <Grid container spacing={3} justifyContent="space-around">
            {
                filteredData.slice(0,3).map(singer =>
                  ( <CardData singer={singer} key={singer.id} /> ) )
            }
        </Grid>
    </>


  );
}
const mapStateToProps = state => ({
    data: state.singer.data,
    selectedSingers : state.singer.selectedSingers
});
export default connect(mapStateToProps)(SimpleCard);
