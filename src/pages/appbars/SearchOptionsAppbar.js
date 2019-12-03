import React from "react";
import AppBar from "@material-ui/core/AppBar";

import Toolbar from "@material-ui/core/Toolbar";
import { fade, makeStyles } from "@material-ui/core/styles";

import MoreFiltersModal from "../modals/MoreFiltersModal";

import PricePopover from "../popovers/PricePopover";
import TypeOfPlacePopover from "../popovers/TypeOfPlacePopover";
import GuestPopover from "../popovers/GuestPopover";
import DatesPopover from "../popovers/DatesPopover";

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
  }
}));

export default function SearchOptionsAppbar() {
  const classes = useStyles();
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
