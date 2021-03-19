import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';

export default function UserCard(user) {
    console.log(user)
    return (
        <div>
            <Card style={{margin:"15px"}}>
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {user.user.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="h4">
                    {`Email: ${user.user.email}`}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                    {`Phone: ${user.user.phone.home}`}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                    {`Address : ${user.user.address}`}
                </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}
