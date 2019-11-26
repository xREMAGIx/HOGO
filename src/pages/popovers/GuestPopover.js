import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import grey from "@material-ui/core/colors/grey";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
    padding: theme.spacing(3)
  },
  margin: {
    height: 270,
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

  const [adultsCount, setAdultsCount] = React.useState(0);
  const [childrenCount, setChildrenCount] = React.useState(0);
  const [infrantsCount, setInfrantsCount] = React.useState(0);

  const handleClearClick = () => {};

  return (
    <React.Fragment>
      <Button
        className={classes.btnSearchOptions}
        variant="outlined"
        color="inherit"
        aria-describedby={id}
        onClick={handleClick}
      >
        Guest
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
          <Typography variant="h6" className={classes.typographyMargin}>
            Guest
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-end"
            alignItems="center"
            width={300}
          >
            <Typography variant="subtitle1">Adults: </Typography>
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
                  adultsCount === 0
                    ? adultsCount
                    : setAdultsCount(adultsCount - 1)
                }
              >
                <RemoveCircleOutlineIcon />
              </IconButton>
              <Typography variant="subtitle1">{adultsCount}</Typography>
              <IconButton
                aria-label="plus"
                onClick={() => setAdultsCount(adultsCount + 1)}
              >
                <AddCircleOutlineOutlinedIcon />
              </IconButton>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-end"
            alignItems="center"
            width={300}
          >
            <Typography variant="subtitle1">Children:</Typography>
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
                  childrenCount === 0
                    ? childrenCount
                    : setChildrenCount(childrenCount - 1)
                }
              >
                <RemoveCircleOutlineIcon />
              </IconButton>
              <Typography variant="subtitle1">{childrenCount}</Typography>
              <IconButton
                aria-label="plus"
                onClick={() => setChildrenCount(childrenCount + 1)}
              >
                <AddCircleOutlineOutlinedIcon />
              </IconButton>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-end"
            alignItems="center"
            width={300}
          >
            <Typography variant="subtitle1">Infants: </Typography>
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
                  infrantsCount === 0
                    ? infrantsCount
                    : setInfrantsCount(infrantsCount - 1)
                }
              >
                <RemoveCircleOutlineIcon />
              </IconButton>
              <Typography variant="subtitle1">{infrantsCount}</Typography>
              <IconButton
                aria-label="plus"
                onClick={() => setInfrantsCount(infrantsCount + 1)}
              >
                <AddCircleOutlineOutlinedIcon />
              </IconButton>
            </Box>
          </Box>

          <Box
            marginTop={2}
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
