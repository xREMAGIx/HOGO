import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import grey from "@material-ui/core/colors/grey";

import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles(theme => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
    padding: theme.spacing(3)
  },
  margin: {
    height: 350,
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
  description: {
    marginLeft: theme.spacing(4),
    color: grey[500]
  },

  formControl: {
    width: 300,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  }
}));

const BlackCheckbox = withStyles({
  root: {
    color: grey[400],
    "&$checked": {
      color: grey[900]
    }
  },
  checked: {}
})(props => <Checkbox color="default" {...props} />);

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

export default function TypeOfPlacePopover() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [state, setState] = React.useState({
    entirePlace: false,
    privateRoom: false,
    hotelRoom: false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const handleClearClick = () => {
    setState(false, false, false);
  };

  const { entirePlace, privateRoom, hotelRoom } = state;

  return (
    <React.Fragment>
      <Button
        className={classes.btnSearchOptions}
        variant="outlined"
        color="inherit"
        aria-describedby={id}
        onClick={handleClick}
      >
        Type Of Place
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
            Type Of Place
          </Typography>
          <FormControl className={classes.formControl} component="fieldset">
            {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
            <FormGroup>
              <FormControlLabel
                control={
                  <BlackCheckbox
                    checked={entirePlace}
                    onChange={handleChange("entirePlace")}
                    value="entirePlace"
                  />
                }
                label="Entire Place"
              />
              <Typography variant="captiontext" className={classes.description}>
                Have a entire place for yourself
              </Typography>
              <FormControlLabel
                control={
                  <BlackCheckbox
                    checked={privateRoom}
                    onChange={handleChange("privateRoom")}
                    value="privateRoom"
                  />
                }
                label="Private Room"
              />
              <Typography variant="captiontext" className={classes.description}>
                Have your own room and share some common spaces
              </Typography>
              <FormControlLabel
                control={
                  <BlackCheckbox
                    checked={hotelRoom}
                    onChange={handleChange("hotelRoom")}
                    value="hotelRoom"
                  />
                }
                label="Hotel Room"
              />
              <Typography variant="captiontext" className={classes.description}>
                Have a private or shared room in a boutique hotel, hostel, and
                more
              </Typography>
            </FormGroup>
            {/* <FormHelperText>Be careful</FormHelperText> */}
          </FormControl>
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
