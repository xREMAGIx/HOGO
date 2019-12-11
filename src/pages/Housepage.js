import React from "react";
import Button from "@material-ui/core/Button";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import ButtonBase from "@material-ui/core/ButtonBase";

import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";

import SearchAppbar from "./appbars/SearchAppbar";

import { CardActionArea } from "@material-ui/core";

import Main from "./housePageContent/Main.js";
import BookingForm from "./housePageContent/BookingForm.js";

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
  },

  //CSS Grid image list
  gridImageRoot: {
    display: "flex",
    flexWrap: "wrap",
    //justifyContent: "space-around",

    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexDirection: "column",
    width: "50%",
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
    overflowY: "inherit"
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  imageIcon: {
    color: "white"
  },
  btnImage: {
    backgroundColor: theme.palette.common.white
  },
  mainGrid: {
    marginTop: theme.spacing(3)
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

const tileData = [
  {
    //img: require("./images/top-rate-hotel/Jumeirah_Dar_Al_Masyaf.jpg"),
    url: "./images/newyork.jpg",
    title: "Image",
    author: "author",
    featured: true
  },
  {
    //img: require("./images/top-rate-hotel/Jumeirah_Dar_Al_Masyaf.jpg"),
    url: "./images/newyork.jpg",
    title: "Image",
    author: "author",
    featured: false
  },
  {
    //img: require("./images/top-rate-hotel/Jumeirah_Dar_Al_Masyaf.jpg"),
    url: "./images/newyork.jpg",
    title: "Image",
    author: "author",
    featured: false
  },
  {
    //img: require("./images/top-rate-hotel/Jumeirah_Dar_Al_Masyaf.jpg"),
    url: "./images/newyork.jpg",
    title: "Image",
    author: "author",
    featured: false
  },
  {
    //img: require("./images/top-rate-hotel/Jumeirah_Dar_Al_Masyaf.jpg"),
    url: "./images/newyork.jpg",
    title: "Image",
    author: "author",
    featured: false
  }
];

export default function Homepage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <SearchAppbar />

      {/* Image Grid List */}
      <Box position="relative">
        <Box zIndex="modal">
          <div className={classes.gridImageRoot}>
            <GridList cellHeight={200} spacing={1} className={classes.gridList}>
              {tileData.map(tile => (
                <GridListTile
                  key={tile.img}
                  cols={tile.featured ? 2 : 1}
                  rows={tile.featured ? 2 : 1}
                >
                  <ButtonBase
                    focusRipple
                    key={tile.title}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                      width: "100%",
                      height: "100%"
                    }}
                  >
                    <span
                      className={classes.imageSrc}
                      style={{
                        backgroundImage: `url(${tile.url})`
                      }}
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}></span>
                  </ButtonBase>
                  {/* <img src={tile.img} alt={tile.title} />
                  <GridListTileBar
                    title={tile.title}
                    titlePosition="top"
                    actionIcon={
                      <IconButton
                        aria-label={`star ${tile.title}`}
                        className={classes.imageIcon}
                      >
                        <StarBorderIcon />
                      </IconButton>
                    }
                    actionPosition="left"
                    className={classes.titleBar}
                  /> */}
                </GridListTile>
              ))}
            </GridList>
          </div>
        </Box>
        <Box
          color="inherit"
          position="absolute"
          p={1}
          width={250}
          top={20}
          right="3%"
          zIndex="tooltip"
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
        >
          <Button
            variant="contained"
            startIcon={<ShareIcon />}
            className={classes.btnImage}
          >
            Share
          </Button>
          <Button
            variant="contained"
            startIcon={<FavoriteIcon />}
            className={classes.btnImage}
          >
            Save
          </Button>
        </Box>

        <Box
          color="inherit"
          position="absolute"
          p={1}
          width={250}
          bottom={80}
          right="3%"
          zIndex="tooltip"
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
        >
          <Button
            variant="contained"
            startIcon={<PhotoLibraryIcon />}
            className={classes.btnImage}
          >
            View Photos
          </Button>
        </Box>
      </Box>
      {/* End Image Grid List */}

      {/* Main Content */}
      <main>
        <Grid container className={classes.mainGrid}>
          <Main title="Seashell House" />
          <BookingForm />
        </Grid>
      </main>
      {/* End Main Content */}

      {/* Similar Hotel section */}
      <Container maxWidth="xl" component="main" className={classes.heroContent}>
        <Typography
          component="h5"
          variant="h5"
          align="left"
          color="textPrimary"
          gutterBottom
        >
          Similar home
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
