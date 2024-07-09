import React, { Component } from 'react';
import {
    withStyles, Card, CardMedia,
    CardContent, CardActions, Button, Grid
} from "material-ui";
import RestaurantDetails from './RestaurantDetails';
import ItemCountButton from './ItemCountButton';

const RestaurantCard = (props) => {
    const { classes, data, OrderCount } = props;
    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={data.imageCover}
                title={data.name}
            />
            <CardContent className={classes.cardContent}>
                <div style={{ fontWeight: "bold" }}>{data.name}</div>
                <div style={{ fontSize: ".8rem", paddingTop: '3px', color: "#737373" }}>{data.type}</div>
                <Grid container justify="space-between" alignItems='center' direction={"row"}>
                    <Grid item>
                        <div style={{ fontSize: ".9rem", color: "rgb(78, 78, 78)" }}>{data.cost}</div>
                    </Grid>
                    <Grid item>
                        {
                            OrderCount === 0 ?
                                <Button className={classes.addBtn} size="small" onClick={() => props.ItemCountChanges(1)}>Add </Button>
                                :
                                <ItemCountButton onChange={props.ItemCountChanges} count={OrderCount} />
                        }
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

RestaurantCard.defaultProps = {
    ItemCountChanges: () => { },
    OrderCount: 0
}
const styles = theme => ({
    card: {
        boxShadow: "none",
        padding: ".8rem",
        borderRadius: 0,
        paddingBottom: 1,
    },
    media: {
        height: '14em',
    },
    cardContent: {
        padding: "0rem",
        paddingTop: "1rem",
        height: '6.5em',
    },

    addBtn: {
        border: '1px solid #d4d5d9',
        color: '#60b246',
        fontWeight: "bold",
        borderRadius: '0px',
        '&:hover': {
            // color: 'white',
            boxShadow: "0 0 18px #e0e0e0",
            backgroundColor: '#fff',
        },
    },
});
export default withStyles(styles)(RestaurantCard);