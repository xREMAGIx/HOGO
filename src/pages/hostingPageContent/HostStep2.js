import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Link from "@material-ui/core/Link";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";

import "../Map.css";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100vw"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  formControl: {
    marginTop: theme.spacing(3)
  },
  nextBtn: {
    backgroundColor: "#FF5A60",
    "&:hover": {
      backgroundColor: "#FF787D"
    },
    color: "white"
  },
  card: {
    // width: "50vw",
    height: "50vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  uploadBtn: {
    backgroundColor: "#018F84",
    "&:hover": {
      backgroundColor: "#018F84"
    },
    color: "white"
  },
  input: {
    display: "none"
  },
  uploadRoot: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  textField: {
    marginTop: 20,
    width: "70vw",
    maxWidth: 550
  },
  inputRoot: {
    color: "inherit"
    // paddingLeft: 50
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 500
    }
  },
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18
    }
  },
  numberRoot: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "auto",
    height: 50,
    marginTop: 20,
    border: "1px solid "
  },
  numberInput: {
    marginLeft: theme.spacing(1),
    flex: 1
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

function countryToFlag(isoCode) {
  return typeof String.fromCodePoint !== "undefined"
    ? isoCode
        .toUpperCase()
        .replace(/./g, char =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )
    : isoCode;
}

const countries = [
  { code: "AD", label: "Andorra", phone: "376" },
  { code: "AE", label: "United Arab Emirates", phone: "971" },
  { code: "AF", label: "Afghanistan", phone: "93" },
  { code: "AG", label: "Antigua and Barbuda", phone: "1-268" },
  { code: "AI", label: "Anguilla", phone: "1-264" },
  { code: "AL", label: "Albania", phone: "355" },
  { code: "AM", label: "Armenia", phone: "374" },
  { code: "AO", label: "Angola", phone: "244" },
  { code: "AQ", label: "Antarctica", phone: "672" },
  { code: "AR", label: "Argentina", phone: "54" },
  { code: "AS", label: "American Samoa", phone: "1-684" },
  { code: "AT", label: "Austria", phone: "43" },
  { code: "AU", label: "Australia", phone: "61", suggested: true },
  { code: "AW", label: "Aruba", phone: "297" },
  { code: "AX", label: "Alland Islands", phone: "358" },
  { code: "AZ", label: "Azerbaijan", phone: "994" },
  { code: "BA", label: "Bosnia and Herzegovina", phone: "387" },
  { code: "BB", label: "Barbados", phone: "1-246" },
  { code: "BD", label: "Bangladesh", phone: "880" },
  { code: "BE", label: "Belgium", phone: "32" },
  { code: "BF", label: "Burkina Faso", phone: "226" },
  { code: "BG", label: "Bulgaria", phone: "359" },
  { code: "BH", label: "Bahrain", phone: "973" },
  { code: "BI", label: "Burundi", phone: "257" },
  { code: "BJ", label: "Benin", phone: "229" },
  { code: "BL", label: "Saint Barthelemy", phone: "590" },
  { code: "BM", label: "Bermuda", phone: "1-441" },
  { code: "BN", label: "Brunei Darussalam", phone: "673" },
  { code: "BO", label: "Bolivia", phone: "591" },
  { code: "BR", label: "Brazil", phone: "55" },
  { code: "BS", label: "Bahamas", phone: "1-242" },
  { code: "BT", label: "Bhutan", phone: "975" },
  { code: "BV", label: "Bouvet Island", phone: "47" },
  { code: "BW", label: "Botswana", phone: "267" },
  { code: "BY", label: "Belarus", phone: "375" },
  { code: "BZ", label: "Belize", phone: "501" },
  { code: "CA", label: "Canada", phone: "1", suggested: true },
  { code: "CC", label: "Cocos (Keeling) Islands", phone: "61" },
  { code: "CD", label: "Congo, Republic of the", phone: "242" },
  { code: "CF", label: "Central African Republic", phone: "236" },
  { code: "CG", label: "Congo, Democratic Republic of the", phone: "243" },
  { code: "CH", label: "Switzerland", phone: "41" },
  { code: "CI", label: "Cote d'Ivoire", phone: "225" },
  { code: "CK", label: "Cook Islands", phone: "682" },
  { code: "CL", label: "Chile", phone: "56" },
  { code: "CM", label: "Cameroon", phone: "237" },
  { code: "CN", label: "China", phone: "86" },
  { code: "CO", label: "Colombia", phone: "57" },
  { code: "CR", label: "Costa Rica", phone: "506" },
  { code: "CU", label: "Cuba", phone: "53" },
  { code: "CV", label: "Cape Verde", phone: "238" },
  { code: "CW", label: "Curacao", phone: "599" },
  { code: "CX", label: "Christmas Island", phone: "61" },
  { code: "CY", label: "Cyprus", phone: "357" },
  { code: "CZ", label: "Czech Republic", phone: "420" },
  { code: "DE", label: "Germany", phone: "49", suggested: true },
  { code: "DJ", label: "Djibouti", phone: "253" },
  { code: "DK", label: "Denmark", phone: "45" },
  { code: "DM", label: "Dominica", phone: "1-767" },
  { code: "DO", label: "Dominican Republic", phone: "1-809" },
  { code: "DZ", label: "Algeria", phone: "213" },
  { code: "EC", label: "Ecuador", phone: "593" },
  { code: "EE", label: "Estonia", phone: "372" },
  { code: "EG", label: "Egypt", phone: "20" },
  { code: "EH", label: "Western Sahara", phone: "212" },
  { code: "ER", label: "Eritrea", phone: "291" },
  { code: "ES", label: "Spain", phone: "34" },
  { code: "ET", label: "Ethiopia", phone: "251" },
  { code: "FI", label: "Finland", phone: "358" },
  { code: "FJ", label: "Fiji", phone: "679" },
  { code: "FK", label: "Falkland Islands (Malvinas)", phone: "500" },
  { code: "FM", label: "Micronesia, Federated States of", phone: "691" },
  { code: "FO", label: "Faroe Islands", phone: "298" },
  { code: "FR", label: "France", phone: "33", suggested: true },
  { code: "GA", label: "Gabon", phone: "241" },
  { code: "GB", label: "United Kingdom", phone: "44" },
  { code: "GD", label: "Grenada", phone: "1-473" },
  { code: "GE", label: "Georgia", phone: "995" },
  { code: "GF", label: "French Guiana", phone: "594" },
  { code: "GG", label: "Guernsey", phone: "44" },
  { code: "GH", label: "Ghana", phone: "233" },
  { code: "GI", label: "Gibraltar", phone: "350" },
  { code: "GL", label: "Greenland", phone: "299" },
  { code: "GM", label: "Gambia", phone: "220" },
  { code: "GN", label: "Guinea", phone: "224" },
  { code: "GP", label: "Guadeloupe", phone: "590" },
  { code: "GQ", label: "Equatorial Guinea", phone: "240" },
  { code: "GR", label: "Greece", phone: "30" },
  {
    code: "GS",
    label: "South Georgia and the South Sandwich Islands",
    phone: "500"
  },
  { code: "GT", label: "Guatemala", phone: "502" },
  { code: "GU", label: "Guam", phone: "1-671" },
  { code: "GW", label: "Guinea-Bissau", phone: "245" },
  { code: "GY", label: "Guyana", phone: "592" },
  { code: "HK", label: "Hong Kong", phone: "852" },
  { code: "HM", label: "Heard Island and McDonald Islands", phone: "672" },
  { code: "HN", label: "Honduras", phone: "504" },
  { code: "HR", label: "Croatia", phone: "385" },
  { code: "HT", label: "Haiti", phone: "509" },
  { code: "HU", label: "Hungary", phone: "36" },
  { code: "ID", label: "Indonesia", phone: "62" },
  { code: "IE", label: "Ireland", phone: "353" },
  { code: "IL", label: "Israel", phone: "972" },
  { code: "IM", label: "Isle of Man", phone: "44" },
  { code: "IN", label: "India", phone: "91" },
  { code: "IO", label: "British Indian Ocean Territory", phone: "246" },
  { code: "IQ", label: "Iraq", phone: "964" },
  { code: "IR", label: "Iran, Islamic Republic of", phone: "98" },
  { code: "IS", label: "Iceland", phone: "354" },
  { code: "IT", label: "Italy", phone: "39" },
  { code: "JE", label: "Jersey", phone: "44" },
  { code: "JM", label: "Jamaica", phone: "1-876" },
  { code: "JO", label: "Jordan", phone: "962" },
  { code: "JP", label: "Japan", phone: "81", suggested: true },
  { code: "KE", label: "Kenya", phone: "254" },
  { code: "KG", label: "Kyrgyzstan", phone: "996" },
  { code: "KH", label: "Cambodia", phone: "855" },
  { code: "KI", label: "Kiribati", phone: "686" },
  { code: "KM", label: "Comoros", phone: "269" },
  { code: "KN", label: "Saint Kitts and Nevis", phone: "1-869" },
  { code: "KP", label: "Korea, Democratic People's Republic of", phone: "850" },
  { code: "KR", label: "Korea, Republic of", phone: "82" },
  { code: "KW", label: "Kuwait", phone: "965" },
  { code: "KY", label: "Cayman Islands", phone: "1-345" },
  { code: "KZ", label: "Kazakhstan", phone: "7" },
  { code: "LA", label: "Lao People's Democratic Republic", phone: "856" },
  { code: "LB", label: "Lebanon", phone: "961" },
  { code: "LC", label: "Saint Lucia", phone: "1-758" },
  { code: "LI", label: "Liechtenstein", phone: "423" },
  { code: "LK", label: "Sri Lanka", phone: "94" },
  { code: "LR", label: "Liberia", phone: "231" },
  { code: "LS", label: "Lesotho", phone: "266" },
  { code: "LT", label: "Lithuania", phone: "370" },
  { code: "LU", label: "Luxembourg", phone: "352" },
  { code: "LV", label: "Latvia", phone: "371" },
  { code: "LY", label: "Libya", phone: "218" },
  { code: "MA", label: "Morocco", phone: "212" },
  { code: "MC", label: "Monaco", phone: "377" },
  { code: "MD", label: "Moldova, Republic of", phone: "373" },
  { code: "ME", label: "Montenegro", phone: "382" },
  { code: "MF", label: "Saint Martin (French part)", phone: "590" },
  { code: "MG", label: "Madagascar", phone: "261" },
  { code: "MH", label: "Marshall Islands", phone: "692" },
  {
    code: "MK",
    label: "Macedonia, the Former Yugoslav Republic of",
    phone: "389"
  },
  { code: "ML", label: "Mali", phone: "223" },
  { code: "MM", label: "Myanmar", phone: "95" },
  { code: "MN", label: "Mongolia", phone: "976" },
  { code: "MO", label: "Macao", phone: "853" },
  { code: "MP", label: "Northern Mariana Islands", phone: "1-670" },
  { code: "MQ", label: "Martinique", phone: "596" },
  { code: "MR", label: "Mauritania", phone: "222" },
  { code: "MS", label: "Montserrat", phone: "1-664" },
  { code: "MT", label: "Malta", phone: "356" },
  { code: "MU", label: "Mauritius", phone: "230" },
  { code: "MV", label: "Maldives", phone: "960" },
  { code: "MW", label: "Malawi", phone: "265" },
  { code: "MX", label: "Mexico", phone: "52" },
  { code: "MY", label: "Malaysia", phone: "60" },
  { code: "MZ", label: "Mozambique", phone: "258" },
  { code: "NA", label: "Namibia", phone: "264" },
  { code: "NC", label: "New Caledonia", phone: "687" },
  { code: "NE", label: "Niger", phone: "227" },
  { code: "NF", label: "Norfolk Island", phone: "672" },
  { code: "NG", label: "Nigeria", phone: "234" },
  { code: "NI", label: "Nicaragua", phone: "505" },
  { code: "NL", label: "Netherlands", phone: "31" },
  { code: "NO", label: "Norway", phone: "47" },
  { code: "NP", label: "Nepal", phone: "977" },
  { code: "NR", label: "Nauru", phone: "674" },
  { code: "NU", label: "Niue", phone: "683" },
  { code: "NZ", label: "New Zealand", phone: "64" },
  { code: "OM", label: "Oman", phone: "968" },
  { code: "PA", label: "Panama", phone: "507" },
  { code: "PE", label: "Peru", phone: "51" },
  { code: "PF", label: "French Polynesia", phone: "689" },
  { code: "PG", label: "Papua New Guinea", phone: "675" },
  { code: "PH", label: "Philippines", phone: "63" },
  { code: "PK", label: "Pakistan", phone: "92" },
  { code: "PL", label: "Poland", phone: "48" },
  { code: "PM", label: "Saint Pierre and Miquelon", phone: "508" },
  { code: "PN", label: "Pitcairn", phone: "870" },
  { code: "PR", label: "Puerto Rico", phone: "1" },
  { code: "PS", label: "Palestine, State of", phone: "970" },
  { code: "PT", label: "Portugal", phone: "351" },
  { code: "PW", label: "Palau", phone: "680" },
  { code: "PY", label: "Paraguay", phone: "595" },
  { code: "QA", label: "Qatar", phone: "974" },
  { code: "RE", label: "Reunion", phone: "262" },
  { code: "RO", label: "Romania", phone: "40" },
  { code: "RS", label: "Serbia", phone: "381" },
  { code: "RU", label: "Russian Federation", phone: "7" },
  { code: "RW", label: "Rwanda", phone: "250" },
  { code: "SA", label: "Saudi Arabia", phone: "966" },
  { code: "SB", label: "Solomon Islands", phone: "677" },
  { code: "SC", label: "Seychelles", phone: "248" },
  { code: "SD", label: "Sudan", phone: "249" },
  { code: "SE", label: "Sweden", phone: "46" },
  { code: "SG", label: "Singapore", phone: "65" },
  { code: "SH", label: "Saint Helena", phone: "290" },
  { code: "SI", label: "Slovenia", phone: "386" },
  { code: "SJ", label: "Svalbard and Jan Mayen", phone: "47" },
  { code: "SK", label: "Slovakia", phone: "421" },
  { code: "SL", label: "Sierra Leone", phone: "232" },
  { code: "SM", label: "San Marino", phone: "378" },
  { code: "SN", label: "Senegal", phone: "221" },
  { code: "SO", label: "Somalia", phone: "252" },
  { code: "SR", label: "Suriname", phone: "597" },
  { code: "SS", label: "South Sudan", phone: "211" },
  { code: "ST", label: "Sao Tome and Principe", phone: "239" },
  { code: "SV", label: "El Salvador", phone: "503" },
  { code: "SX", label: "Sint Maarten (Dutch part)", phone: "1-721" },
  { code: "SY", label: "Syrian Arab Republic", phone: "963" },
  { code: "SZ", label: "Swaziland", phone: "268" },
  { code: "TC", label: "Turks and Caicos Islands", phone: "1-649" },
  { code: "TD", label: "Chad", phone: "235" },
  { code: "TF", label: "French Southern Territories", phone: "262" },
  { code: "TG", label: "Togo", phone: "228" },
  { code: "TH", label: "Thailand", phone: "66" },
  { code: "TJ", label: "Tajikistan", phone: "992" },
  { code: "TK", label: "Tokelau", phone: "690" },
  { code: "TL", label: "Timor-Leste", phone: "670" },
  { code: "TM", label: "Turkmenistan", phone: "993" },
  { code: "TN", label: "Tunisia", phone: "216" },
  { code: "TO", label: "Tonga", phone: "676" },
  { code: "TR", label: "Turkey", phone: "90" },
  { code: "TT", label: "Trinidad and Tobago", phone: "1-868" },
  { code: "TV", label: "Tuvalu", phone: "688" },
  { code: "TW", label: "Taiwan, Province of China", phone: "886" },
  { code: "TZ", label: "United Republic of Tanzania", phone: "255" },
  { code: "UA", label: "Ukraine", phone: "380" },
  { code: "UG", label: "Uganda", phone: "256" },
  { code: "US", label: "United States", phone: "1", suggested: true },
  { code: "UY", label: "Uruguay", phone: "598" },
  { code: "UZ", label: "Uzbekistan", phone: "998" },
  { code: "VA", label: "Holy See (Vatican City State)", phone: "379" },
  { code: "VC", label: "Saint Vincent and the Grenadines", phone: "1-784" },
  { code: "VE", label: "Venezuela", phone: "58" },
  { code: "VG", label: "British Virgin Islands", phone: "1-284" },
  { code: "VI", label: "US Virgin Islands", phone: "1-340" },
  { code: "VN", label: "Vietnam", phone: "84" },
  { code: "VU", label: "Vanuatu", phone: "678" },
  { code: "WF", label: "Wallis and Futuna", phone: "681" },
  { code: "WS", label: "Samoa", phone: "685" },
  { code: "XK", label: "Kosovo", phone: "383" },
  { code: "YE", label: "Yemen", phone: "967" },
  { code: "YT", label: "Mayotte", phone: "262" },
  { code: "ZA", label: "South Africa", phone: "27" },
  { code: "ZM", label: "Zambia", phone: "260" },
  { code: "ZW", label: "Zimbabwe", phone: "263" }
];

export default function BHost2() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleNext = () => {
    setValue(value + 1);
  };

  const handleBack = () => {
    setValue(value - 1);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="white"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Grid container xs={10}>
            <Grid item xs={1}>
              <Button href="/" style={{ color: "#018F84" }}>
                Hogo
              </Button>
            </Grid>
            <Grid item>
              <Typography variant="h5">Step 2: Set the scene</Typography>
            </Grid>
          </Grid>
          <Button href="/hosting" style={{ color: "#018F84" }}>
            Save & Exit
          </Button>
        </Toolbar>
      </AppBar>

      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            centered
          >
            <Tab disabled label="Add photos" {...a11yProps(0)} />
            <Tab disabled label="Describe your place" {...a11yProps(1)} />
            <Tab disabled label="Name your place" {...a11yProps(2)} />
            <Tab disabled label="Add mobile number" {...a11yProps(3)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          {/* Panel Add Photos */}
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Container component="main" maxWidth="sm">
              <CssBaseline />
              <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                  Add photos to your listing
                </Typography>
                <Typography variant="subtitle1">
                  Photos help guests imagine staying in your place. You can
                  start with one and add more after you publish.
                </Typography>
                <form>
                  <Card style={{ marginTop: 20 }}>
                    <CardActionArea className={classes.card}>
                      <div className={classes.uploadRoot}>
                        <input
                          accept="image/*"
                          className={classes.input}
                          id="contained-button-file"
                          multiple
                          type="file"
                        />
                        <label htmlFor="contained-button-file">
                          <Button
                            variant="contained"
                            component="span"
                            className={classes.uploadBtn}
                            startIcon={<CloudUploadIcon />}
                          >
                            Upload
                          </Button>
                        </label>
                      </div>
                      <Typography variant="subtitle2">
                        or drag them in.
                      </Typography>
                    </CardActionArea>
                  </Card>
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    style={{ marginTop: 50 }}
                  >
                    <Button href="/hosting"> Back</Button>
                    <Button
                      variant="contained"
                      className={classes.nextBtn}
                      onClick={handleNext}
                    >
                      Next
                    </Button>
                  </Grid>
                </form>
              </div>
            </Container>
          </TabPanel>
          {/* End Add Photos Panel */}

          {/* Panel Describe Place */}
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Container component="main" maxWidth="sm">
              <CssBaseline />
              <div className={classes.paper}>
                <Typography component="h1" variant="h5" gutterBottom>
                  Describe your place to guests
                </Typography>
                <Typography variant="subtitle1">
                  Write a quick summary of your place. You can highlight what’s
                  special about your space, the neighborhood, and how you’ll
                  interact with guests.
                </Typography>
                <form>
                  <TextField
                    id="outlined-multiline-static"
                    placeholder="Write your message here..."
                    multiline
                    rows="4"
                    variant="outlined"
                    className={classes.textField}
                  />
                  <Typography
                    variant="h5"
                    style={{ marginTop: 50 }}
                    gutterBottom
                  >
                    Want to add more info? (optional)
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Use the additional fields below to share more details.
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    style={{ marginTop: 20 }}
                    gutterBottom
                  >
                    <Box fontWeight="fontWeightBold" m={1}>
                      Your space
                    </Box>
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    Add other details that can help set guests’ expectations for
                    their stay.
                  </Typography>
                  <TextField
                    id="outlined-multiline-static"
                    placeholder="Write your message here..."
                    multiline
                    rows="4"
                    variant="outlined"
                    className={classes.textField}
                  />

                  <Typography
                    variant="subtitle1"
                    style={{ marginTop: 20 }}
                    gutterBottom
                  >
                    <Box fontWeight="fontWeightBold" m={1}>
                      Your availability
                    </Box>
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    Let guests know how available you’ll be during their stay.
                    For your safety, don’t share your phone number or email
                    until you have a confirmed reservation.
                  </Typography>
                  <TextField
                    id="outlined-multiline-static"
                    placeholder="Write your message here..."
                    multiline
                    rows="4"
                    variant="outlined"
                    className={classes.textField}
                  />

                  <Typography
                    variant="subtitle1"
                    style={{ marginTop: 20 }}
                    gutterBottom
                  >
                    <Box fontWeight="fontWeightBold" m={1}>
                      Your neighborhood
                    </Box>
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    Share what makes your neighborhood special, like a favorite
                    coffee shop, park, or a unique landmark.
                  </Typography>
                  <TextField
                    id="outlined-multiline-static"
                    placeholder="Write your message here..."
                    multiline
                    rows="4"
                    variant="outlined"
                    className={classes.textField}
                  />

                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    style={{ marginTop: 50 }}
                  >
                    <Button onClick={handleBack}> Back</Button>
                    <Button
                      variant="contained"
                      className={classes.nextBtn}
                      onClick={handleNext}
                    >
                      Next
                    </Button>
                  </Grid>
                </form>
              </div>
            </Container>
          </TabPanel>
          {/* End Describe Place Panel */}

          {/* Panel Name Place */}
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Container component="main" maxWidth="sm">
              <CssBaseline />
              <div className={classes.paper}>
                <Typography variant="h5" gutterBottom>
                  Name your place
                </Typography>
                <Typography variant="subtitle1">
                  Attract guests with a listing title that highlights what makes
                  your place special.
                </Typography>
                <form>
                  <TextField
                    id="outlined-multiline-static"
                    placeholder="Write your message here..."
                    multiline
                    rows="1"
                    variant="outlined"
                    className={classes.textField}
                  />
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    style={{ marginTop: 50 }}
                  >
                    <Button onClick={handleBack}> Back</Button>
                    <Button
                      variant="contained"
                      className={classes.nextBtn}
                      onClick={handleNext}
                    >
                      Next
                    </Button>
                  </Grid>
                </form>
              </div>
            </Container>
          </TabPanel>
          {/* End Name Place Panel */}

          {/* Panel Add Mobile Number */}
          <TabPanel value={value} index={3} dir={theme.direction}>
            <Container component="main" maxWidth="sm">
              <CssBaseline />
              <div className={classes.paper}>
                <Typography variant="h5" gutterBottom>
                  Add your mobile number
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Add number for guests to use.
                </Typography>
                <form>
                  <Autocomplete
                    freeSolo
                    id="country-select-demo"
                    style={{ width: "auto" }}
                    options={countries}
                    classes={{
                      option: classes.option,
                      root: classes.inputRoot,
                      input: classes.inputInput
                    }}
                    autoHighlight
                    getOptionLabel={option => option.label}
                    renderOption={option => (
                      <React.Fragment>
                        <span>{countryToFlag(option.code)}</span>
                        {option.label} ({option.code}) +{option.phone}
                      </React.Fragment>
                    )}
                    renderInput={params => (
                      <TextField
                        label="Place"
                        variant="outlined"
                        {...params}
                        defaultValue="Naked input"
                        fullWidth
                        inputProps={{
                          "aria-label": "naked",
                          ...params.inputProps,
                          autoComplete: "disabled" // disable autocomplete and autofill
                        }}
                      />
                    )}
                  />
                  <Paper component="form" className={classes.numberRoot}>
                    <InputBase
                      className={classes.numberInput}
                      placeholder="Phone number"
                      inputProps={{ "aria-label": "search google maps" }}
                    />
                    <Link style={{ color: "#018F84" }}> Verify</Link>
                  </Paper>

                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    style={{ marginTop: 50 }}
                  >
                    <Button onClick={handleBack}> Back</Button>
                    <Button
                      variant="contained"
                      className={classes.nextBtn}
                      href="/hosting"
                    >
                      Finish
                    </Button>
                  </Grid>
                </form>
              </div>
            </Container>
          </TabPanel>
          {/* End Add Mobile Number */}
        </SwipeableViews>
      </div>
    </React.Fragment>
  );
}
