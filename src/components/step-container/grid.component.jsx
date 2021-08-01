import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import HorizontalLabelPositionBelowStepper from '../stepper/stepper.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectChoosedSongsCount, selectChoosedSongsTotal } from '../../redux/singer/singer.selector';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginBottom:20 ,
    fontSize:20
  },
  pos: {
    marginBottom:20 ,
   }
}));

const CenteredGrid = ({count, total}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2} alignItems="flex-start">
        <Grid item xs={12}>
          <HorizontalLabelPositionBelowStepper />
        </Grid>
        <Grid item xs={12}  className={classes.pos} container  justifyContent="space-around">
          <Paper className={classes.paper}> count = <span className='count_total'>  {count} </span>  </Paper>

          <Paper className={classes.paper}> Amount = <span className='count_total'>  {total} </span>  </Paper>
        </Grid>
        
      </Grid>
    </div>
  );
}
const mapDispatchToProps = createStructuredSelector({
  count: selectChoosedSongsCount,
  total: selectChoosedSongsTotal
})
export default connect(mapDispatchToProps)(CenteredGrid);
