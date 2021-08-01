import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux';
import { userData } from '../../redux/user/user.action';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      flexGrow: 1
    },
    bullet: {
      display: 'inline-block',
      margin: '5px 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const SongData = ({song,index, checkedArrayOfSongs, handleChange}) => {
    const classes = useStyles();
    useEffect(() => {
      userData({})
    });
    return(
            <Grid item xs={3}>
                <Card className={classes.root}> 
                    <CardContent>
                        <Typography variant="h5" component="h2">
                             <Checkbox
                              value = {song.songName}
                              checked={checkedArrayOfSongs[index]} 
                              onChange={handleChange(index,song)}
                              inputProps={{ 'aria-label': 'primary checkbox' }}
                              />
                            {song.songName}
                        </Typography>
                       
                        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" >
                            <Button>Add</Button>
                            <Button>Remove</Button>
                        </ButtonGroup>

                        
                    </CardContent>
                    <CardActions>
                        {index}
                    </CardActions>
                </Card>
            </Grid>
)};


const mapStateToProps = state => ({
    checkedArrayOfSongs : state.singer.checkedArrayOfSongs
});

const mapDispatchToProps = dispatch => ({
    userData : ({}) => dispatch(userData({}))
})

export default connect(mapStateToProps, mapDispatchToProps)(SongData); 