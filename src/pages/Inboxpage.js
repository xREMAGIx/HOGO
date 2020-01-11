import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import SearchAppbar from "./appbars/SearchAppbar";
import { Paper } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import InfoIcon from "@material-ui/icons/Info";
import PhoneIcon from "@material-ui/icons/Phone";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  },
  menuRoot: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  exText: {
    color: theme.palette.common.black,
    width: 300
  },
  textToHost: {
    position: "fixed",
    width: "45vw",
    top: "auto",
    bottom: 10
  },
  paper: {
    width: "100%",
    height: "100%"
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15)
  }
}));

export default function Inboxpage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar
        position="sticky"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        {/* Header AppBar */}
        <SearchAppbar />
      </AppBar>

      <Grid container style={{ height: "88%" }}>
        <Grid item xs={3}>
          <Paper elevation={1} className={classes.paper}>
            <List className={classes.root}>
              <ListItem alignItems="flex-start" button>
                <ListItemAvatar>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://source.unsplash.com/random"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Brunch this weekend?"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        Ali Connors
                      </Typography>
                      {" — I'll be in your neighborhood doing errands this…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start" button>
                <ListItemAvatar>
                  <Avatar
                    alt="Travis Howard"
                    src="https://source.unsplash.com/random"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Summer BBQ"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        to Scott, Alex, Jennifer
                      </Typography>
                      {" — Wish I could come, but I'm out of town this…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start" button>
                <ListItemAvatar>
                  <Avatar
                    alt="Cindy Baker"
                    src="https://source.unsplash.com/random"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Oui Oui"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        Sandra Adams
                      </Typography>
                      {" — Do you have Paris recommendations? Have you ever…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <div className={classes.menuRoot}>
            <AppBar position="relative" color="#fffff">
              <Toolbar>
                <IconButton edge="start" href="/profile1">
                  <Avatar
                    alt="Remy Sharp"
                    src="https://source.unsplash.com/random"
                  />
                </IconButton>
                <Typography variant="subtitle1" className={classes.title}>
                  Remy Sharp
                </Typography>
                <IconButton color="inherit">
                  <PhoneIcon />
                </IconButton>
                <IconButton color="inherit">
                  <InfoIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
          </div>
          <Container maxWidth="lg">
            <Grid container style={{ marginTop: 20 }}>
              <Grid item xs={1}>
                <IconButton edge="start" href="/profile1">
                  <Avatar
                    alt="Remy Sharp"
                    src="https://source.unsplash.com/random"
                  />
                </IconButton>
              </Grid>
              <Grid item xs={11}>
                <TextField
                  className={classes.exText}
                  disabled
                  multiline
                  id="outlined-read-only-input"
                  defaultValue="Hello! I'm looking forward to stay in your home."
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <TextField
              className={classes.textToHost}
              id="outlined-multiline-static"
              placeholder="Write your message here..."
              multiline
              rows="4"
              variant="outlined"
            />
          </Container>
        </Grid>

        <Grid item xs={3}>
          <Paper elevation={1} className={classes.paper}>
            <form className={classes.form} noValidate>
              <Grid
                xs={12}
                alignItems="center"
                direction="column"
                style={{ display: "flex" }}
              >
                <Typography component="h1" variant="h5">
                  Remagi
                </Typography>
                <IconButton edge="start" href="/profile1">
                  <Avatar
                    alt="Remy Sharp"
                    src="https://source.unsplash.com/random"
                    className={classes.large}
                  />
                </IconButton>
              </Grid>
              <Divider style={{ marginTop: 10 }} />
            </form>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
