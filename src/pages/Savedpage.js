import React from "react";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import SearchAppbar from "./appbars/SearchAppbar";
import { CardActionArea, Link, Divider } from "@material-ui/core";

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
    padding: theme.spacing(5, 1, 0, 5)
  },

  button: {
    marginLeft: "auto"
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
  gridImageRoot: {
    display: "flex",
    flexWrap: "wrap",
    //justifyContent: "space-around",

    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexDirection: "row",
    width: "100%",
    //height: 450,
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
  }
}));

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
    id: 1,
    url: "./images/newyork.jpg",
    title: "Image",
    author: "author",
    featured: true
  },
  {
    id: 2,
    url: "./images/newyork.jpg",
    title: "Image",
    author: "author",
    featured: false
  },
  {
    id: 3,
    url: "./images/newyork.jpg",
    title: "Image",
    author: "author",
    featured: false
  }
];

const popLists = [
  {
    id: 1,
    title: "New york time",
    stay: "12 stays"
  },
  {
    id: 2,
    title: "Shine the light",
    stay: "12 stays"
  },
  {
    id: 3,
    title: "Night time",
    stay: "48 stays"
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
      </AppBar>

      {/* Saved list */}
      <Container maxWidth="xl" component="main" className={classes.heroContent}>
        <Typography
          component="h5"
          variant="h5"
          align="left"
          color="textPrimary"
        >
          Saved
        </Typography>
      </Container>
      <Container className={classes.cardGrid} maxWidth="lg">
        <Typography variant="h6" align="left" color="textPrimary" gutterBottom>
          Recent saved
        </Typography>
        <Grid container spacing={4}>
          {cards.map(card => (
            <Grid item key={card.id} xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardHeader
                    action={
                      <IconButton>
                        <FavoriteIcon style={{ color: "#FF5A60" }} />
                      </IconButton>
                    }
                    title={card.title}
                    subheader={card.price}
                  />
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title="Image title"
                  />
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Link variant="subtitle1" style={{ color: "#018F84", padding: 32 }}>
        See all saved house >
      </Link>
      {/* End Saved list */}

      <Divider />

      {/* Popular list */}
      <Container className={classes.cardGrid} maxWidth="lg">
        <Typography variant="h6" align="left" color="textPrimary" gutterBottom>
          Popular lists
        </Typography>
        <Grid container spacing={4}>
          {popLists.map(popList => (
            <Grid item key={popList.id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardHeader title={popList.title} subheader={popList.stay} />
                  <CardMedia>
                    <div className={classes.gridImageRoot}>
                      <GridList cellHeight={100} className={classes.gridList}>
                        {tileData.map(tile => (
                          <GridListTile
                            key={tile.id}
                            cols={tile.featured ? 2 : 1}
                            rows={tile.featured ? 2 : 1}
                          >
                            <span
                              className={classes.imageSrc}
                              style={{
                                backgroundImage: `url(${tile.url})`
                              }}
                            />
                            <span className={classes.imageBackdrop} />
                            <span className={classes.imageButton}></span>
                          </GridListTile>
                        ))}
                      </GridList>
                    </div>
                  </CardMedia>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* End Popular list */}
    </React.Fragment>
  );
}
