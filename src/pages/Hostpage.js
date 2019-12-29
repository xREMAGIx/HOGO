import React from "react";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { ListItemSecondaryAction } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  listRoot: {
    minWidth: "40vw"
  }
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />

      <Grid item xs={12} md={6} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography variant="h2">Become a host</Typography>
          <List className={classes.listRoot} alignItems="flex-start">
            <ListItem button divider style={{ height: "20vh" }}>
              <ListItemText
                primary={
                  <Typography variant="h5">Step 1: About your place</Typography>
                }
                secondary={
                  <Typography variant="subtitle1">
                    Beds, bathrooms, amenities, and more
                  </Typography>
                }
              />

              <ListItemSecondaryAction>
                <Button
                  href="/bhost1"
                  style={{ backgroundColor: "#018F84", color: "white" }}
                >
                  >
                </Button>
              </ListItemSecondaryAction>
            </ListItem>

            <ListItem button divider style={{ height: "20vh" }}>
              <ListItemText
                primary={
                  <Typography variant="h5">Step 2: Set the scene</Typography>
                }
                secondary={
                  <Typography variant="subtitle1">
                    Photos, short description, title
                  </Typography>
                }
              />
              <ListItemSecondaryAction>
                <Button style={{ backgroundColor: "#018F84", color: "white" }}>
                  >
                </Button>
              </ListItemSecondaryAction>
            </ListItem>

            <ListItem button divider style={{ height: "20vh" }}>
              <ListItemText
                primary={
                  <Typography variant="h5">
                    Step 3: Get ready for guests
                  </Typography>
                }
                secondary={
                  <Typography variant="subtitle1">
                    Booking settings, calendar, price
                  </Typography>
                }
              />
              <ListItemSecondaryAction>
                <Button style={{ backgroundColor: "#018F84", color: "white" }}>
                  >
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </div>
      </Grid>
      <Grid item xs={false} md={6} className={classes.image} />
    </Grid>
  );
}
