import React from "react";
import {Card, CardContent, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
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

export default function Route({route}) {
    const classes = useStyles();

    return (
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>Creator: {route.creator}</Typography>
                    <Typography variant="h5" component="h2">Routename: {route.name}</Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Country: {route.country}
                    </Typography>
                </CardContent>
            </Card>
    )
}

