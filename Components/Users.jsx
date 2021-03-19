import React from 'react'
import UserCard from './UserCard'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
  }));

export default function Users({users}) {
    const classes = useStyles();
    console.log(users)
    return (
        <Grid container className={classes.root}>
            <Grid item xs={12}>
                <Grid container justify="center">
                    {users && users.map((item,index) => {
                        return (<Grid key={index} item>
                                        <UserCard user={item} key={index}/>
                                </Grid>) 
                            })}
                </Grid>
        </Grid>
      </Grid>
            
    )
}
