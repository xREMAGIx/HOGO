// import React from "react";
// import PropTypes from "prop-types";
// import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";
// import Typography from "@material-ui/core/Typography";
// import Link from "@material-ui/core/Link";

import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import StarIcon from "@material-ui/icons/Star";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200]
  },
  sidebarSection: {
    marginTop: theme.spacing(3)
  },
  paper: {
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(5),

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
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#FF5A60",
    color: theme.palette.getContrastText("#FF5A60")
  },
  gridRoot: {
    alignSelf: "flex-start",
    position: "sticky",
    top: 0
  },
  formControl: {
    marginTop: theme.spacing(3),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function BookingForm() {
  const classes = useStyles();

  const [checkinDate, setCheckinDate] = React.useState(new Date(Date.now()));
  const [checkoutDate, setCheckoutDate] = React.useState(new Date(Date.now()));

  const handleCheckinChange = date => {
    setCheckinDate(date);
  };

  const handleCheckoutChange = date => {
    setCheckoutDate(date);
  };

  const [state, setState] = React.useState({
    age: ""
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  return (
    <Grid xs={8} md={4} className={classes.gridRoot}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <FlightTakeoffIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Booking
        </Typography>
        <form className={classes.form} noValidate>
          <Typography component="h5" variant="subtitle1">
            $$$$/night
          </Typography>
          <Grid container>
            <Grid item xs={1}>
              <StarIcon
                fontSize="small"
                style={{ color: "#FF5A60" }}
              ></StarIcon>{" "}
            </Grid>
            <Grid item xs={11}>
              <Typography component="h5" variant="subtitle1">
                4.8 - (230 reviews)
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2} justify="center" alignItems="center">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid item xs={5}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-checkin"
                  label="Check in date:"
                  value={checkinDate}
                  onChange={handleCheckinChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
            <Grid item xs={2} alignItems="flex-end" justify="center">
              <ArrowRightAltIcon
                fontSize="large"
                style={{ color: "#FF5A60" }}
              ></ArrowRightAltIcon>
            </Grid>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid item xs={5}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-checkout"
                  label="Check out date:"
                  value={checkoutDate}
                  onChange={handleCheckoutChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </Grid>

          <Grid container justify="space-around">
            <Grid item>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel
                  ref={inputLabel}
                  htmlFor="outlined-age-native-simple"
                >
                  Adults
                </InputLabel>
                <Select
                  native
                  value={state.age}
                  onChange={handleChange("age")}
                  labelWidth={labelWidth}
                  inputProps={{
                    name: "age",
                    id: "outlined-age-native-simple"
                  }}
                >
                  <option value={0}>None</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel
                  ref={inputLabel}
                  htmlFor="outlined-age-native-simple"
                >
                  Children
                </InputLabel>
                <Select
                  native
                  value={state.age}
                  onChange={handleChange("age")}
                  labelWidth={labelWidth}
                  inputProps={{
                    name: "age",
                    id: "outlined-age-native-simple"
                  }}
                >
                  <option value={0}>None</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </Select>
              </FormControl>
            </Grid>

            <Grid item>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel
                  ref={inputLabel}
                  htmlFor="outlined-age-native-simple"
                >
                  Infrants
                </InputLabel>
                <Select
                  native
                  value={state.age}
                  onChange={handleChange("age")}
                  labelWidth={labelWidth}
                  inputProps={{
                    name: "age",
                    id: "outlined-age-native-simple"
                  }}
                >
                  <option value={0}>None</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Booking
          </Button>
        </form>
      </div>
    </Grid>
  );
}
