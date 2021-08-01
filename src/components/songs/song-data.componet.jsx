import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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

    return(
             <Grid item xs={12} sm={6} md={4} xl={3}>
                <Card className={classes.root}> 
                    <CardContent>
                        <Typography variant="h5" component={'span'}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                value = {song.songName}
                                checked={checkedArrayOfSongs[index]} 
                                onChange={handleChange(index,song)}
                                icon={<LibraryMusicIcon />}
                                checkedIcon = {<LibraryMusicIcon />}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                color="primary"
                              />
                              }
                              label = {song.songName}
                            />
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
)};

const mapStateToProps = state => ({
    checkedArrayOfSongs : state.singer.checkedArrayOfSongs
});


export default connect(mapStateToProps)(SongData); 