import React from "react";
import { Grid } from "@material-ui/core";
import { TextValidator } from "react-material-ui-form-validator";
import NewDate from "../../../utils/NewDate";
const Physicians = (props) => {
  const fontSize = 19;
  return (
    <>
      <Grid item xs={12} sm={12}>
        <h1>PHYSICIANS:</h1>
      </Grid>
      <Grid item xs={12} sm={6}>
        <h3>Dr. Richarch Bendor-Samuel, MD, FRCS(C)</h3>
      </Grid>
      <Grid item xs={12} sm={6}>
        <h3>Dr. Louis O. Boileau, BSc, MD, FRCS(C)</h3>
      </Grid>
      <Grid item xs={12} sm={12}>
        <p>
          The Landings Surgical Center
          <br />
          1477 Lower Water Street, Suite 7A
          <br />
          Halifax, NS B3J 3Z2
          <br />
          Phone: (902) 492-2007 Fax: (902) 429-0887 Website:{" "}
          <a href="https://www.landingsurgery.ca">www.landingsurgery.ca</a>
          <br />
          Email:{" "}
          <a href="mailto:info@landingsurgery.ca">
            info@landingsurgery.ca
          </a>{" "}
          <a href="mailto:admin@landingsurgery.ca">admin@landingsurgery.ca</a>
        </p>
        <p>
          The Physician has offered to communicate using the following means of
          electronic communication (“the Services”):
          <br />
          1: Email
          <br />
          2: Video conferencing (including Skype®, FaceTime®, Zoom®)
          <br />
          3: Text messaging (including instant messaging)
          <br />
          4: Social media
        </p>
      </Grid>
    </>
  );
};

export default Physicians;
