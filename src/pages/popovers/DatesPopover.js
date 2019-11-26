import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import grey from "@material-ui/core/colors/grey";

import Grid from "@material-ui/core/Grid";

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

const useStyles = makeStyles(theme => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
    padding: theme.spacing(3)
  },
  margin: {
    height: 280,
    width: 350,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  btnSearchOptions: {
    margin: theme.spacing(1)
  },
  typographyMargin: {
    padding: theme.spacing(1)
  },
  formControl: {
    margin: theme.spacing(3)
  }
}));

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(grey[900]),
    backgroundColor: grey[900],
    "&:hover": {
      backgroundColor: grey[700]
    }
  }
}))(Button);

const TextButton = withStyles(theme => ({
  root: {
    textDecoration: "underline",
    color: "#018F84",

    "&:hover": {
      backgroundColor: grey[300]
    }
  }
}))(Button);

export default function DatesPopover() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClearClick = () => {
    setCheckinDate(Date.now());
    setCheckoutDate(Date.now());
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [checkinDate, setCheckinDate] = React.useState(new Date(Date.now()));
  const [checkoutDate, setCheckoutDate] = React.useState(new Date(Date.now()));

  const handleCheckinChange = date => {
    setCheckinDate(date);
  };

  const handleCheckoutChange = date => {
    setCheckoutDate(date);
  };

  return (
    <React.Fragment>
      <Button
        className={classes.btnSearchOptions}
        variant="outlined"
        color="inherit"
        aria-describedby={id}
        onClick={handleClick}
      >
        Dates
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <Paper className={classes.margin}>
          <Typography className={classes.typographyMargin} gutterBottom>
            Dates
          </Typography>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
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
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
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

          <Box
            marginTop={3}
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            width={300}
          >
            <TextButton size="small" color="inherit" onClick={handleClearClick}>
              Clear
            </TextButton>
            <ColorButton variant="contained" color="inherit">
              Save
            </ColorButton>
          </Box>
        </Paper>
      </Popover>
    </React.Fragment>
  );
}
