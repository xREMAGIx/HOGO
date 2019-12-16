import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import grey from "@material-ui/core/colors/grey";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(theme => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
    padding: theme.spacing(3)
  },
  margin: {
    height: 250,
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
  }
}));

const AirbnbSlider = withStyles({
  root: {
    color: "#3a8589",
    height: 3,
    padding: "13px 0",
    width: 250
  },
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    marginTop: -12,
    marginLeft: -13,
    boxShadow: "#ebebeb 0px 2px 2px",
    "&:focus,&:hover,&$active": {
      boxShadow: "#ccc 0px 2px 3px 1px"
    },
    "& .bar": {
      // display: inline-block !important;
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)"
  },
  track: {
    height: 3
  },
  rail: {
    color: "#d8d8d8",
    opacity: 1,
    height: 3
  }
})(Slider);

function AirbnbThumbComponent(props) {
  return (
    <span {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
  );
}

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

export default function PricePopover() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [value, setValue] = React.useState([10, 1000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClearClick = () => {
    setValue([10, 1000]);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <React.Fragment>
      <Hidden smDown>
        <Button
          className={classes.btnSearchOptions}
          variant="outlined"
          color="inherit"
          aria-describedby={id}
          onClick={handleClick}
        >
          Price
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
              Price
            </Typography>
            <AirbnbSlider
              min={10}
              max={1000}
              ThumbComponent={AirbnbThumbComponent}
              getAriaLabel={index =>
                index === 0 ? "Minimum price" : "Maximum price"
              }
              defaultValue={[10, 1000]}
              value={value}
              onChange={handleChange}
            />
            <Box
              marginTop={3}
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              width={300}
            >
              <Typography className={classes.typographyMargin} gutterBottom>
                Minimum : $ {value[0]}
              </Typography>
              <Typography className={classes.typographyMargin} gutterBottom>
                Maximum : $ {value[1]}
              </Typography>
            </Box>
            <Box
              marginTop={5}
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              width={300}
            >
              <TextButton
                size="small"
                color="inherit"
                onClick={handleClearClick}
              >
                Clear
              </TextButton>
              <ColorButton variant="contained" color="inherit">
                Save
              </ColorButton>
            </Box>
          </Paper>
        </Popover>
      </Hidden>
    </React.Fragment>
  );
}
