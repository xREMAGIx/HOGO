import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import IconButton from "@material-ui/core/IconButton";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import { Map, TileLayer } from "react-leaflet";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

import "../Map.css";

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
  }
}));

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

const bedrooms = [
  {
    title: "1 bedroom"
  },
  {
    title: "2 bedrooms"
  },
  {
    title: "3 bedrooms"
  },
  {
    title: "4 bedrooms"
  },
  {
    title: "5 bedrooms"
  }
];

export default function BHost1() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleNext = () => {
    setValue(value + 1);
  };

  const handleBack = () => {
    setValue(value - 1);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  const [placeTypeValue1, setplaceTypeValue1] = React.useState("entire place");

  const handleplaceTypeChange1 = event => {
    setplaceTypeValue1(event.target.value);
  };

  const [placeTypeValue2, setplaceTypeValue2] = React.useState("yes");

  const handleplaceTypeChange2 = event => {
    setplaceTypeValue2(event.target.value);
  };

  const [guestCount, setGuestCount] = React.useState(1);
  const [bedCount, setBedCount] = React.useState(0);
  const [bathCount, setBathCount] = React.useState(0);

  const [lat] = React.useState(51.505);
  const [lng] = React.useState(-0.09);
  const [zoom] = React.useState(13);

  const position = [lat, lng];

  const [state, setAmenitiesState] = React.useState({
    kitchen: false,
    shampoo: false,
    heating: false,
    washer: false,
    freeParking: false,
    gym: false,
    hotTub: false,
    pool: false,
    suitableForEvents: false,
    petAllowed: false,
    smokingAllowed: false
  });

  const handleAmenitiesChange = name => event => {
    setAmenitiesState({ ...state, [name]: event.target.checked });
  };

  const {
    kitchen,
    shampoo,
    heating,
    washer,
    freeParking,
    gym,
    hotTub,
    pool,
    suitableForEvents,
    petAllowed,
    smokingAllowed
  } = state;

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
              <Typography variant="h5">Step 1: About your place </Typography>
            </Grid>
          </Grid>
          <Button href="/hosting" style={{ color: "#018F84" }}>
            Save & Exit
          </Button>
        </Toolbar>
      </AppBar>

      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            centered
          >
            <Tab label="Place type" {...a11yProps(0)} />
            <Tab label="Bedrooms" {...a11yProps(1)} />
            <Tab label="Baths" {...a11yProps(2)} />
            <Tab label="Location" {...a11yProps(3)} />
            <Tab label="Amenities" {...a11yProps(4)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          {/* Panel Place type */}
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                  What kind of place are you listing?
                </Typography>
                <form className={classes.form} noValidate>
                  <FormControl
                    component="fieldset"
                    className={classes.formControl}
                  >
                    <FormLabel component="legend">
                      Choose a place type
                    </FormLabel>
                    <RadioGroup
                      value={placeTypeValue1}
                      onChange={handleplaceTypeChange1}
                    >
                      <FormControlLabel
                        value="entire place"
                        control={<Radio />}
                        label="Entire place"
                      />
                      <FormControlLabel
                        value="private room"
                        control={<Radio />}
                        label="Private room"
                      />
                      <FormControlLabel
                        value="shared room"
                        control={<Radio />}
                        label="Shared room"
                      />
                    </RadioGroup>
                  </FormControl>

                  <FormControl
                    component="fieldset"
                    className={classes.formControl}
                  >
                    <FormLabel component="legend">
                      Is this set up as a dedicated guest space?
                    </FormLabel>
                    <RadioGroup
                      value={placeTypeValue2}
                      onChange={handleplaceTypeChange2}
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="Yes, it’s primarily set up for guests"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No, I keep my personal belongings here"
                      />
                    </RadioGroup>
                  </FormControl>
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
          {/* End Place type Panel */}

          {/* Panel Bedrooms */}
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div className={classes.paper}>
                <Typography component="h1" variant="h5" gutterBottom>
                  How many guests can your place accommodate?
                </Typography>
                <form className={classes.form} noValidate>
                  <Typography variant="subtitle1">
                    Check that you have enough beds to accommodate all your
                    guests comfortably.
                  </Typography>
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="flex-end"
                    alignItems="center"
                    width={300}
                    style={{ marginTop: 20 }}
                  >
                    <Typography variant="subtitle1">Guests:</Typography>
                    <Box
                      display="flex"
                      flexDirection="row"
                      justifyContent="flex-end"
                      alignItems="center"
                      width={200}
                    >
                      <IconButton
                        aria-label="subtract"
                        onClick={() =>
                          guestCount === 1
                            ? guestCount
                            : setGuestCount(guestCount - 1)
                        }
                      >
                        <RemoveCircleOutlineIcon />
                      </IconButton>
                      <Typography variant="subtitle1">{guestCount}</Typography>
                      <IconButton
                        aria-label="plus"
                        onClick={() => setGuestCount(guestCount + 1)}
                      >
                        <AddCircleOutlineOutlinedIcon />
                      </IconButton>
                    </Box>
                  </Box>

                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ marginTop: 20, color: "grey" }}
                  >
                    How many bedrooms can guests use?
                  </Typography>
                  <Autocomplete
                    id="combo-box-demo"
                    options={bedrooms}
                    getOptionLabel={option => option.title}
                    style={{ width: 300 }}
                    renderInput={params => (
                      <TextField
                        {...params}
                        label="Bedrooms"
                        variant="outlined"
                        fullWidth
                      />
                    )}
                  />

                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ marginTop: 20, color: "grey" }}
                  >
                    How many beds can guests use?
                  </Typography>
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="flex-end"
                    alignItems="center"
                    width={300}
                    style={{ marginTop: 20 }}
                  >
                    <Typography variant="subtitle1">Beds:</Typography>
                    <Box
                      display="flex"
                      flexDirection="row"
                      justifyContent="flex-end"
                      alignItems="center"
                      width={200}
                    >
                      <IconButton
                        aria-label="subtract"
                        onClick={() =>
                          bedCount === 0 ? bedCount : setBedCount(bedCount - 1)
                        }
                      >
                        <RemoveCircleOutlineIcon />
                      </IconButton>
                      <Typography variant="subtitle1">{bedCount}</Typography>
                      <IconButton
                        aria-label="plus"
                        onClick={() => setBedCount(bedCount + 1)}
                      >
                        <AddCircleOutlineOutlinedIcon />
                      </IconButton>
                    </Box>
                  </Box>

                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    style={{ marginTop: 50 }}
                  >
                    <Button onClick={handleBack}>Back</Button>
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
          {/* End Bedrooms panel */}

          {/* Panel Baths */}
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div className={classes.paper}>
                <Typography component="h1" variant="h5" gutterBottom>
                  How many bathrooms?
                </Typography>
                <form className={classes.form} noValidate>
                  <Typography variant="subtitle1" gutterBottom>
                    Count bathrooms that don’t have a shower or bathtub as a
                    half bathroom.
                  </Typography>
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="flex-end"
                    alignItems="center"
                    width={300}
                    style={{ marginTop: 40 }}
                  >
                    <Typography variant="subtitle1">Bathrooms:</Typography>
                    <Box
                      display="flex"
                      flexDirection="row"
                      justifyContent="flex-end"
                      alignItems="center"
                      width={200}
                    >
                      <IconButton
                        aria-label="subtract"
                        onClick={() =>
                          bathCount === 0
                            ? bathCount
                            : setBathCount(bathCount - 0.5)
                        }
                      >
                        <RemoveCircleOutlineIcon />
                      </IconButton>
                      <Typography variant="subtitle1">{bathCount}</Typography>
                      <IconButton
                        aria-label="plus"
                        onClick={() => setBathCount(bathCount + 0.5)}
                      >
                        <AddCircleOutlineOutlinedIcon />
                      </IconButton>
                    </Box>
                  </Box>
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    style={{ marginTop: 50 }}
                  >
                    <Button onClick={handleBack}>Back</Button>
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
          {/* End Baths Panel */}

          {/* Panel Location */}
          <TabPanel value={value} index={3} dir={theme.direction}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div className={classes.paper}>
                <Typography component="h1" variant="h5" gutterBottom>
                  Is the pin in the right place?
                </Typography>
                <form className={classes.form} noValidate>
                  <Typography variant="subtitle1" gutterBottom>
                    If needed, you can adjust the map so the pin is in the right
                    location. Only confirmed guests will see this, so they know
                    how to get to your place.
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    style={{ marginTop: 40 }}
                  >
                    Address......
                  </Typography>
                  <Grid md={12}>
                    <Map
                      style={{ height: 300, width: "25vw" }}
                      center={position}
                      zoom={zoom}
                    >
                      <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      {/* <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker> */}
                    </Map>
                  </Grid>
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
          {/* End Location Panel */}

          {/* Panel Amenities */}
          <TabPanel value={value} index={4} dir={theme.direction}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div className={classes.paper}>
                <Typography component="h1" variant="h5" gutterBottom>
                  What amenities do you offer?
                </Typography>
                <form className={classes.form} noValidate>
                  <Typography variant="subtitle1">
                    These are just the amenities guests usually expect, but you
                    can add even more after you publish.
                  </Typography>
                  <FormControl
                    component="fieldset"
                    className={classes.formControl}
                  >
                    <FormLabel component="legend">Normal Amenities</FormLabel>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={kitchen}
                            onChange={handleAmenitiesChange("kitchen")}
                            value="kitchen"
                          />
                        }
                        label="Kitchen"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={shampoo}
                            onChange={handleAmenitiesChange("shampoo")}
                            value="shampoo"
                          />
                        }
                        label="Shampoo"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={heating}
                            onChange={handleAmenitiesChange("heating")}
                            value="heating"
                          />
                        }
                        label="Heating"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={washer}
                            onChange={handleAmenitiesChange("washer")}
                            value="washer"
                          />
                        }
                        label="Washer"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={freeParking}
                            onChange={handleAmenitiesChange("freeParking")}
                            value="freeParking"
                          />
                        }
                        label="Free Parking"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={gym}
                            onChange={handleAmenitiesChange("gym")}
                            value="gym"
                          />
                        }
                        label="Gym"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={hotTub}
                            onChange={handleAmenitiesChange("hotTub")}
                            value="hotTub"
                          />
                        }
                        label="Hot Tub"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={pool}
                            onChange={handleAmenitiesChange("pool")}
                            value="pool"
                          />
                        }
                        label="Pool"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={suitableForEvents}
                            onChange={handleAmenitiesChange(
                              "suitableForEvents"
                            )}
                            value="suitableForEvents"
                          />
                        }
                        label="Suitable For Events"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={petAllowed}
                            onChange={handleAmenitiesChange("petAllowed")}
                            value="petAllowed"
                          />
                        }
                        label="Pet Allowed"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={smokingAllowed}
                            onChange={handleAmenitiesChange("smokingAllowed")}
                            value="smokingAllowed"
                          />
                        }
                        label="Smoking Allowed"
                      />
                    </FormGroup>
                  </FormControl>
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
          {/* End Amenities Panel */}
        </SwipeableViews>
      </div>
    </React.Fragment>
  );
}
