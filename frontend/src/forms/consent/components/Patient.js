import React from "react";
import { Grid } from "@material-ui/core";
import { TextValidator } from "react-material-ui-form-validator";
import NewDate from "../../../utils/NewDate";
import { connect } from "react-redux";
import { setName } from "../../../redux/actions";
const Patient = (props) => {
  const fontSize = 19;
  const { name, setName } = props;
  return (
    <>
      <Grid item xs={12} sm={12}>
        <h1>PATIENT ACKNOWLEDGMENT AND AGREEMENT:</h1>
      </Grid>
      <Grid item xs={12} sm={12}>
        <p>
          I acknowledge that I have read and fully understand the risks,
          limitations, conditions of use, and instructions for use of the
          selected electronic communication Services more fully described in the
          Appendix to this consent form. I understand and accept the risks
          outlined in the Appendix to this consent form, associated with the use
          of the Services in communications with the Physician and the
          Physician’s staff. I consent to the conditions and will follow the
          instructions outlined in the Appendix, as well as any other conditions
          that the Physician may impose on communications with patients using
          the Services.
        </p>
        <p>
          I acknowledge and understand that despite recommendations that
          encryption software be used as a security mechanism for electronic
          communications, it is possible that communications with the Physician
          or the Physician’s staff using the Services may not be encrypted.
          Despite this, I agree to communicate with the Physician or the
          Physician’s staff using these Services with a full understanding of
          the risk.
        </p>
        <p>
          I acknowledge that either I or the Physician may, at any time,
          withdraw the option of communicating electronically through the
          Services upon providing written notice. Any questions I had have been
          answered.
        </p>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="Name"
          onChange={(e) => setName(e)}
          name="name"
          value={name}
          validators={["minStringLength:2", "maxStringLength:40"]}
          errorMessages={["This field is required", "Name is not valid"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="Address"
          onChange={props.onInputChange}
          name="address"
          value={props.state.address}
          validators={["minStringLength:2", "maxStringLength:40"]}
          errorMessages={["This field is required", "Name is not valid"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="Home Phone (include area code)"
          onChange={props.onInputChange}
          name="homePhone"
          value={props.state.homePhone}
          validators={["minStringLength:0", "maxStringLength:16"]}
          errorMessages={[
            "Enter your home phone number with area code",
            "Too long",
          ]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="Mobile Phone (include area code)"
          onChange={props.onInputChange}
          name="mobilePhone"
          value={props.state.mobilePhone}
          validators={["minStringLength:0", "maxStringLength:16"]}
          errorMessages={["Enter a valid phone number", "Too long"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="Email"
          onChange={props.onInputChange}
          name="email"
          value={props.state.email}
          validators={[
            "required",
            "isEmail",
            "minStringLength:9",
            "maxStringLength:40",
          ]}
          errorMessages={[
            "This field is required",
            "email is not valid",
            "email is not valid",
            "email is too long",
          ]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
    </>
  );
};
const mapStateToProps = (state) => ({
  name: state.name,
});

const mapDispatchToProps = (dispatch) => ({
  setName: (e) => dispatch(setName(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Patient);
