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
import { addSinger, removeSinger, toggle } from '../../redux/singer/singer.action';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      flexGrow: 1
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const CardData = ({singer,index, addSinger, removeSinger, selectedSingers, checkedValue, toggle}) => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);
    const handleChange = (event) => {
      setChecked(event.target.checked ? () => addSinger(singer) : () => removeSinger(singer) );
      setChecked(!checked);
    };
    console.log([checkedValue])
    return(
    <Grid item xs={3}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        <Checkbox
                            checked={checked}
                            onChange={handleChange}
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
)};

const mapDispatchToProps = dispatch => ({
    addSinger: singer => dispatch(addSinger(singer)),
    removeSinger: singer => dispatch(removeSinger(singer)),
    toggle: value => dispatch(toggle(value))
});

const mapStateToProps = state => ({
  selectedSingers : state.singer.selectedSingers,
  checkedValue : state.singer.checked
})


export default connect(mapStateToProps, mapDispatchToProps)(CardData);