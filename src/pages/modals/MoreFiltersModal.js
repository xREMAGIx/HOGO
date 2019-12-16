import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import grey from "@material-ui/core/colors/grey";
import Checkbox from "@material-ui/core/Checkbox";
import { Grid, Divider } from "@material-ui/core";

import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    //border: "2px solid #000"
    //boxShadow: theme.shadows[5]
    height: 500,
    width: 600
  },
  container: {
    width: 420,
    height: 400,
    overflow: "auto"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  btnSearchOptions: {
    margin: theme.spacing(1)
  },
  typographyMargin: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1)
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

export default function MoreFiltersModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [state, setState] = React.useState({
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

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const handleClearClick = () => {
    setState(false, false, false);
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

  const [adultsCount, setAdultsCount] = React.useState(0);
  const [childrenCount, setChildrenCount] = React.useState(0);
  const [infrantsCount, setInfrantsCount] = React.useState(0);

  return (
    <React.Fragment>
      <Button
        className={classes.btnSearchOptions}
        variant="outlined"
        color="inherit"
        onClick={handleOpen}
      >
        More Filters
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <Container component="main" maxWidth="xs" className={classes.paper}>
            <Typography
              className={classes.typographyMargin}
              variant="h5"
              gutterBottom
            >
              More filters
            </Typography>
            <CssBaseline />

            {/* Body Contents */}
            <Box className={classes.container}>
              {/* Rooms and Beds */}
              <Typography
                className={classes.typographyMargin}
                variant="h6"
                gutterBottom
              >
                Rooms and Beds
              </Typography>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="flex-end"
                alignItems="center"
                width={400}
              >
                <Typography variant="subtitle1">Beds: </Typography>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  width={300}
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
                width={400}
              >
                <Typography variant="subtitle1">Bedrooms:</Typography>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  width={300}
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
                width={400}
              >
                <Typography variant="subtitle1">Bathrooms: </Typography>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  width={300}
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
              <Divider />

              {/* Amenities */}
              <Typography
                className={classes.typographyMargin}
                variant="h6"
                gutterBottom
              >
                Amenities
              </Typography>
              <Grid container spacing={0}>
                <Grid item xs={6}>
                  <FormControlLabel
                    control={
                      <BlackCheckbox
                        checked={kitchen}
                        onChange={handleChange("kitchen")}
                        value="kitchen"
                      />
                    }
                    label="Kitchen"
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControlLabel
                    control={
                      <BlackCheckbox
                        checked={shampoo}
                        onChange={handleChange("shampoo")}
                        value="shampoo"
                      />
                    }
                    label="Shampoo"
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControlLabel
                    control={
                      <BlackCheckbox
                        checked={heating}
                        onChange={handleChange("heating")}
                        value="heating"
                      />
                    }
                    label="Heating"
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControlLabel
                    control={
                      <BlackCheckbox
                        checked={washer}
                        onChange={handleChange("washer")}
                        value="washer"
                      />
                    }
                    label="Washer"
                  />
                </Grid>
              </Grid>
              <Divider />

              {/* Facilities */}
              <Typography
                className={classes.typographyMargin}
                variant="h6"
                gutterBottom
              >
                Facilities
              </Typography>
              <Grid container spacing={0}>
                <Grid item xs={6}>
                  <FormControlLabel
                    control={
                      <BlackCheckbox
                        checked={freeParking}
                        onChange={handleChange("freeParking")}
                        value="freeParking"
                      />
                    }
                    label="Free Parking"
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControlLabel
                    control={
                      <BlackCheckbox
                        checked={gym}
                        onChange={handleChange("gym")}
                        value="gym"
                      />
                    }
                    label="Gym"
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControlLabel
                    control={
                      <BlackCheckbox
                        checked={hotTub}
                        onChange={handleChange("hotTub")}
                        value="hotTub"
                      />
                    }
                    label="Hot Tub"
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControlLabel
                    control={
                      <BlackCheckbox
                        checked={pool}
                        onChange={handleChange("pool")}
                        value="pool"
                      />
                    }
                    label="Pool"
                  />
                </Grid>
              </Grid>
              <Divider />

              {/* House Rules */}
              <Typography
                className={classes.typographyMargin}
                variant="h6"
                gutterBottom
              >
                House Rules
              </Typography>
              <Grid container spacing={0}>
                <Grid item xs={6}>
                  <FormControlLabel
                    control={
                      <BlackCheckbox
                        checked={suitableForEvents}
                        onChange={handleChange("suitableForEvents")}
                        value="suitableForEvents"
                      />
                    }
                    label="Suitable for events"
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControlLabel
                    control={
                      <BlackCheckbox
                        checked={petAllowed}
                        onChange={handleChange("petAllowed")}
                        value="petAllowed"
                      />
                    }
                    label="Pet Allowed"
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControlLabel
                    control={
                      <BlackCheckbox
                        checked={smokingAllowed}
                        onChange={handleChange("smokingAllowed")}
                        value="smokingAllowed"
                      />
                    }
                    label="Smoking Allowed"
                  />
                </Grid>
              </Grid>
              <Divider />
            </Box>

            {/* Modal buttons */}
            <Box
              marginTop={3}
              marginBottom={1}
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
          </Container>
        </Fade>
      </Modal>
    </React.Fragment>
  );
}
