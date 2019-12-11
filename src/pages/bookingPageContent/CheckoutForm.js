import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  textInput: {
    margin: theme.spacing(1)
  }
}));

export default function CheckoutForm() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    typeCard: "",
    expMonth: "",
    expYear: ""
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Confirm and Pay
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        Pay with
      </Typography>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel}></InputLabel>
        <Select
          native
          value={state.typeCard}
          onChange={handleChange("typeCard")}
          labelWidth={labelWidth}
          inputProps={{
            name: "typeCard"
          }}
        >
          <option value={0}>Credit Card</option>
          <option value={1}>Debit Card</option>
        </Select>
      </FormControl>

      <Typography variant="subtitle1" gutterBottom>
        Card Info*
      </Typography>
      <TextField
        className={classes.textInput}
        required
        variant="outlined"
        id="cardInfo"
        placeholder="Card info*"
        // label="Card info"
        fullWidth
      />

      <Typography variant="subtitle1" gutterBottom>
        Expire date*
      </Typography>
      <Grid container alignItems="center">
        <Grid item>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel}>Month</InputLabel>
            <Select
              native
              value={state.expMonth}
              onChange={handleChange("expMonth")}
              labelWidth={labelWidth}
              inputProps={{
                name: "expMonth"
              }}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
              <option value={11}>11</option>
              <option value={12}>12</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <Typography variant="h5" gutterBottom>
            /
          </Typography>
        </Grid>
        <Grid item>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel}>Year</InputLabel>
            <Select
              native
              value={state.expYear}
              onChange={handleChange("expYear")}
              labelWidth={labelWidth}
              inputProps={{
                name: "expYear"
              }}
            >
              <option value={20}>20</option>
              <option value={21}>21</option>
              <option value={22}>22</option>
              <option value={23}>23</option>
              <option value={24}>24</option>
              <option value={25}>25</option>
              <option value={26}>26</option>
              <option value={27}>27</option>
              <option value={28}>28</option>
              <option value={29}>29</option>
              <option value={30}>30</option>
              <option value={31}>31</option>
              <option value={32}>32</option>
              <option value={33}>33</option>
              <option value={34}>34</option>
              <option value={35}>35</option>
              <option value={36}>36</option>
              <option value={37}>37</option>
              <option value={38}>38</option>
              <option value={39}>39</option>
              <option value={40}>40</option>
              <option value={41}>41</option>
              <option value={42}>42</option>
              <option value={43}>43</option>
              <option value={44}>44</option>
              <option value={45}>45</option>
              <option value={46}>46</option>
              <option value={47}>47</option>
              <option value={48}>48</option>
              <option value={49}>49</option>
              <option value={50}>50</option>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Typography variant="subtitle1" gutterBottom>
        CVV*
      </Typography>
      <TextField
        className={classes.textInput}
        required
        variant="outlined"
        id="cvv"
        placeholder="CVV*"
        // label="Card info"
      />

      <Typography variant="subtitle1" gutterBottom>
        First Name
      </Typography>
      <TextField
        className={classes.textInput}
        required
        variant="outlined"
        id="firstName"
        placeholder="Write your first name..."
        // label="Card info"
        fullWidth
      />

      <Typography variant="subtitle1" gutterBottom>
        Last Name
      </Typography>
      <TextField
        className={classes.textInput}
        required
        variant="outlined"
        id="lastName"
        placeholder="Write your last name..."
        // label="Card info"
        fullWidth
      />
      <Typography variant="body1" gutterBottom>
        The service fee and all of the nights are non-refundable. If there’s a
        cleaning fee, it’s refundable any time before check-in{" "}
      </Typography>
    </React.Fragment>
  );
}
