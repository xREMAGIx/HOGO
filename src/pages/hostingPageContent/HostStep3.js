import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import CheckIcon from "@material-ui/icons/Check";
import { green, red } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import AddIcon from "@material-ui/icons/Add";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Checkbox from "@material-ui/core/Checkbox";
import Autocomplete from "@material-ui/lab/Autocomplete";
import RemoveIcon from "@material-ui/icons/Remove";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100vw"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  formControl: {
    marginTop: theme.spacing(3)
  },
  nextBtn: {
    backgroundColor: "#FF5A60",
    "&:hover": {
      backgroundColor: "#FF787D"
    },
    color: "white"
  },
  // card: {
  //   // width: "50vw",
  //   height: "50vh",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center"
  // },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },

  uploadBtn: {
    backgroundColor: "#018F84",
    "&:hover": {
      backgroundColor: "#018F84"
    },
    color: "white"
  },
  input: {
    display: "none"
  },
  uploadRoot: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  textField: {
    marginTop: 20,
    width: "70vw",
    maxWidth: 550
  },
  inputRoot: {
    color: "inherit"
    // paddingLeft: 50
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 500
    }
  },
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18
    }
  },
  numberRoot: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "auto",
    height: 50,
    marginTop: 20,
    border: "1px solid "
  },
  numberInput: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  checkTypo: {
    color: "#018F84",
    marginRight: 10
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
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

const GreenRadio = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600]
    }
  },
  checked: {}
})(props => <Radio color="default" {...props} />);

const RedRadio = withStyles({
  root: {
    color: red[400],
    "&$checked": {
      color: red[600]
    }
  },
  checked: {}
})(props => <Radio color="default" {...props} />);

const HogoRadio = withStyles({
  root: {
    color: "#018F84",
    "&$checked": {
      color: "#018F84"
    }
  },
  checked: {}
})(props => <Radio color="default" {...props} />);

