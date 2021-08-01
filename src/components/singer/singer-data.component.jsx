import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles({
    root: {
      minWidth: 220,
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

const CardData = ({singer,index, checkedArray, handleChange}) => {
    const classes = useStyles();
    return(
            <Grid item xs={12} sm={6} md={4} xl={3}>
                <Card className={classes.root}> 
                    <CardContent>
                        <Typography variant="h5" component={'span'}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                value = {singer.name}
                                checked={checkedArray[index]} 
                                onChange={handleChange(index,singer)}
                                icon={<PersonAddIcon />}
                                checkedIcon = {<PersonAddIcon />}
                                color="primary"
                                />
                              }
                              label = {singer.name}
                            />
                        </Typography>
                        
                        <Typography className={classes.pos} color="textSecondary" component={'span'}>
                          Albums number : {singer.albums.length}
                        </Typography>

                    </CardContent>
                    
                </Card>
            </Grid>
)};


const mapStateToProps = state => ({
    checkedArray : state.singer.checkedArray
});


export default connect(mapStateToProps)(CardData);