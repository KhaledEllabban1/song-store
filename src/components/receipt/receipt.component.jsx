import React , { useState } from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PrintIcon from '@material-ui/icons/Print';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { selectChoosedSongsCount, selectChoosedSongsTotal } from '../../redux/singer/singer.selector';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
      flexGrow: 1,
      boxShadow:0
    },
    title: {
      fontSize: 14,
    },
    pos: {
      margin:20,
    },
    button: {
      marginBottom:20,
    }
  });


const Receipt = ({userData, choosedSongs,count, total}) => {
  const classes = useStyles();
 
  return (
        <Grid key={Math.floor(Math.random() * 1000000)} container spacing={7} justifyContent="space-around">
            <Card key={Math.floor(Math.random() * 1000000)} className={classes.root}> 
                    <Typography key={Math.floor(Math.random() * 1000000)} className={classes.pos} variant="h5" component="h2">
                        Name : {userData.name}
                    </Typography>

                    <Typography key={Math.floor(Math.random() * 1000000)} className={classes.pos} variant="h5" component="h2">
                        Email : {userData.email}
                    </Typography>

                    <Typography key={Math.floor(Math.random() * 1000000)} className={classes.pos} variant="h5" component="h2">
                        Mobile : {userData.mobile}
                    </Typography>
                    <Typography key={Math.floor(Math.random() * 1000000)} className={classes.pos} variant="h5" component="h2">
                        {
                            choosedSongs.map(el => (<p>Choosed Song : {el.songName} </p>))
                        }
                     </Typography>
                     <Typography key={Math.floor(Math.random() * 1000000)} className={classes.pos} variant="h5" component="h2">
                        Count : {count}
                    </Typography>
                    <Typography key={Math.floor(Math.random() * 1000000)} className={classes.pos} variant="h5" component="h2">
                        Total : {total}
                    </Typography>
                    
                    <Button
                        key={Math.floor(Math.random() * 1000000)}
                        variant="contained"
                        color="primary"
                        type="print"
                        className={classes.button}
                        endIcon={<PrintIcon>send</PrintIcon>}
                    >
                        Print
                    </Button>
                    
            </Card>
        </Grid>
  );
}

const mapStateToProps = state => ({
  userData: state.user.userData,
  choosedSongs: state.singer.choosedSongs,
  count: state.singer.count,
  total: state.singer.total,
});


export default connect(mapStateToProps)(Receipt);