const HogoCheckbox = withStyles({
  root: {
    color: "#018F84",
    "&$checked": {
      color: "#018F84"
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

const cards = [
  {
    id: 1,
    image: require("../images/top-rate-hotel/Jumeirah_Dar_Al_Masyaf.jpg"),
    title: "1. Qualified guests find your listing",
    instruction:
      "Anyone who wants to book with you needs to confirm their contact information, provide payment details, and tell you about their trip."
  },
  {
    id: 2,
    image: require("../images/top-rate-hotel/Hotel_Fasano_Rio_de_Janeiro.jpg"),
    title: "2. You set controls for who can book",
    instruction:
      "To book available dates without having to send a request, guests must agree to your rules and meet all the requirements you set."
  },
  {
    id: 3,
    image: require("../images/top-rate-hotel/Fogo_Island_Inn.jpg"),
    title: "3. Once a guest books, you get notified",
    instruction:
      "You’ll immediately get a confirmation email with information like why they’re coming, when they’re arriving, and who they’re coming with."
  }
];

const times = [
  {
    time: "Flexible"
  },
  { time: "1AM" },
  { time: "2AM" },
  { time: "3AM" },
  { time: "4AM" },
  { time: "5AM" },
  { time: "6AM" },
  { time: "7AM" },
  { time: "8AM" },
  { time: "9AM" },
  { time: "10AM" },
  { time: "11AM" },
  { time: "12AM" },
  { time: "1PM" },
  { time: "2PM" },
  { time: "3PM" },
  { time: "4PM" },
  { time: "5PM" },
  { time: "6PM" },
  { time: "7PM" },
  { time: "8PM" },
  { time: "9PM" },
  { time: "10PM" },
  { time: "11PM" },
  { time: "12PM" }
];

export default function BHost3() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [minNight, setMinNight] = React.useState(0);
  const [maxNight, setMaxNight] = React.useState(0);

  const handleNext = () => {
    setValue(value + 1);
  };

  const handleBack = () => {
    setValue(value - 1);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  const [radValue1, setRadValue1] = React.useState("yes");
  const handleRadChange1 = event => {
    setRadValue1(event.target.value);
  };

  const [radValue2, setRadValue2] = React.useState("yes");
  const handleRadChange2 = event => {
    setRadValue2(event.target.value);
  };

  const [radValue3, setRadValue3] = React.useState("yes");
  const handleRadChange3 = event => {
    setRadValue3(event.target.value);
  };

  const [radValue4, setRadValue4] = React.useState("yes");
  const handleRadChange4 = event => {
    setRadValue4(event.target.value);
  };

  const [radValue5, setRadValue5] = React.useState("yes");
  const handleRadChange5 = event => {
    setRadValue5(event.target.value);
  };

  const [radValue6, setRadValue6] = React.useState("2days");
  const handleRadChange6 = event => {
    setRadValue6(event.target.value);
  };

  const [radValue7, setRadValue7] = React.useState("anytime");
  const handleRadChange7 = event => {
    setRadValue7(event.target.value);
  };

  const [state, setState] = React.useState({
    checkedG: true
  });

  const handleCheckChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const [priceValue, setPriceValue] = React.useState({
    basePrice: 0,
    minPrice: 0,
    maxPrice: 0
  });
  const handlePriceChange = prop => event => {
    setPriceValue({ ...priceValue, [prop]: event.target.value });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="white"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Grid container xs={10}>
            <Grid item xs={1}>
              <Button href="/" style={{ color: "#018F84" }}>
                Hogo
              </Button>
            </Grid>
            <Grid item>
              <Typography variant="h5">Step 3: Get ready for guests</Typography>
            </Grid>
          </Grid>
          <Button href="/hosting" style={{ color: "#018F84" }}>
            Save & Exit
          </Button>
        </Toolbar>
      </AppBar>

      <div className={classes.root}>
        <AppBar position="static" color="default">
          <AntTabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            centered
          >
            <AntTab disabled {...a11yProps(0)} />
            <AntTab disabled {...a11yProps(1)} />
            <AntTab disabled {...a11yProps(2)} />
            <AntTab disabled {...a11yProps(3)} />
            <AntTab disabled {...a11yProps(4)} />
            <AntTab disabled {...a11yProps(5)} />
            <AntTab disabled {...a11yProps(6)} />
            <AntTab disabled {...a11yProps(7)} />
            <AntTab disabled {...a11yProps(8)} />
            <AntTab disabled {...a11yProps(9)} />
          </AntTabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          {/* Panel Review Hogo require */}
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Container component="main" maxWidth="sm">
              <CssBaseline />
              <div className={classes.paper}>
                <Typography component="h1" variant="h5" gutterBottom>
                  Review Hogo’s guest requirements
                </Typography>
                <Typography variant="subtitle1" style={{ marginBottom: 50 }}>
                  Hogo has requirements that all guests must meet before they
                  book.
                </Typography>
                <form>
                  <Typography variant="h6" gutterBottom>
                    All Hogo guests must provide:
                  </Typography>
                  <Box style={{ display: "flex" }}>
                    <CheckIcon className={classes.checkTypo} />
                    <Typography variant="subtitle1" gutterBottom>
                      Email address
                    </Typography>
                  </Box>
                  <Box style={{ display: "flex" }}>
                    <CheckIcon className={classes.checkTypo} />
                    <Typography variant="subtitle1" gutterBottom>
                      Confirmed phone number
                    </Typography>
                  </Box>
                  <Box style={{ display: "flex" }}>
                    <CheckIcon className={classes.checkTypo} />
                    <Typography variant="subtitle1" gutterBottom>
                      Payment information
                    </Typography>
                  </Box>

                  <Typography variant="h6" gutterBottom>
                    Before booking your home, each guest must:
                  </Typography>
                  <Box style={{ display: "flex" }}>
                    <CheckIcon className={classes.checkTypo} />
                    <Typography variant="subtitle1" gutterBottom>
                      Agree to your House Rules
                    </Typography>
                  </Box>
                  <Box style={{ display: "flex" }}>
                    <CheckIcon className={classes.checkTypo} />
                    <Typography variant="subtitle1" gutterBottom>
                      Message you about their trip
                    </Typography>
                  </Box>
                  <Box style={{ display: "flex" }}>
                    <CheckIcon className={classes.checkTypo} />
                    <Typography variant="subtitle1" gutterBottom>
                      Let you know how many guests are coming
                    </Typography>
                  </Box>
                  <Box style={{ display: "flex" }}>
                    <CheckIcon className={classes.checkTypo} />
                    <Typography variant="subtitle1" gutterBottom>
                      Confirm their check-in time if they’re arriving within 2
                      days
                    </Typography>
                  </Box>

                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    style={{ marginTop: 50 }}
                  >
                    <Button href="/hosting"> Back</Button>
                    <Button
                      variant="contained"
                      className={classes.nextBtn}
                      onClick={handleNext}
                    >
                      Next
                    </Button>
                  </Grid>
                </form>
              </div>
            </Container>
          </TabPanel>
          {/* End Review Hogo require Panel */}

          {/* Panel Set house rules */}
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Container component="main" maxWidth="sm">
              <CssBaseline />
              <div className={classes.paper}>
                <Typography component="h1" variant="h5" gutterBottom>
                  Set house rules for your guests
                </Typography>
                <Typography variant="subtitle1" style={{ marginBottom: 30 }}>
                  Guests must agree to your house rules before they book.
                </Typography>
                <form>
                  <Grid container alignItems="center">
                    <Grid item xs={7}>
                      <Typography variant="subtitle1">
                        Suitable for children (2-12 years)
                      </Typography>
                    </Grid>
                    <Grid item xs={5}>
                      <RadioGroup
                        aria-label="gender"
                        name="gender1"
                        value={radValue1}
                        onChange={handleRadChange1}
                        row
                      >
                        <FormControlLabel
                          value="yes"
                          control={<GreenRadio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="no"
                          control={<RedRadio />}
                          label="No"
                        />
                      </RadioGroup>
                    </Grid>
                  </Grid>

                  <Grid container alignItems="center">
                    <Grid item xs={7}>
                      <Typography variant="subtitle1">
                        Suitable for infants (Under 2 years)
                      </Typography>
                    </Grid>
                    <Grid item xs={5}>
                      <RadioGroup
                        aria-label="gender"
                        name="gender1"
                        value={radValue2}
                        onChange={handleRadChange2}
                        row
                      >
                        <FormControlLabel
                          value="yes"
                          control={<GreenRadio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="no"
                          control={<RedRadio />}
                          label="No"
                        />
                      </RadioGroup>
                    </Grid>
                  </Grid>

                  <Grid container alignItems="center">
                    <Grid item xs={7}>
                      <Typography variant="subtitle1">
                        Suitable for pets
                      </Typography>
                    </Grid>
                    <Grid item xs={5}>
                      <RadioGroup
                        aria-label="gender"
                        name="gender1"
                        value={radValue3}
                        onChange={handleRadChange3}
                        row
                      >
                        <FormControlLabel
                          value="yes"
                          control={<GreenRadio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="no"
                          control={<RedRadio />}
                          label="No"
                        />
                      </RadioGroup>
                    </Grid>
                  </Grid>

                  <Grid container alignItems="center">
                    <Grid item xs={7}>
                      <Typography variant="subtitle1">
                        Smoking allowed
                      </Typography>
                    </Grid>
                    <Grid item xs={5}>
                      <RadioGroup
                        aria-label="gender"
                        name="gender1"
                        value={radValue4}
                        onChange={handleRadChange4}
                        row
                      >
                        <FormControlLabel
                          value="yes"
                          control={<GreenRadio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="no"
                          control={<RedRadio />}
                          label="No"
                        />
                      </RadioGroup>
                    </Grid>
                  </Grid>

                  <Grid container alignItems="center">
                    <Grid item xs={7}>
                      <Typography variant="subtitle1">
                        Events or parties allowed
                      </Typography>
                    </Grid>
                    <Grid item xs={5}>
                      <RadioGroup
                        aria-label="gender"
                        name="gender1"
                        value={radValue5}
                        onChange={handleRadChange5}
                        row
                      >
                        <FormControlLabel
                          value="yes"
                          control={<GreenRadio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="no"
                          control={<RedRadio />}
                          label="No"
                        />
                      </RadioGroup>
                    </Grid>
                  </Grid>

                  <Typography variant="subtitle1" style={{ marginTop: 30 }}>
                    Additional rules
                  </Typography>
                  <Paper component="form" className={classes.numberRoot}>
                    <InputBase
                      className={classes.numberInput}
                      placeholder="Ex: Not drinking in pool,..."
                      inputProps={{ "aria-label": "search google maps" }}
                    />
                    <Divider
                      className={classes.divider}
                      orientation="vertical"
                    />
                    <IconButton
                      //type="submit"
                      className={classes.iconButton}
                      aria-label="directions"
                    >
                      <AddIcon />
                    </IconButton>
                  </Paper>

                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    style={{ marginTop: 50 }}
                  >
                    <Button onClick={handleBack}> Back</Button>
                    <Button
                      variant="contained"
                      className={classes.nextBtn}
                      onClick={handleNext}
                    >
                      Next
                    </Button>
                  </Grid>
                </form>
              </div>
            </Container>
          </TabPanel>
          {/* End Set house rules Panel */}

          {/* Panel Review all require*/}
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Container component="main" maxWidth="sm">
              <CssBaseline />
              <div className={classes.paper}>
                <Typography variant="h5" gutterBottom>
                  Review your guest requirements
                </Typography>
                <Typography variant="subtitle1" style={{ marginBottom: 30 }}>
                  Guests can only book without sending a request if they meet
                  all your requirements and agree to your house rules.
                </Typography>
                <form>
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="h6" gutterBottom>
                      Hogo’s guest requirements
                    </Typography>
                    <Link href="/bhost3" style={{ color: "#018F84" }}>
                      Review
                    </Link>
                  </Box>
                  <Box style={{ display: "flex" }}>
                    <CheckIcon className={classes.checkTypo} />
                    <Typography variant="subtitle1" gutterBottom>
                      Email address
                    </Typography>
                  </Box>
                  <Box style={{ display: "flex" }}>
                    <CheckIcon className={classes.checkTypo} />
                    <Typography variant="subtitle1" gutterBottom>
                      Confirmed phone number
                    </Typography>
                  </Box>
                  <Box style={{ display: "flex" }}>
                    <CheckIcon className={classes.checkTypo} />
                    <Typography variant="subtitle1" gutterBottom>
                      Payment information
                    </Typography>
                  </Box>
                  <Box style={{ display: "flex" }}>
                    <CheckIcon className={classes.checkTypo} />
                    <Typography variant="subtitle1" gutterBottom>
                      A message about the guest’s trip
                    </Typography>
                  </Box>
                  <Box style={{ display: "flex" }}>
                    <CheckIcon className={classes.checkTypo} />
                    <Typography variant="subtitle1" gutterBottom>
                      Check-in time for last minute trips
                    </Typography>
                  </Box>

                  <Divider />
                  <Box display="flex" justifyContent="space-between">
                    <Typography variant="h6" gutterBottom>
                      Your House Rules
                    </Typography>
                    <Link href="/bhost3" style={{ color: "#018F84" }}>
                      Edit
                    </Link>
                  </Box>
                  <Box style={{ display: "flex" }}>
                    <CheckIcon className={classes.checkTypo} />
                    <Typography variant="subtitle1" gutterBottom>
                      Suitable for children (2-12 years)
                    </Typography>
                  </Box>
                  <Box style={{ display: "flex" }}>
                    <CheckIcon className={classes.checkTypo} />
                    <Typography variant="subtitle1" gutterBottom>
                      Suitable for infants (Under 2 years)
                    </Typography>
                  </Box>
                  <Box style={{ display: "flex" }}>
                    <CheckIcon className={classes.checkTypo} />
                    <Typography variant="subtitle1" gutterBottom>
                      No pets
                    </Typography>
                  </Box>
                  <Box style={{ display: "flex" }}>
                    <CheckIcon className={classes.checkTypo} />
                    <Typography variant="subtitle1" gutterBottom>
                      No smoking
                    </Typography>
                  </Box>
                  <Box style={{ display: "flex" }}>
                    <CheckIcon className={classes.checkTypo} />
                    <Typography variant="subtitle1" gutterBottom>
                      Events or parties allowed
                    </Typography>
                  </Box>

                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    style={{ marginTop: 50 }}
                  >
                    <Button onClick={handleBack}> Back</Button>
                    <Button
                      variant="contained"
                      className={classes.nextBtn}
                      onClick={handleNext}
                    >
                      Next
                    </Button>
                  </Grid>
                </form>
              </div>
            </Container>
          </TabPanel>
          {/* End Review all require Panel */}

          {/* Panel Booking instruction */}
          <TabPanel value={value} index={3} dir={theme.direction}>
            <Container component="main" maxWidth="lg">
              <CssBaseline />
              <div className={classes.paper}>
                <Typography variant="h5" gutterBottom>
                  Here’s how guests will book with you
                </Typography>
                <form>
                  <Container className={classes.cardGrid} maxWidth="lg">
                    <Grid container spacing={4}>
                      {cards.map(card => (
                        <Grid item key={card.id} xs={12} md={4}>
                          <CardActionArea>
                            <Card className={classes.card}>
                              <CardMedia
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="Image title"
                              />
                              <CardContent className={classes.cardContent}>
                                <Typography
                                  gutterBottom
                                  variant="h5"
                                  component="h2"
                                >
                                  {card.title}
                                </Typography>
                                <Typography>{card.instruction}</Typography>
                              </CardContent>
                            </Card>
                          </CardActionArea>
                        </Grid>
                      ))}
                    </Grid>
                  </Container>

                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ marginTop: 20 }}
                  >
                    You’re protected throughout
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    In the rare case there are issues, Hogo has you covered with
                    24/7 customer support, a $1,000,000 Host Guarantee, and
                    completely penalty-free cancellations if you’re
                    uncomfortable with a reservation.
                  </Typography>

                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    style={{ marginTop: 50 }}
                  >
                    <Button onClick={handleBack}> Back</Button>
                    <Button
                      variant="contained"
                      className={classes.nextBtn}
                      onClick={handleNext}
                    >
                      Next
                    </Button>
                  </Grid>
                </form>
              </div>
            </Container>
          </TabPanel>
          {/* End Booking instruction Panel */}

          {/* Panel Calendar cautions */}
          <TabPanel value={value} index={4} dir={theme.direction}>
            <Container component="main" maxWidth="sm">
              <CssBaseline />
              <div className={classes.paper}>
                <Typography variant="h5" gutterBottom>
                  Successful hosting starts with an accurate calendar
                </Typography>
                <form>
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ marginTop: 20 }}
                  >
                    Guests will book available days instantly. Only get booked
                    when you can host by keeping your calendar and availability
                    settings up-to-date.
                  </Typography>
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ marginTop: 10 }}
                  >
                    Canceling disrupts guests’ plans. If you cancel because your
                    calendar is inaccurate, you’ll be charged a penalty fee and
                    the dates won’t be available for anyone else to book.
                  </Typography>
                  <FormControlLabel
                    style={{ marginTop: 30 }}
                    control={
                      <HogoCheckbox
                        checked={state.checkedG}
                        onChange={handleCheckChange("checkedG")}
                        value="checkedG"
                      />
                    }
                    label="Got it! I’ll keep my calendar up to date.
"
                  />

                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    style={{ marginTop: 50 }}
                  >
                    <Button onClick={handleBack}> Back</Button>
                    <Button
                      variant="contained"
                      className={classes.nextBtn}
                      onClick={handleNext}
                    >
                      Next
                    </Button>
                  </Grid>
                </form>
              </div>
            </Container>
          </TabPanel>
          {/* End Calendar cautions Panel */}

          {/* Panel Notify  */}
          <TabPanel value={value} index={5} dir={theme.direction}>
            <Container component="main" maxWidth="sm">
              <CssBaseline />
              <div className={classes.paper}>
                <Typography variant="h5" gutterBottom>
                  How much notice do you need before a guest arrives?
                </Typography>
                <form>
                  <RadioGroup value={radValue6} onChange={handleRadChange6} row>
                    <FormControlLabel
                      value="sameDay"
                      control={<HogoRadio />}
                      label="Same Day"
                    />
                    <FormControlLabel
                      value="1day"
                      control={<HogoRadio />}
                      label="1 Day"
                    />
                    <FormControlLabel
                      value="2days"
                      control={<HogoRadio />}
                      label="2 Days"
                    />
                    <FormControlLabel
                      value="3days"
                      control={<HogoRadio />}
                      label="3 Days"
                    />
                    <FormControlLabel
                      value="7days"
                      control={<HogoRadio />}
                      label="7 Days"
                    />
                  </RadioGroup>

                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    style={{ marginTop: 20 }}
                  >
                    Tip: At least 2 days’ notice can help you plan for a guest’s
                    arrival, but you might miss out on last-minute trips.
                  </Typography>

                  <Divider />
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ marginTop: 30 }}
                  >
                    When can guests check in?
                  </Typography>
                  <Box display="flex" justifyContent="space-between">
                    <Autocomplete
                      options={times}
                      getOptionLabel={option => option.time}
                      style={{ width: 300 }}
                      renderInput={params => (
                        <TextField
                          {...params}
                          label="From"
                          variant="outlined"
                          fullWidth
                        />
                      )}
                    />
                    <Autocomplete
                      options={times}
                      getOptionLabel={option => option.time}
                      style={{ width: 300 }}
                      renderInput={params => (
                        <TextField
                          {...params}
                          label="To"
                          variant="outlined"
                          fullWidth
                        />
                      )}
                    />
                  </Box>

                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    style={{ marginTop: 50 }}
                  >
                    <Button onClick={handleBack}> Back</Button>
                    <Button
                      variant="contained"
                      className={classes.nextBtn}
                      onClick={handleNext}
                    >
                      Next
                    </Button>
                  </Grid>
                </form>
              </div>
            </Container>
          </TabPanel>
          {/* End Notify Panel */}

          {/* Panel How long  */}
          <TabPanel value={value} index={6} dir={theme.direction}>
            <Container component="main" maxWidth="sm">
              <CssBaseline />
              <div className={classes.paper}>
                <Typography variant="h5" gutterBottom>
                  How far in advance can guests book?
                </Typography>
                <form>
                  <RadioGroup value={radValue7} onChange={handleRadChange7}>
                    <FormControlLabel
                      value="anytime "
                      control={<HogoRadio />}
                      label="Any time"
                    />
                    <FormControlLabel
                      value="3months"
                      control={<HogoRadio />}
                      label="3 months in advance"
                    />
                    <FormControlLabel
                      value="6months"
                      control={<HogoRadio />}
                      label="6 months in advance"
                    />
                    <FormControlLabel
                      value="9months"
                      control={<HogoRadio />}
                      label="9 months in advance"
                    />
                    <FormControlLabel
                      value="1year"
                      control={<HogoRadio />}
                      label="1 year"
                    />
                  </RadioGroup>

                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    style={{ marginTop: 50 }}
                  >
                    <Button onClick={handleBack}> Back</Button>
                    <Button
                      variant="contained"
                      className={classes.nextBtn}
                      onClick={handleNext}
                    >
                      Next
                    </Button>
                  </Grid>
                </form>
              </div>
            </Container>
          </TabPanel>
          {/* End How long Panel */}

          {/* Panel Set house rules */}
          <TabPanel value={value} index={7} dir={theme.direction}>
            <Container component="main" maxWidth="sm">
              <CssBaseline />
              <div className={classes.paper}>
                <Typography component="h1" variant="h5" gutterBottom>
                  How long can guests stay?
                </Typography>
                <form>
                  <Paper component="form" className={classes.numberRoot}>
                    <InputBase
                      className={classes.numberInput}
                      placeholder="Night min"
                      value={minNight + " nights min"}
                    >
                      {minNight} nights min
                    </InputBase>
                    <Divider className={classes.divider} />
                    <IconButton
                      className={classes.iconButton}
                      onClick={() =>
                        minNight === 0 ? minNight : setMinNight(minNight - 1)
                      }
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Divider className={classes.divider} />
                    <IconButton
                      className={classes.iconButton}
                      onClick={() => setMinNight(minNight + 1)}
                    >
                      <AddIcon />
                    </IconButton>
                  </Paper>

                  <Paper component="form" className={classes.numberRoot}>
                    <InputBase
                      className={classes.numberInput}
                      placeholder="Night min"
                      value={maxNight + " nights max"}
                    />
                    <Divider className={classes.divider} />
                    <IconButton
                      className={classes.iconButton}
                      onClick={() =>
                        maxNight === 0 ? maxNight : setMaxNight(maxNight - 1)
                      }
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Divider className={classes.divider} />
                    <IconButton
                      className={classes.iconButton}
                      onClick={() => setMaxNight(maxNight + 1)}
                    >
                      <AddIcon />
                    </IconButton>
                  </Paper>

                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    style={{ marginTop: 50 }}
                  >
                    <Button onClick={handleBack}> Back</Button>
                    <Button
                      variant="contained"
                      className={classes.nextBtn}
                      onClick={handleNext}
                    >
                      Next
                    </Button>
                  </Grid>
                </form>
              </div>
            </Container>
          </TabPanel>
          {/* End Set house rules Panel */}

          {/* Panel Set price */}
          <TabPanel value={value} index={8} dir={theme.direction}>
            <Container component="main" maxWidth="sm">
              <CssBaseline />
              <div className={classes.paper}>
                <Typography component="h1" variant="h5" gutterBottom>
                  Price Your Space
                </Typography>
                <form>
                  <Typography style={{ marginTop: 30 }} variant="subtitle1">
                    <Box fontWeight="fontWeightBold" m={1}>
                      Base price
                    </Box>
                  </Typography>
                  <Typography variant="subtitle1">
                    This will be your default price
                  </Typography>
                  <FormControl
                    fullWidth
                    className={classes.margin}
                    variant="outlined"
                  >
                    <OutlinedInput
                      type="number"
                      value={priceValue.basePrice}
                      onChange={handlePriceChange("basePrice")}
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                    />
                  </FormControl>
                  <Link style={{ color: "#018F84" }}>Suggest: $100</Link>

                  <Typography style={{ marginTop: 30 }} variant="subtitle1">
                    <Box fontWeight="fontWeightBold" m={1}>
                      Minimum price
                    </Box>
                  </Typography>
                  <Typography variant="subtitle1">
                    When demand for your space is low, nightly prices will drop
                    to attract more guests to book. What’s the lowest price
                    you’re comfortable with?
                  </Typography>
                  <FormControl
                    fullWidth
                    className={classes.margin}
                    variant="outlined"
                  >
                    <OutlinedInput
                      type="number"
                      value={priceValue.minPrice}
                      onChange={handlePriceChange("minPrice")}
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                    />
                  </FormControl>
                  <Link style={{ color: "#018F84" }}>Suggest: $100</Link>

                  <Typography style={{ marginTop: 30 }} variant="subtitle1">
                    <Box fontWeight="fontWeightBold" m={1}>
                      Maximum price
                    </Box>
                  </Typography>
                  <Typography variant="subtitle1">
                    If demand is high, e.g. if there’s a popular festival in
                    town, what’s the highest price you’re willing to charge
                    guests per night?
                  </Typography>
                  <FormControl
                    fullWidth
                    className={classes.margin}
                    variant="outlined"
                  >
                    <OutlinedInput
                      type="number"
                      value={priceValue.maxPrice}
                      onChange={handlePriceChange("maxPrice")}
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                    />
                  </FormControl>
                  <Link style={{ color: "#018F84" }}>Suggest: $100</Link>

                  <Typography style={{ marginTop: 30 }} variant="subtitle1">
                    <Box fontWeight="fontWeightBold" m={1}>
                      You’re always in control of your nightly price. You can
                      change this later in settings.
                    </Box>
                  </Typography>

                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    style={{ marginTop: 50 }}
                  >
                    <Button onClick={handleBack}> Back</Button>
                    <Button
                      variant="contained"
                      className={classes.nextBtn}
                      onClick={handleNext}
                    >
                      Next
                    </Button>
                  </Grid>
                </form>
              </div>
            </Container>
          </TabPanel>
          {/* End Set price Panel */}

          {/* Panel Law */}
          <TabPanel value={value} index={9} dir={theme.direction}>
            <Container component="main" maxWidth="sm">
              <CssBaseline />
              <div className={classes.paper}>
                <Typography variant="h5" gutterBottom>
                  Your local laws and taxes
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Make sure you familiarize yourself with your local laws, as
                  well as{" "}
                  <Link style={{ color: "#018F84" }}>
                    Hogo’s Nondiscrimination Policy.
                  </Link>
                </Typography>
                <form>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    style={{ marginTop: 30 }}
                  >
                    Take a moment to review the local laws that apply to your
                    listing. We want to make sure you have everything you need
                    to get off to a great start.
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    style={{ marginTop: 10 }}
                  >
                    Most cities have rules covering homesharing, and the
                    specific codes and ordinances can appear in many places
                    (such as zoning, building, licensing or tax codes). In most
                    places, you must register, get a permit, or obtain a license
                    before you list your property or accept guests. You may also
                    be responsible for collecting and remitting certain taxes.
                    In some places, short-term rentals could be prohibited
                    altogether.
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    style={{ marginTop: 10 }}
                  >
                    Since you are responsible for your own decision to list or
                    book, you should get comfortable with the applicable rules
                    before listing on Hogo. To get you started, we offer some
                    helpful resources under "Your City Laws."
                  </Typography>
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ marginTop: 30 }}
                  >
                    By accepting our Terms of Service and listing your space,
                    you certify that you will follow applicable laws and
                    regulations.
                  </Typography>

                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    style={{ marginTop: 50 }}
                  >
                    <Button onClick={handleBack}> Back</Button>
                    <Button
                      variant="contained"
                      className={classes.nextBtn}
                      href="/hosting"
                    >
                      Finish
                    </Button>
                  </Grid>
                </form>
              </div>
            </Container>
          </TabPanel>
          {/* End Law Panel */}
        </SwipeableViews>
      </div>
    </React.Fragment>
  );
}
