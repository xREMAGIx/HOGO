import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: theme.spacing(3),

    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    padding: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  cardMedia: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  detailBill: {
    marginTop: theme.spacing(3)
  }
}));

const hotel = {
  name: "Seashell House ",
  date: "Nov 8 - Nov 9",
  guest: 2,
  img: require("../images/top-rate-hotel/Jumeirah_Dar_Al_Masyaf.jpg"),
  price: 45,
  night: 2,
  vat: 10,
  serviceFee: 10
};

export default function ReviewBookingForm() {
  const classes = useStyles();

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{ marginLeft: 1, paddingLeft: 1 }}
    >
      <CssBaseline />
      <Paper elevation={5} className={classes.paper}>
        <Typography component="h1" variant="h5">
          Review and pay
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container wrap="nowrap">
            <Grid item xs={6}>
              <Grid item xs zeroMinWidth>
                <Typography variant="h6">{hotel.name}</Typography>
              </Grid>
              <Typography variant="subtitle1">{hotel.date}</Typography>
              <Typography variant="subtitle1">
                {hotel.guest + " guest"}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Card>
                <CardMedia className={classes.cardMedia} image={hotel.img} />
              </Card>
            </Grid>
          </Grid>
          <Grid container className={classes.detailBill}>
            <Grid
              item
              container
              xs={6}
              direction="column"
              alignItems="flex-start"
            >
              <Typography variant="subtitle2" gutterBottom>
                {"$" + hotel.price + " x " + hotel.night + " night"}
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                {hotel.vat + "% VAT"}
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                Service Fee
              </Typography>
            </Grid>
            <Grid
              item
              container
              xs={6}
              direction="column"
              alignItems="flex-end"
            >
              <Typography variant="subtitle2" gutterBottom>
                {"$ " + hotel.price * hotel.night}
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                {"$ " + (hotel.vat * (hotel.price * hotel.night)) / 100}
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                {"$ " + hotel.serviceFee}
              </Typography>
            </Grid>
          </Grid>

          <Typography
            className={classes.detailBill}
            variant="subtitle1"
            gutterBottom
          >
            Coupon code
          </Typography>
          <TextField
            className={classes.textInput}
            required
            variant="outlined"
            id="coupon"
            placeholder="Your coupon..."
          />
          <Grid container className={classes.detailBill}>
            <Grid item xs={6} alignItems="flex-start">
              <Typography variant="subtitle1" gutterBottom>
                <Box fontWeight="fontWeightBold" m={1}>
                  Total(USD)
                </Box>
              </Typography>
            </Grid>
            <Grid item container xs={6} direction="row" justify="flex-end">
              <Typography variant="subtitle1" gutterBottom>
                <Box fontWeight="fontWeightBold" m={1}>
                  {"$ " +
                    (hotel.price * hotel.night +
                      (hotel.vat * (hotel.price * hotel.night)) / 100 +
                      hotel.serviceFee)}
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}
