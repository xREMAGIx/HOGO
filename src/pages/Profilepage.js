import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SearchAppbar from "./appbars/SearchAppbar";
import Avatar from "@material-ui/core/Avatar";
import { Divider } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import Link from "@material-ui/core/Link";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from "react-swipeable-views";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import StarIcon from "@material-ui/icons/Star";
import Card from "@material-ui/core/Card";
import grey from "@material-ui/core/colors/grey";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Portal from "@material-ui/core/Portal";
import TextField from "@material-ui/core/TextField";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    },
    ul: {
      margin: 0,
      padding: 0
    },
    li: {
      listStyle: "none"
    }
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 0
  },
  link: {
    margin: theme.spacing(1)
  },
  heroContent: {
    padding: theme.spacing(5, 1, 1, 5)
  },
  button: {
    marginLeft: "auto"
  },
  paper: {
    margin: theme.spacing(10, 5, 3, 5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    padding: theme.spacing(1)
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15)
  },
  checkTypo: {
    color: "#018F84",
    marginRight: 10
  },
  tabRoot: {
    backgroundColor: theme.palette.common.white,
    marginTop: 15
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 0
  },
  cardGrid: {
    display: "flex"
    //flexDirection: "column"
  },
  containerFlex: {
    display: "flex",
    flexDirection: "row",
    marginTop: 130
  },
  cardEnd: {
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  textToHost: {
    padding: theme.spacing(2),
    width: "100%"
  },
  rating: {
    padding: theme.spacing(2),
    width: 200,
    display: "flex",
    alignItems: "center"
  },
  btn: {
    color: theme.palette.common.white,
    backgroundColor: "#018F84",
    "&:hover": {
      backgroundColor: "#22aba0"
    }
  }
}));

const AntTabs = withStyles({
  root: {
    //borderBottom: "1px solid #e8e8e8",
    backgroundColor: "#fffff"
  },
  indicator: {
    backgroundColor: "#018F84"
  }
})(Tabs);

const AntTab = withStyles(theme => ({
  root: {
    textTransform: "none",
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:hover": {
      color: "#22aba0",
      opacity: 1
    },
    "&$selected": {
      color: "#018F84",
      fontWeight: theme.typography.fontWeightMedium
    },
    "&:focus": {
      color: "#018F84"
    }
  },
  selected: {}
}))(props => <Tab disableRipple {...props} />);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

const cards = [
  {
    id: 1,
    image: require("./images/top-rate-hotel/Jumeirah_Dar_Al_Masyaf.jpg"),
    place: "Dubai",
    title: "Jumeirah Dar Al Masyaf Hotel",
    price: "$850/night",
    rating: 4.9,
    amenities: "wifi, heating, kitchen"
  }
];

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+"
};

