import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FaceIcon from "@material-ui/icons/Face";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 500
    }
  },
  exText: {
    color: theme.palette.common.black,
    width: 300
  },
  textToHost: {
    padding: theme.spacing(2),
    width: "100%"
  },
  numberText: {
    marginTop: theme.spacing(3)
  }
}));

export default function ContactForm() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Tell you host about your trip
      </Typography>
      <Grid container>
        <Grid item xs={1}>
          <FaceIcon />
        </Grid>
        <Grid item xs={11}>
          <TextField
            className={classes.exText}
            disabled
            multiline
            id="outlined-read-only-input"
            defaultValue="Hello! I'm looking forward to having you stay in my home. Please let me know when you expect to arrive."
            InputProps={{
              readOnly: true
            }}
            variant="outlined"
          />
        </Grid>
      </Grid>
      <TextField
        className={classes.textToHost}
        id="outlined-multiline-static"
        placeholder="Write your message here..."
        multiline
        rows="4"
        variant="outlined"
      />
      <Typography variant="h6" gutterBottom>
        Confirm your phone number
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        This is so your host can contact you during your trip, and we know how
        to reach you
      </Typography>
      <TextField
        className={classes.numberText}
        id="outlined-number"
        label="Phone Number"
        type="tel"
        variant="outlined"
      />
    </React.Fragment>
  );
}
