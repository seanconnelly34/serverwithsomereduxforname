import React from "react";
import {
  Grid,
  Checkbox,
  FormControl,
  FormControlLabel,
} from "@material-ui/core";
import { TextValidator } from "react-material-ui-form-validator";
import NewDate from "../../../utils/NewDate";
const Appendix = (props) => {
  const fontSize = 19;
  return (
    <>
      <Grid item xs={12} sm={12}>
        <h1>APPENDIX</h1>
      </Grid>
      <Grid item xs={12} sm={12}>
        <p style={{ fontWeight: "bold" }}>
          Risks of using electronic communication
        </p>
        <p>
          The Physician will use reasonable means to protect the security and
          confidentiality of information sent and received using the Services
          (“Services” is defined in the attached Consent to use electronic
          communications). However, because of the risks outlined below, the
          Physician cannot guarantee the security and confidentiality of
          electronic communications:
        </p>
        <ul>
          <li>
            Use of electronic communications to discuss sensitive information
            can increase the risk of such information being disclosed to third
            parties.
          </li>
          <li>
            Despite reasonable efforts to protect the privacy and security of
            electronic communication, it is not possible to completely secure
            the information.
          </li>
          <li>
            Employers and on-line services may have a legal right to inspect and
            keep electronic communications that pass through their system.{" "}
          </li>
          <li>
            Electronic communications can introduce malware into a computer
            system, and potentially damage or disrupt the computer, networks,
            and security settings.{" "}
          </li>
          <li>
            Electronic communications can be forwarded, intercepted, circulated,
            stored, or even changed without the knowledge or permission of the
            Physician or the patient.{" "}
          </li>
          <li>
            ven after the sender and recipient have deleted copies of electronic
            communications, back-up copies may exist on a computer system.{" "}
          </li>
          <li>
            Electronic communications maybe disclosed in accordance with a duty
            to report or a court order.{" "}
          </li>
          <li>
            Video conferencing using services such as Skype, FaceTime or Zoom
            may be more open to interception than other forms of video
            conferencing.{" "}
          </li>
        </ul>

        <p style={{ fontWeight: "bold" }}>
          If the email or text is used as an e-communication tool, the following
          are additional risks:
        </p>

        <ul>
          <li>
            Email, text messages, and instant messages can more easily be
            misdirected, resulting in increased risk of being received by
            unintended and unknown recipients.{" "}
          </li>
          <li>
            Email, text messages, and instant messages can be easier to falsify
            than handwritten or signed hard copies. It is not feasible to verify
            the true identity of the sender, or to ensure that only the
            recipient can read the message once it has been sent.{" "}
          </li>
        </ul>
        <p style={{ fontWeight: "bold" }}>Conditions of using the Services</p>

        <ul>
          <li>
            While the Physician, or the Physician’s staff, will attempt to
            review and respond in a timely fashion to your electronic
            communication, the Physician, or the Physician’s staff, cannot
            guarantee that all electronic communications will be reviewed and
            responded to within any specific period of time. The Services will
            not be used for medical emergencies or other time-sensitive matters.{" "}
          </li>
          <li>
            If your electronic communication requires or invites a response from
            the Physician, or the Physician’s staff, and you have not received a
            response within a reasonable time period, it is your responsibility
            to follow up to determine whether the intended recipient received
            the electronic communication and when the recipient will respond.{" "}
          </li>
          <li>
            Electronic communication is not an appropriate substitute for
            in-person or over-the-telephone communication or clinical
            examinations, where appropriate, or for attending the Emergency
            Department when needed. You are responsible for following up on the
            Physician’s electronic communication and for scheduling appointments
            where warranted.{" "}
          </li>
          <li>
            Electronic communications concerning diagnosis or treatment may be
            printed or transcribed in full and made part of your medical record.
            Other individuals authorized to access the medical record, such as
            staff and billing personnel, may have access to those
            communications.{" "}
          </li>
          <li>
            The Physician may forward electronic communications to staff and
            those involved in the delivery and administration of your care. The
            Physician might use one or more of the Services to communicate with
            those involved in your care. The Physician will not forward
            electronic communications to third parties, including family
            members, without your prior written consent, except as authorized or
            required by law.
          </li>
          <li>
            You and the Physician will not use the Services to communicate
            sensitive medical information about matters specified below
            <br />
            <br /> [check all that apply]:{" "}
          </li>
        </ul>
      </Grid>
      <Grid item xs={12} sm={12}>
        <div style={{ marginLeft: 40, marginTop: -20 }}>
          <FormControl component="fieldset" fullWidth>
            <FormControlLabel
              value={props.state.std}
              control={
                <Checkbox
                  checked={props.state.std}
                  color="primary"
                  onChange={props.onCheck}
                  name="std"
                />
              }
              label="Sexually transmitted disease "
              labelPlacement="end"
            />
            <FormControlLabel
              value={props.state.hiv}
              control={
                <Checkbox
                  checked={props.state.hiv}
                  color="primary"
                  onChange={props.onCheck}
                  name="hiv"
                />
              }
              label="AIDS/HIV"
              labelPlacement="end"
            />
            <FormControlLabel
              value={props.state.mental}
              control={
                <Checkbox
                  checked={props.state.mental}
                  color="primary"
                  onChange={props.onCheck}
                  name="mental"
                />
              }
              label="Mental health"
              labelPlacement="end"
            />
            <FormControlLabel
              value={props.state.disability}
              control={
                <Checkbox
                  checked={props.state.disability}
                  color="primary"
                  onChange={props.onCheck}
                  name="disability"
                />
              }
              label="Developmental disability"
              labelPlacement="end"
            />
            <FormControlLabel
              value={props.state.substanceAbuse}
              control={
                <Checkbox
                  checked={props.state.substanceAbuse}
                  color="primary"
                  onChange={props.onCheck}
                  name="substanceAbuse"
                />
              }
              label="Substance Abuse"
              labelPlacement="end"
            />
            <FormControlLabel
              value={props.state.other}
              control={
                <Checkbox
                  checked={props.state.other}
                  color="primary"
                  onChange={props.onCheck}
                  name="other"
                />
              }
              label="Other (specify):"
              labelPlacement="end"
            />
          </FormControl>
          <TextValidator
            fullWidth
            label="Specify"
            onChange={props.onInputChange}
            name="otherDescription"
            value={props.state.otherDescription}
            validators={["minStringLength:0", "maxStringLength:60"]}
            errorMessages={["", "Too long"]}
            inputProps={{ style: { fontSize: fontSize } }}
            InputLabelProps={{ style: { fontSize: fontSize } }}
          />
        </div>
      </Grid>
      <Grid item xs={12} sm={12}>
        <ul>
          <li>
            You agree to inform the Physician of any types of information you do
            not want sent via the Services, in addition to those set out above.
            You can add to or modify the above list at any time by notifying the
            Physician in writing.
          </li>
          <li>
            Some Services might not be used for therapeutic purposes or to
            communicate clinical information. Where applicable, the use of these
            Services will be limited to education, information, and
            administrative purposes.
          </li>
          <li>
            The Physician is not responsible for information loss due to
            technical failures associated with your software or internet service
            provider.
          </li>
        </ul>
      </Grid>
      <Grid item xs={12} sm={12}>
        <p style={{ fontWeight: "bold" }}>
          Instructions for communication using the Service
        </p>
        <p>To communicate using the Services, you must:</p>
        <ul>
          <li>
            Reasonably limit or avoid using an employer’s or other third party’s
            computer.{" "}
          </li>
          <li>
            Inform the Physician of any changes in the patient’s email address,
            mobile phone number, or other account information necessary to
            communicate via the Services.{" "}
          </li>
        </ul>
        <p style={{ fontWeight: "bold" }}>
          If the Services include email, instant messaging and/or text
          messaging, the following applies:
        </p>
        <ul>
          <li>
            Include in the message’s subject line an appropriate description of
            the nature of the communication, and your full name in the body of
            the message.{" "}
          </li>
          <li>
            Review all electronic communications to ensure they are clear and
            that all relevant information is provided before sending to the
            physician.{" "}
          </li>
          <li>
            Ensure the Physician is aware when you receive an electronic
            communication from the Physician, such as by a reply message or
            allowing “read receipts” to be sent.{" "}
          </li>
          <li>
            Take precautions to preserve the confidentiality of electronic
            communications, such as using screen savers and safeguarding
            computer passwords.{" "}
          </li>
          <li>
            Withdraw consent only by email or written communication to the
            Physician.{" "}
          </li>
          <li>
            <strong>
              If you require immediate assistance, or if your condition appears
              serious or rapidly worsens, you should not rely on the Services.
            </strong>
            Rather, you should call the Physician’s office or take other
            measures as appropriate, such as going to the nearest Emergency
            Department or urgent care clinic.
          </li>
          <li>Other conditions of use in addition to those set out above.</li>
        </ul>
      </Grid>
    </>
  );
};

export default Appendix;
