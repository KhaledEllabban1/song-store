import React from 'react';
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

const AlbumData = ({album,index, checkedArrayOfAlbums, handleChange}) => {
    const classes = useStyles();
    return(
            <Grid item xs={3}>
                <Card className={classes.root}> 
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            <Checkbox
                                value = {album.name}
                                checked={checkedArrayOfAlbums[index]} 
                                onChange={handleChange(index,album)}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                            {album.name}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                          songs number : {album.songs.length}
                          
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
    checkedArrayOfAlbums : state.singer.checkedArrayOfAlbums
});


export default connect(mapStateToProps)(AlbumData); 