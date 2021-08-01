import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux';
import AlbumIcon from '@material-ui/icons/Album';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles({
    root: {
      minWidth: 250,
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
             <Grid item xs={12} sm={6} md={4} xl={3}>
                <Card className={classes.root}> 
                    <CardContent>
                        <Typography variant="h5" component={'span'}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                value = {album.name}
                                checked={checkedArrayOfAlbums[index]} 
                                onChange={handleChange(index,album)}
                                icon={<AlbumIcon />}
                                checkedIcon = {<AlbumIcon />}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                color="primary"
                            />
                              }
                              label = {album.name}
                            />
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary" component={'span'}>
                          songs number : {album.songs.length}
                          
                        </Typography>

                    </CardContent>

                </Card>
            </Grid>
)};


const mapStateToProps = state => ({
    checkedArrayOfAlbums : state.singer.checkedArrayOfAlbums
});


export default connect(mapStateToProps)(AlbumData); 