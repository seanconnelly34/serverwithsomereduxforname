import React from "react";
import { Grid } from "@material-ui/core";
import { TextValidator } from "react-material-ui-form-validator";
import NewDate from "../../../utils/NewDate";
import { connect } from "react-redux";
import { setName } from "../../../redux/actions";
const Risk = (props) => {
  const fontSize = 19;
  const { name, setName } = props;
  return (
    <>
      <Grid item xs={12} sm={6}>
        <TextValidator
          disabled
          fullWidth
          label="Date"
          onChange={props.onInputChange}
          placeholder={NewDate()}
          name="date"
          value={NewDate()}
          validators={["minStringLength:2", "maxStringLength:40"]}
          errorMessages={["This field is required", "Date is not valid"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextValidator
          fullWidth
          label="Patient Full Name"
          onChange={(e) => setName(e)}
          name="name"
          value={name}
          validators={["minStringLength:4", "maxStringLength:40"]}
          errorMessages={["This field is required", "Date is not valid"]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <TextValidator
          fullWidth
          label="Date of Birth (YYYY/MM/DD)"
          onChange={props.onInputChange}
          name="dob"
          placeholder="YYYY/MM/DD"
          value={props.state.dob}
          validators={["minStringLength:10", "maxStringLength:10"]}
          errorMessages={[
            "This field is required",
            "Date of birth is not valid",
          ]}
          inputProps={{ style: { fontSize: fontSize } }}
          InputLabelProps={{ style: { fontSize: fontSize } }}
        />
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => ({
  name: state.commonFields.name,
});
const mapDispatchToProps = (dispatch) => ({
  setName: (e) => dispatch(setName(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Risk);
