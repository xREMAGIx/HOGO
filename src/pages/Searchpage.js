import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import { CardActionArea } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import StarIcon from "@material-ui/icons/Star";
import grey from "@material-ui/core/colors/grey";

import SearchAppbar from "./appbars/SearchAppbar";
import SearchOptionsAppbar from "./appbars/SearchOptionsAppbar";

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
    borderBottom: `1px solid ${theme.palette.divider}`,
    position: "sticky"
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
  cardContainer: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    overflow: "auto"
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
  cardGrid: {
    display: "flex"
    //flexDirection: "column"
  },
  containerFlex: {
    display: "flex",
    flexDirection: "row",
    marginTop: 130
  },
  cardEnd: {
    flexDirection: "column",
    justifyContent: "flex-end"
  }
}));

const cards = [
  {
    id: 1,
    image: require("./images/top-rate-hotel/Jumeirah_Dar_Al_Masyaf.jpg"),
    place: "Dubai",
    title: "Jumeirah Dar Al Masyaf Hotel",
    price: "$850/night",
    rating: 4.9,
    amenities: "wifi, heating, kitchen"
  },
  {
    id: 2,
    image: require("./images/top-rate-hotel/Hotel_Fasano_Rio_de_Janeiro.jpg"),
    place: "Brazil",
    title: "Fasano Rio de Janeiro Hotel",
    price: "$270/night",
    rating: 4.5,
    amenities: "wifi, kitchen"
  },
  {
    id: 3,
    image: require("./images/top-rate-hotel/Fogo_Island_Inn.jpg"),
    place: "Canada",
    title: "Fogo Island Inn",
    price: "$1,530/night",
    rating: 4.8,
    amenities: "wifi, heating, kitchen"
  },
  {
    id: 4,
    image: require("./images/top-rate-hotel/Inkaterra_La_Casona.jpg"),
    place: "Peru",
    title: "Inkaterra La Casona",
    price: "$311/night",
    rating: 4.6,
    amenities: "wifi, heating"
  },
  {
    id: 5,
    image: require("./images/top-rate-hotel/Inkaterra_La_Casona.jpg"),
    place: "Peru",
    title: "Inkaterra La Casona",
    price: "$311/night",
    rating: 4.7,
    amenities: "wifi"
  },
  {
    id: 6,
    image: require("./images/top-rate-hotel/Inkaterra_La_Casona.jpg"),
    place: "Peru",
    title: "Inkaterra La Casona",
    price: "$311/night"
  },
  {
    id: 7,
    image: require("./images/top-rate-hotel/Inkaterra_La_Casona.jpg"),
    place: "Peru",
    title: "Inkaterra La Casona",
    price: "$311/night"
  },
  {
    id: 8,
    image: require("./images/top-rate-hotel/Inkaterra_La_Casona.jpg"),
    place: "Peru",
    title: "Inkaterra La Casona",
    price: "$311/night"
  },
  {
    id: 9,
    image: require("./images/top-rate-hotel/Inkaterra_La_Casona.jpg"),
    place: "Peru",
    title: "Inkaterra La Casona",
    price: "$311/night"
  },
  {
    id: 10,
    image: require("./images/top-rate-hotel/Inkaterra_La_Casona.jpg"),
    place: "Peru",
    title: "Inkaterra La Casona",
    price: "$311/night"
  }
];

function Searchpage() {
  //   state = {
  //     lat: Number,
  //     lng: Number,
  //     zoom: Number
  //   };

  const [lat] = React.useState(51.505);
  const [lng] = React.useState(-0.09);
  const [zoom] = React.useState(13);

  const position = [lat, lng];
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      {/* Header & Search Options AppBar */}
      <AppBar position="fixed" color="default" elevation={0} className="appbar">
        <SearchAppbar />
        <SearchOptionsAppbar />
      </AppBar>

      <Grid className={classes.containerFlex}>
        <Container className={classes.cardContainer} maxWidth="lg">
          <Grid className={classes.cardGrid} container spacing={1}>
            {cards.map(card => (
              <Grid item key={card.id} md={12} xs={12}>
                <Card className={classes.card}>
                  <CardActionArea>
                    {/* Hotel cards for PC */}
                    <Hidden xsDown>
                      <Grid container spacing={1} direction="row">
                        <Grid item xs={4}>
                          <CardMedia
                            variant="square"
                            className={classes.cardMedia}
                            image={card.image}
                            title="Image title"
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <CardContent className={classes.cardContent}>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              {card.title}
                            </Typography>
                            <Typography style={{ color: grey[500] }}>
                              {card.amenities}
                            </Typography>
                          </CardContent>
                        </Grid>
                        <Grid
                          container
                          justify="center"
                          direction="column"
                          alignItems="center"
                          xs={2}
                        >
                          <Grid item xs={8}>
                            <StarIcon
                              fontSize="small"
                              style={{ color: "#FF5A60" }}
                            ></StarIcon>
                            <Typography
                              fontSize="small"
                              style={{ height: 25, width: 25 }}
                            >
                              {card.rating}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography>{card.price}</Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Hidden>

                    {/* Hotel cards for Phone */}
                    <Hidden smUp>
                      <CardMedia
                        className={classes.cardMedia}
                        image={card.image}
                      />
                      <CardContent className={classes.cardContent}>
                        <Grid container>
                          <Grid item xs={11}>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              {card.title}
                            </Typography>
                          </Grid>
                          <Grid item xs={1}>
                            <StarIcon
                              fontSize="small"
                              style={{ color: "#FF5A60" }}
                            ></StarIcon>
                            <Typography
                              fontSize="small"
                              style={{ height: 25, width: 25 }}
                            >
                              {card.rating}
                            </Typography>
                          </Grid>
                        </Grid>

                        <Typography>{card.price}</Typography>
                      </CardContent>
                    </Hidden>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Search map (must have internet)*/}
        <Hidden mdDown>
          <Grid md={12}>
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
          </Grid>
        </Hidden>
      </Grid>
    </React.Fragment>
  );
}

export default Searchpage;