export default function Profilepage() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const container = React.useRef(null);
  const [show, setShow] = React.useState(false);
  const [hover, setHover] = React.useState(-1);
  const [ratingValue, setRatingValue] = React.useState(3);

  const handleClick = () => {
    setShow(!show);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="sticky"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        {/* Header AppBar */}
        <SearchAppbar />
      </AppBar>

      <Grid container direction="row" justify="space-around">
        {/* Profile Picture Form*/}
        <Grid item md={4}>
          <Container
            component="main"
            maxWidth="xs"
            style={{ marginLeft: "auto" }}
          >
            <Paper elevation={5} className={classes.paper}>
              <Typography component="h1" variant="h5">
                Remagi
              </Typography>
              <form className={classes.form} noValidate>
                <Grid
                  xs={12}
                  alignItems="center"
                  direction="column"
                  style={{ display: "flex" }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://source.unsplash.com/random"
                    className={classes.large}
                  />
                  <Link href="" style={{ color: "#018F84", marginTop: 5 }}>
                    Update your photo
                  </Link>
                </Grid>
                <Divider style={{ marginTop: 10 }} />
                <Grid
                  xs={12}
                  justify="flex-start"
                  direction="column"
                  style={{ display: "flex", margin: (10, 0, 0, 5) }}
                >
                  <Typography variant="subtitle1" gutterBottom>
                    <Box fontWeight="fontWeightBold" m={1}>
                      You provided:
                    </Box>
                  </Typography>
                  <Box style={{ display: "flex" }}>
                    <CheckIcon className={classes.checkTypo} />
                    <Typography variant="subtitle1" gutterBottom>
                      Phone number
                    </Typography>
                  </Box>
                  <Box style={{ display: "flex" }}>
                    <CheckIcon className={classes.checkTypo} />
                    <Typography variant="subtitle1" gutterBottom>
                      Email address
                    </Typography>
                  </Box>
                </Grid>
              </form>
            </Paper>
          </Container>
        </Grid>
        {/* End Profile Picture Form */}

        <Grid item md={8}>
          <Container component="main" style={{ paddingLeft: 1 }}>
            <Paper elevation={0} className={classes.paper}>
              <form className={classes.form} noValidate>
                <Typography variant="h3">Hi, I'm Remagi</Typography>
                <Box
                  style={{ marginTop: 10, display: "flex", direction: "row" }}
                >
                  <Typography variant="subtitle1">Joined in 2019 . </Typography>
                  <Link
                    href=""
                    style={{ color: "#018F84", margin: (5, 0, 0, 5) }}
                  >
                    Edit profile
                  </Link>
                </Box>
                <div className={classes.tabRoot}>
                  <AppBar position="static" color="#fffff">
                    <AntTabs
                      value={value}
                      onChange={handleChange}
                      indicatorColor="primary"
                      textColor="primary"
                      //variant="fullWidth"
                      aria-label="full width tabs example"
                    >
                      <AntTab label="Reviews About You" {...a11yProps(0)} />
                      <AntTab label="Reviews By You" {...a11yProps(1)} />
                    </AntTabs>
                  </AppBar>
                  <SwipeableViews
                    axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                  >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                      <Paper
                        elevation={3}
                        style={{ width: "100%", padding: "15px" }}
                      >
                        <Typography variant="h6" gutterBottom>
                          Past reviews
                        </Typography>
                        <Divider />
                        <Typography variant="subtitle1" gutterBottom>
                          Reviews are written at the end of a reservation
                          through Hogo. Reviews you’ve received will be visible
                          both here and on your public profile.
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          style={{ marginTop: 20 }}
                        >
                          No one has reviewed you yet.
                        </Typography>
                      </Paper>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                      <Paper
                        elevation={3}
                        style={{ width: "100%", padding: "15px" }}
                      >
                        <Typography variant="h6" gutterBottom>
                          Reviews to Write
                        </Typography>
                        <Divider />
                        {/* <Typography variant="subtitle1" gutterBottom>
                          Nobody to review right now. Looks like it’s time for
                          another trip!
                        </Typography> */}

                        <Grid
                          className={classes.cardGrid}
                          container
                          spacing={1}
                        >
                          {cards.map(card => (
                            <Grid item key={card.id} md={12} xs={12}>
                              <Card className={classes.card}>
                                {/* Hotel cards for PC */}
                                <Grid container spacing={1} direction="row">
                                  <Grid item xs={4}>
                                    <CardMedia
                                      variant="square"
                                      className={classes.cardMedia}
                                      image={card.image}
                                      title="Image title"
                                    />
                                  </Grid>
                                  <Grid item xs={6}>
                                    <CardContent
                                      className={classes.cardContent}
                                    >
                                      <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                      >
                                        {card.title}
                                      </Typography>
                                      <Typography style={{ color: grey[500] }}>
                                        {card.amenities}
                                      </Typography>
                                    </CardContent>
                                  </Grid>
                                  <Grid
                                    container
                                    justify="center"
                                    direction="column"
                                    alignItems="center"
                                    xs={2}
                                  >
                                    <Grid item xs={8}>
                                      <StarIcon
                                        fontSize="small"
                                        style={{ color: "#FF5A60" }}
                                      ></StarIcon>
                                      <Typography
                                        fontSize="small"
                                        style={{ height: 25, width: 25 }}
                                      >
                                        {card.rating}
                                      </Typography>
                                    </Grid>
                                    <Grid item>
                                      <Typography>{card.price}</Typography>
                                    </Grid>
                                  </Grid>
                                </Grid>

                                <CardActions>
                                  <Button
                                    className={classes.btn}
                                    onClick={handleClick}
                                  >
                                    {show ? "Publish" : "Write Review"}
                                  </Button>
                                  {show ? (
                                    <Portal container={container.current}>
                                      <TextField
                                        className={classes.textToHost}
                                        id="outlined-multiline-static"
                                        placeholder="Write your review here..."
                                        multiline
                                        rows="4"
                                        variant="outlined"
                                      />
                                      <Typography
                                        variant="subtitle1"
                                        style={{ marginLeft: 10 }}
                                      >
                                        Rating:
                                      </Typography>
                                      <div className={classes.rating}>
                                        <Rating
                                          name="hover-feedback"
                                          value={ratingValue}
                                          precision={0.5}
                                          onChange={(event, newRatingValue) => {
                                            setRatingValue(newRatingValue);
                                          }}
                                          onChangeActive={(event, newHover) => {
                                            setHover(newHover);
                                          }}
                                        />
                                        {value !== null && (
                                          <Box ml={2}>
                                            {
                                              labels[
                                                hover !== -1
                                                  ? hover
                                                  : ratingValue
                                              ]
                                            }
                                          </Box>
                                        )}
                                      </div>
                                    </Portal>
                                  ) : null}
                                </CardActions>
                                <div ref={container} />
                              </Card>
                            </Grid>
                          ))}
                        </Grid>
                      </Paper>
                      <Paper
                        elevation={3}
                        style={{
                          width: "100%",
                          padding: "15px",
                          marginTop: 30
                        }}
                      >
                        <Typography variant="h6" gutterBottom>
                          Past Reviews You’ve Written
                        </Typography>
                        <Divider />
                        <Typography variant="subtitle1" gutterBottom>
                          You have not written any reviews yet.
                        </Typography>
                      </Paper>
                    </TabPanel>
                  </SwipeableViews>
                </div>
              </form>
            </Paper>
          </Container>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
