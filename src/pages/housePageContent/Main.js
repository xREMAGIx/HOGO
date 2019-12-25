import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import WifiIcon from "@material-ui/icons/Wifi";
import TvIcon from "@material-ui/icons/Tv";
import LocalParkingIcon from "@material-ui/icons/LocalParking";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { DatePicker } from "@material-ui/pickers";
import Rating from "@material-ui/lab/Rating";
import Portal from "@material-ui/core/Portal";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";

import { Badge } from "@material-ui/core";
//import { makeJSDateObject } from "../../../utils/helpers";

import "../Map.css";

import Markdown from "../Markdown.js";

const useStyles = makeStyles(theme => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0)
  },
  grid: {
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5)
  },
  reviewGrid: {
    marginTop: theme.spacing(5)
  },
  btn: {
    textTransform: "none",
    color: "#018F84"
  }
}));

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const reviews = [
  {
    id: 1,
    name: "Monica",
    say:
      "I had great experiences here! They treat me so well and I can also use their kitchen.",
    star: 4
  },
  {
    id: 2,
    name: "Tara ",
    say:
      "The Shell house is so cute! We loved the 2 shells because we were travelling with 2 couples so it worked out perfectly.",
    star: 5
  },
  {
    id: 3,
    name: "Monica",
    say: "Absolutely beautiful!!!",
    star: 5
  },
  {
    id: 4,
    name: "Monica",
    say: "Absolutely beautiful!!!",
    star: 5
  },
  {
    id: 5,
    name: "Monica",
    say: "Absolutely beautiful!!!",
    star: 5
  },
  {
    id: 6,
    name: "Monica",
    say: "Absolutely beautiful!!!",
    star: 5
  }
];

const reviewsAddition = [
  {
    id: 1,
    name: "Monica",
    say:
      "I had great experiences here! They treat me so well and I can also use their kitchen.",
    star: 4
  },
  {
    id: 2,
    name: "Tara ",
    say:
      "The Shell house is so cute! We loved the 2 shells because we were travelling with 2 couples so it worked out perfectly.",
    star: 5
  },
  {
    id: 3,
    name: "Monica",
    say: "Absolutely beautiful!!!",
    star: 5
  }
];

export default function Main(props) {
  const classes = useStyles();
  const { posts, title } = props;

  const [lat] = React.useState(51.505);
  const [lng] = React.useState(-0.09);
  const [zoom] = React.useState(13);

  const position = [lat, lng];

  const [date, changeDate] = useState(new Date());

  const [show, setShow] = React.useState(false);
  const container = React.useRef(null);

  const handleClick = () => {
    setShow(!show);
  };

  const [selectedDays, setSelectedDays] = useState([1, 2, 15]);
  const [selectedDate, handleDateChange] = useState(new Date());

  const handleMonthChange = async () => {
    // just select random days to simulate server side based data
    return new Promise(resolve => {
      setTimeout(() => {
        setSelectedDays([1, 2, 3].map(() => getRandomNumber(1, 28)));
        resolve();
      }, 1000);
    });
  };

  return (
    <React.Fragment>
      <Grid item xs={12} md={7} className={classes.grid}>
        <Grid container spacing={2}>
          <Grid item>
            <Typography variant="h3" gutterBottom>
              {title}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar sizes="large">
              <AccountCircleIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Typography variant="subtitle1" gutterBottom>
          Host by .......
        </Typography>
        <Divider />
        <Typography variant="subtitle1" gutterBottom>
          Entire cabin: 2 guests - 1 bedroom - 1 bed - 1 bath
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Nights limit: 3
        </Typography>
        <Divider />

        {/* Amenities contents */}
        <Typography variant="subtitle1" gutterBottom>
          <Box fontWeight="fontWeightBold" m={1}>
            Amenities
          </Box>
        </Typography>
        <Grid container justify="space-around">
          <Grid container xs={6}>
            <Grid container spacing={1}>
              <Grid item>
                <RestaurantIcon />
              </Grid>
              <Grid item>
                <Typography variant="body1" gutterBottom>
                  Kitchen
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item>
                <WifiIcon />
              </Grid>
              <Grid item>
                <Typography variant="body1" gutterBottom>
                  Wifi
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid container xs={6}>
            <Grid container spacing={1}>
              <Grid item>
                <LocalParkingIcon />
              </Grid>
              <Grid item>
                <Typography variant="body1" gutterBottom>
                  Free parking
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item>
                <TvIcon />
              </Grid>
              <Grid item>
                <Typography variant="body1" gutterBottom>
                  Television
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* End Amenities contents */}
        <Divider />

        {/* The location content */}
        <Typography variant="subtitle1" gutterBottom>
          <Box fontWeight="fontWeightBold" m={1}>
            The location
          </Box>
        </Typography>
        <Typography variant="body2">
          You will need either a taxi or a golf cart rental as we are in the
          residential neighborhood.
        </Typography>
        <Grid md={12}>
          <Map className="mini" center={position} zoom={zoom}>
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
        {/* End the location content */}
        <Divider />

        {/* Availability content */}
        <Typography variant="subtitle1" gutterBottom>
          <Box fontWeight="fontWeightBold" m={1}>
            Availability
          </Box>
        </Typography>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            {/* <DatePicker
            disablePast
            disableToolbar
            autoOk
            variant="static"
            openTo="date"
            value={date}
            onChange={changeDate}
            onMonthChange={handleMonthChange}
            renderDay={(day, selectedDate, isInCurrentMonth, dayComponent) => {
              //const date = makeJSDateObject(day); // skip this step, it is required to support date libs
              const isSelected =
                isInCurrentMonth && selectedDays.includes(date.getDate());

              // You can also use our internal <Day /> component
              return (
                <Badge badgeContent={isSelected ? "abc" : undefined}>
                  {dayComponent}
                </Badge>
              );
            }}
          /> */}
            <DatePicker
              disablePast
              disableToolbar
              autoOk
              variant="static"
              openTo="date"
              value={date}
              onChange={changeDate}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        {/* End Availability content */}
        <Divider />

        {/* Review contents */}
        <Typography variant="subtitle1" gutterBottom>
          <Box fontWeight="fontWeightBold" m={1}>
            Reviews
          </Box>
        </Typography>
        <Grid>
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
                    <Typography variant="body1">{review.say}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Box component="fieldset" mb={3} borderColor="transparent">
                      <Rating name="read-only" value={review.star} readOnly />
                    </Box>
                  </Grid>
                </Grid>
              )
          )}

          <div ref={container} />
        </Grid>
        <Button className={classes.btn} onClick={handleClick}>
          {show ? "Hide reviews ^" : "Show all reviews v"}
        </Button>
        {show ? (
          <Portal container={container.current}>
            {reviews.map(
              review =>
                review.id >= 4 && (
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
                      <Typography variant="body1">{review.say}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Box
                        component="fieldset"
                        mb={3}
                        borderColor="transparent"
                      >
                        <Rating name="read-only" value={review.star} readOnly />
                      </Box>
                    </Grid>
                  </Grid>
                )
            )}
          </Portal>
        ) : null}
        {/* End Review contents */}
        <Divider />

        {/* {posts.map(post => (
        <Markdown className={classes.markdown} key={post.substring(0, 40)}>
          {post}
        </Markdown>
      ))} */}
      </Grid>
    </React.Fragment>
  );
}

Main.propTypes = {
  title: PropTypes.string
};
