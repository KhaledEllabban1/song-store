import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PrintIcon from '@material-ui/icons/Print';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      flexGrow: 1,
      boxShadow:0,
      textAlign: 'center'
    },
    title: {
      fontSize: 14,
    },
    pos: {
      margin:20,
      padding:10
    },
    button: {
      marginBottom:20,
      marginTop:20
    }
  });


const Receipt = ({userData, choosedSongs,count, total}) => {
  const classes = useStyles();
  console.log(choosedSongs);
  console.log('one')
  return (
        <Grid  key={Math.floor(Math.random() * 1000000)} container spacing={7} justifyContent="space-around">
            {
              userData.name && userData.email && userData.mobile !== '' ?
              (
                <div key={Math.floor(Math.random() * 1000000)} className={classes.root}> 
                    <Typography key={Math.floor(Math.random() * 1000000)} className={classes.button} variant="h5" component={'span'}>
                        <span className="recipt_name"> Name : </span> {userData.name} 
                    </Typography>

                    <Typography key={Math.floor(Math.random() * 1000000)} className={classes.button} variant="h5" component={'span'}>
                       <span className="recipt_name"> Email :   </span> {userData.email}
                    </Typography>

                    <Typography key={Math.floor(Math.random() * 1000000)} className={classes.button} variant="h5" component={'span'}>
                       <span className="recipt_name"> Mobile :  </span> {userData.mobile}
                    </Typography>
                    <Typography key={Math.floor(Math.random() * 1000000)} className={classes.button} variant="h5" component={'span'}>
                       <span className="recipt_name"> Choosed Songs :  </span>
                        {
                            choosedSongs.map(el => (
                              <Grid container xs={12}  justifyContent="space-around" alignItems="center">
                                <Grid item> 
                                  <Card className={classes.pos}> {el.songName} </Card>
                                </Grid>
                              </Grid>
                            ))
                        }
                     </Typography>
                     <Typography key={Math.floor(Math.random() * 1000000)} className={classes.pos} variant="h5" component={'span'}>
                         <span className="recipt_name"> Count :  </span> {count}
                    </Typography>
                    <Typography key={Math.floor(Math.random() * 1000000)} className={classes.pos} variant="h5" component={'span'}>
                       <span className="recipt_name"> Total : </span> {total}
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
                    
            </div>
              ) : (<span className='choose'> Enter your Data </span>)
            }
        </Grid>
  );
}

const mapStateToProps = state => ({
  userData: state.singer.userData,
  choosedSongs: state.singer.choosedSongs,
  count: state.singer.count,
  total: state.singer.total,
});


export default connect(mapStateToProps)(Receipt);
