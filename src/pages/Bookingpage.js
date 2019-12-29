import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import PrintIcon from "@material-ui/icons/Print";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import ReviewRuleForm from "./bookingPageContent/ReviewRuleForm";
import ContactForm from "./bookingPageContent/ContactForm";
import CheckoutForm from "./bookingPageContent/CheckoutForm";
import ReviewBookingForm from "./bookingPageContent/ReviewBookingForm";

import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Check from "@material-ui/icons/Check";
import Grid from "@material-ui/core/Grid";

import StepConnector from "@material-ui/core/StepConnector";
import { AppBar } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  stepIcon: {
    color: "#FF5A60"
  },

  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  },
  buttonPrimary: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    color: theme.palette.common.white,
    backgroundColor: "#FF5A60",
    "&:hover": {
      backgroundColor: "#FF787D"
    }
  }
}));

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)"
  },
  active: {
    "& $line": {
      borderColor: "#018F84"
    }
  },
  completed: {
    "& $line": {
      borderColor: "#018F84"
    }
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1
  }
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center"
  },
  active: {
    color: "#018F84"
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor"
  },
  completed: {
    color: "#018F84",
    zIndex: 1,
    fontSize: 18
  }
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Hogo
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = ["Review house rules", "Who's coming?", "Comfirm and pay"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <ReviewRuleForm />;
    case 1:
      return <ContactForm />;
    case 2:
      return <CheckoutForm />;
    default:
      throw new Error("Unknown step");
  }
}

export default function Booking() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" style={{ backgroundColor: "#018F84" }}>
        <Toolbar style={{ display: "flex", justifyContent: "center" }}>
          <Button color="inherit" href="/">
            Hogo
          </Button>
        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid item xs={12} md={7}>
          <main className={classes.layout}>
            <Paper elevation={15} className={classes.paper}>
              <Typography component="h1" variant="h4" align="center">
                Booking
              </Typography>
              <Stepper
                alternativeLabel
                activeStep={activeStep}
                connector={<QontoConnector />}
                className={classes.stepper}
              >
                {steps.map(label => (
                  <Step key={label}>
                    <StepLabel StepIconComponent={QontoStepIcon}>
                      {label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
              <React.Fragment>
                {activeStep === steps.length ? (
                  <React.Fragment>
                    <Typography variant="h5" gutterBottom>
                      Thank you for your booking.
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      <Box
                        fontWeight="fontWeightBold"
                        m={1}
                        justifyContent="center"
                      >
                        Your booking code is #123456
                      </Box>
                    </Typography>
                    <Typography variant="subtitle1">
                      <Box fontStyle="italic" m={1}>
                        We have emailed your booking confirmation, and our host
                        will contact you soon. Thank you for choosing our
                        service.
                      </Box>
                    </Typography>
                    <Grid
                      container
                      justify="space-around"
                      style={{ marginTop: 30 }}
                    >
                      <Grid item>
                        <Button
                          variant="contained"
                          color="inherit"
                          startIcon={<PrintIcon />}
                        >
                          Print bill
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          href="/"
                          style={{ backgroundColor: "#FF5A60", color: "white" }}
                          startIcon={<ArrowBackIosIcon />}
                        >
                          Back to homepage
                        </Button>
                      </Grid>
                    </Grid>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {getStepContent(activeStep)}
                    <div className={classes.buttons}>
                      {activeStep !== 0 && (
                        <Button onClick={handleBack} className={classes.button}>
                          Back
                        </Button>
                      )}
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.buttonPrimary}
                      >
                        {activeStep === steps.length - 1
                          ? "Confirm and pay"
                          : "Next"}
                      </Button>
                    </div>
                  </React.Fragment>
                )}
              </React.Fragment>
            </Paper>
          </main>
        </Grid>
        <Grid item xs={12} md={5}>
          <ReviewBookingForm />
        </Grid>
      </Grid>

      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </React.Fragment>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool
};
