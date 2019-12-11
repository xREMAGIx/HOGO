import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import PetsIcon from "@material-ui/icons/Pets";
import SmokeFreeIcon from "@material-ui/icons/SmokeFree";
import LocalBarIcon from "@material-ui/icons/LocalBar";

export default function reviewRuleForm() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Thing to keep in mind
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <ChildCareIcon fontSize="large" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="subtitle1">
            Suitable for children and infants
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <PetsIcon fontSize="large" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="subtitle1">Pets allowed</Typography>
        </Grid>
        <Grid item xs={2}>
          <SmokeFreeIcon fontSize="large" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="subtitle1">No smoking</Typography>
        </Grid>
        <Grid item xs={2}>
          <LocalBarIcon fontSize="large" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="subtitle1">
            Parties and events allowed
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
