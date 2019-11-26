import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import SignUpModal from "./modals/SignUpModal";
import LoginModal from "./modals/LoginModal";
import MoreFiltersModal from "./modals/MoreFiltersModal";

import PricePopover from "./popovers/PricePopover";
import TypeOfPlacePopover from "./popovers/TypeOfPlacePopover";
import GuestPopover from "./popovers/GuestPopover";
import DatesPopover from "./popovers/DatesPopover";
import { CardActionArea } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { fade, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import ButtonBase from "@material-ui/core/ButtonBase";

import "./Map.css";

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
  appBar: {
    backgroundColor: theme.palette.common.white,
    borderBottom: `1px solid ${theme.palette.divider}`
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
  btnSearchOptions: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  btnSearch: {
    color: theme.palette.common.white,
    backgroundColor: "#FF5A60",
    "&:hover": {
      backgroundColor: "#FF787D"
    },
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px"
  },

  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 500
    }
  },

  //CSS Travel
  imgTravelRoot: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 200,
    width: "100%"
  },
  image: {
    margin: theme.spacing(0, 0.7, 0, 0.7),
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15
      },
      "& $imageMarked": {
        opacity: 0
      },
      "& $imageTitle": {
        border: "4px solid currentColor"
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%"
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity")
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
      6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity")
  },

  //CSS top-rate card
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
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
  }
}));

function Searchpage() {
  //   state = {
  //     lat: Number,
  //     lng: Number,
  //     zoom: Number
  //   };

  const [lat, setLat] = React.useState(51.505);
  const [lng, setLng] = React.useState(-0.09);
  const [zoom, setZoom] = React.useState(13);

  const position = [lat, lng];
  const classes = useStyles();
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
        <AppBar
          position="relative"
          color="default"
          elevation={0}
          className={classes.appBar}
        >
          <Toolbar className={classes.toolbar}>
            <Typography
              variant="h3"
              color="inherit"
              noWrap
              className={classes.toolbarTitle}
            >
              HoGo
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <Button variant="contained" className={classes.btnSearch}>
              Search
            </Button>
            <div className={classes.button}>
              <Button
                variant="button"
                color="textPrimary"
                href="#"
                className={classes.link}
              >
                Become a host
              </Button>
              <Button
                variant="button"
                color="textPrimary"
                href="#"
                className={classes.link}
              >
                Help
              </Button>
              <SignUpModal />
              <LoginModal />
            </div>
          </Toolbar>
        </AppBar>
        {/* End Header AppBar */}

        {/* Search Option Appbar */}
        <AppBar
          position="relative"
          color="default"
          elevation={0}
          className={classes.appBar}
        >
          <Toolbar className={classes.toolbar}>
            <DatesPopover />
            <GuestPopover />
            <TypeOfPlacePopover />
            <PricePopover />
            <MoreFiltersModal />
          </Toolbar>
        </AppBar>
        {/* End Search Option Appbar */}
      </AppBar>

      <Map className="map" center={position} zoom={zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    </React.Fragment>
  );
}

export default Searchpage;
