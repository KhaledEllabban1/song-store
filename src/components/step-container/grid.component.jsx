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
  },
  pos: {
    marginBottom:20 ,
   }
}));

const CenteredGrid = ({count, total}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2} >
        <Grid item xs={9}>
          <HorizontalLabelPositionBelowStepper />
        </Grid>
        <Grid item xs={3} className={classes.pos} container justifyContent="space-around">
          <Paper className={classes.paper}> count = {count} </Paper>

          <Paper className={classes.paper}> Amount = {total}  </Paper>
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
