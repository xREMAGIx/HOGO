import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Icon from "@material-ui/core/Icon";
import InputBase from "@material-ui/core/InputBase";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import SearchIcon from "@material-ui/icons/Search";
import Portal from "@material-ui/core/Portal";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { TextareaAutosize } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  list: {
    width: 400
  },
  fullList: {
    width: "auto"
  },
  root: {
    margin: theme.spacing(1, 1, 1, 1),
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 300
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  icon: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  },
  boxRoot: {
    width: 400,
    flex: 1
  }
}));

const cards = [
  {
    title: "How do I create an account?",
    body:
      "If you don't have an Airbnb account yet, go to airbnb.com and click Sign Up.\nYou can sign up using your email address, Facebook account, Google account, or Apple ID. Signing up and creating an Airbnb account is free.\nAfter you sign up, be sure to complete your account before booking a reservation."
  }
];

function SimpleDialog() {
  return (
    <Paper
      //onClose={handleClose}
      aria-labelledby="simple-dialog-title"
    >
      <Typography variant="h5">Hello</Typography>
    </Paper>
  );
}

export default function HelpDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const [openPaper, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [show, setShow] = React.useState(false);
  const container = React.useRef(null);

  const handleClick = () => {
    setShow(!show);
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      //onClick={toggleDrawer(side, false)}
      //onKeyDown={toggleDrawer(side, false)}
    >
      <Typography variant="h6" gutterBottom>
        Recommended Help
      </Typography>
      <Divider />
      {/* <SimpleDialog open={openPaper} onClose={handleClose} /> */}
      <div style={{ position: "relative" }}>
        {show ? (
          <Portal container={container.current}>
            <Box
              zIndex="1300"
              position="absolute"
              ref={container}
              className={classes.boxRoot}
            >
              <SimpleDialog />
            </Box>
          </Portal>
        ) : null}
        <div ref={container} />

        <Box zIndex="1200" position="absolute" className={classes.boxRoot}>
          <Typography variant="subtitle1"> Search by keyword:</Typography>
          <Paper component="form" className={classes.root}>
            {/* <Icon className={classes.icon} aria-label="menu"> */}
            <SearchIcon />
            {/* </Icon> */}
            <InputBase
              className={classes.input}
              placeholder="Ex: host a hotel"
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Paper>
          <Typography
            variant="subtitle1"
            style={{ marginTop: 30 }}
            gutterBottom
          >
            <Box fontWeight="fontWeightBold" m={1}>
              Recommended articles
            </Box>
          </Typography>
          <Grid className={classes.containerFlex}>
            <Container className={classes.cardContainer} maxWidth="lg">
              <Grid className={classes.cardGrid} container spacing={1}>
                {cards.map(card => (
                  <Grid item key={card.id} md={12} xs={12}>
                    <Card className={classes.card}>
                      <CardActionArea onClick={handleClick}>
                        <CardContent>
                          <Typography variant="subtitle1" gutterBottom>
                            <Box fontWeight="fontWeightBold" m={1}>
                              {card.title}
                            </Box>
                          </Typography>

                          <Grid
                            wrap="nowrap"
                            zeroMinWidth
                            style={{ marginBottom: 10 }}
                          >
                            <Typography noWrap variant="body1">
                              {card.body}
                            </Typography>
                          </Grid>
                          <Typography
                            variant="body2"
                            style={{ color: "#018F84" }}
                          >
                            Read more >
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Grid>
        </Box>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <Button onClick={toggleDrawer("right", true)}>Help</Button>
      <SwipeableDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        {sideList("right")}
      </SwipeableDrawer>
    </React.Fragment>
  );
}
