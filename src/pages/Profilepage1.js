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
import CardActionArea from "@material-ui/core/CardActionArea";
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
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

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

const reviews = [
  {
    id: 1,
    name: "Monica",
    say: "This person is great.",
    star: 4
  },
  {
    id: 2,
    name: "Tara ",
    say: "Your home are beautiful.",
    star: 5
  },
  {
    id: 3,
    name: "Monica",
    say: "You're amazing.",
    star: 5
  }
];

const cards = [
  {
    id: 1,
    image: require("./images/top-rate-hotel/Jumeirah_Dar_Al_Masyaf.jpg"),
    place: "Dubai",
    title: "Jumeirah Dar Al Masyaf Hotel",
    price: "$850/night",
    rating: 4.9,
    amenities: "wifi, heating, kitchen"
  },
  {
    id: 2,
    image: require("./images/top-rate-hotel/Hotel_Fasano_Rio_de_Janeiro.jpg"),
    place: "Brazil",
    title: "Fasano Rio de Janeiro Hotel",
    price: "$270/night",
    rating: 4.5,
    amenities: "wifi, kitchen"
  },
  {
    id: 3,
    image: require("./images/top-rate-hotel/Fogo_Island_Inn.jpg"),
    place: "Canada",
    title: "Fogo Island Inn",
    price: "$1,530/night",
    rating: 4.8,
    amenities: "wifi, heating, kitchen"
  },
  {
    id: 4,
    image: require("./images/top-rate-hotel/Inkaterra_La_Casona.jpg"),
    place: "Peru",
    title: "Inkaterra La Casona",
    price: "$311/night",
    rating: 4.6,
    amenities: "wifi, heating"
  },
  {
    id: 5,
    image: require("./images/top-rate-hotel/Inkaterra_La_Casona.jpg"),
    place: "Peru",
    title: "Inkaterra La Casona",
    price: "$311/night",
    rating: 4.7,
    amenities: "wifi"
  },
  {
    id: 6,
    image: require("./images/top-rate-hotel/Inkaterra_La_Casona.jpg"),
    place: "Peru",
    title: "Inkaterra La Casona",
    price: "$311/night"
  },
  {
    id: 7,
    image: require("./images/top-rate-hotel/Inkaterra_La_Casona.jpg"),
    place: "Peru",
    title: "Inkaterra La Casona",
    price: "$311/night"
  },
  {
    id: 8,
    image: require("./images/top-rate-hotel/Inkaterra_La_Casona.jpg"),
    place: "Peru",
    title: "Inkaterra La Casona",
    price: "$311/night"
  },
  {
    id: 9,
    image: require("./images/top-rate-hotel/Inkaterra_La_Casona.jpg"),
    place: "Peru",
    title: "Inkaterra La Casona",
    price: "$311/night"
  },
  {
    id: 10,
    image: require("./images/top-rate-hotel/Inkaterra_La_Casona.jpg"),
    place: "Peru",
    title: "Inkaterra La Casona",
    price: "$311/night"
  }
];

export default function Profilepage1() {
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
                Remy Sharp
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
                      Info:
                    </Box>
                  </Typography>
                  <Box style={{ display: "flex" }}>
                    <Typography variant="subtitle1" gutterBottom>
                      Lived in Califonia
                    </Typography>
                  </Box>
                  <Box style={{ display: "flex" }}>
                    <Typography variant="subtitle1" gutterBottom>
                      12 House Hosted
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
                <Typography variant="h3">Hi, I'm Remy Sharp</Typography>
                <Box
                  style={{ marginTop: 10, display: "flex", direction: "row" }}
                >
                  <Typography variant="subtitle1">Joined in 2006 . </Typography>
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
                      <AntTab
                        label="Reviews About This Person"
                        {...a11yProps(0)}
                      />
                      <AntTab
                        label="List house host by them"
                        {...a11yProps(1)}
                      />
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
                        <Grid style={{ marginTop: 20 }}>
                          {reviews.map(
                            review =>
                              review.id < 4 && (
                                <Grid
                                  key={review.id}
                                  container
                                  justify="flex-start"
                                  className={classes.reviewGrid}
                                >
                                  <Grid item xs={1}>
                                    <Avatar sizes="large">
                                      <AccountCircleIcon />
                                    </Avatar>
                                  </Grid>
                                  <Grid item xs={8}>
                                    <Typography variant="body1">
                                      <Box fontWeight="fontWeightBold" m={1}>
                                        {review.name}
                                      </Box>
                                    </Typography>
                                    <Typography variant="body1">
                                      {review.say}
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={3}>
                                    <Box
                                      component="fieldset"
                                      mb={3}
                                      borderColor="transparent"
                                    >
                                      <Rating
                                        name="read-only"
                                        value={review.star}
                                        readOnly
                                      />
                                    </Box>
                                  </Grid>
                                </Grid>
                              )
                          )}

                          <div ref={container} />
                        </Grid>
                        <CardActions>
                          <Button className={classes.btn} onClick={handleClick}>
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
                            </Portal>
                          ) : null}
                        </CardActions>
                        <div ref={container} />
                      </Paper>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                      <Paper
                        elevation={3}
                        style={{ width: "100%", padding: "15px" }}
                      >
                        <Typography variant="h6" gutterBottom>
                          10 Houses Hosted
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
                                <CardActionArea href="/house">
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
                                        <Typography
                                          style={{ color: grey[500] }}
                                        >
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
                                      <Grid item xs={5}>
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
                                </CardActionArea>
                              </Card>
                            </Grid>
                          ))}
                        </Grid>
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
