import React from "react";
import AppBar from "@material-ui/core/AppBar";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import ButtonBase from "@material-ui/core/ButtonBase";

import SearchAppbar from "./appbars/SearchAppbar";
import SearchOptionsAppbar from "./appbars/SearchOptionsAppbar";

import { CardActionArea } from "@material-ui/core";

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

const images = [
  {
    url: "./images/newyork.jpg",
    title: "New York",
    width: "19%"
  },
  {
    url: "images/tokyo.jpg",
    title: "Tokyo",
    width: "19%"
  },
  {
    url: "images/sydney.jpg",
    title: "Sydney",
    width: "19%"
  },
  {
    url: "images/paris.jpg",
    title: "Paris",
    width: "19%"
  },
  {
    url: "images/singapore.jpg",
    title: "Singapore",
    width: "19%"
  }
];

const cards = [
  {
    id: 1,
    image: require("./images/top-rate-hotel/Jumeirah_Dar_Al_Masyaf.jpg"),
    place: "Dubai",
    title: "Jumeirah Dar Al Masyaf Hotel",
    price: "$850/night"
  },
  {
    id: 2,
    image: require("./images/top-rate-hotel/Hotel_Fasano_Rio_de_Janeiro.jpg"),
    place: "Brazil",
    title: "Fasano Rio de Janeiro Hotel",
    price: "$270/night"
  },
  {
    id: 3,
    image: require("./images/top-rate-hotel/Fogo_Island_Inn.jpg"),
    place: "Canada",
    title: "Fogo Island Inn",
    price: "$1,530/night"
  },
  {
    id: 4,
    image: require("./images/top-rate-hotel/Inkaterra_La_Casona.jpg"),
    place: "Peru",
    title: "Inkaterra La Casona",
    price: "$311/night"
  }
];

export default function Homepage() {
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
        <SearchAppbar />

        {/* Search Option Appbar */}
        <SearchOptionsAppbar />
      </AppBar>

      {/* Travel section */}
      <Container maxWidth="xl" component="main" className={classes.heroContent}>
        <Typography
          component="h5"
          variant="h5"
          align="left"
          color="textPrimary"
          gutterBottom
        >
          Travel around the world
        </Typography>
      </Container>
      <div className={classes.imgTravelRoot}>
        {images.map(image => (
          <ButtonBase
            focusRipple
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: image.width
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        ))}
      </div>
      {/* End travel section */}

      {/* Top-rate Hotel section */}
      <Container maxWidth="xl" component="main" className={classes.heroContent}>
        <Typography
          component="h5"
          variant="h5"
          align="left"
          color="textPrimary"
          gutterBottom
        >
          Top-rate Hotel
        </Typography>
      </Container>
      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={4}>
          {cards.map(card => (
            <Grid item key={card.id} xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>{card.price}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* End Top-rate Hotel section */}
    </React.Fragment>
  );
}
