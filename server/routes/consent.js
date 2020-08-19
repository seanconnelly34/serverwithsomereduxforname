require("dotenv").config();
const path = require("path");
const express = require("express");
const router = new express.Router();
const fs = require("fs");
const PDFDocument = require("pdfkit");
const transporter = require("../config");
const Timestamp = require("../utils/Timestamp");

router.post("/consent", (req, res) => {
  const secondsId = Timestamp();
  const doc = new PDFDocument({ margin: 20, compress: false });
  let fileName = req.body.name;

  doc.pipe(
    fs.createWriteStream(__dirname + `/Consent_${fileName}_${secondsId}.pdf`)
  );
  // Set some meta data
  doc.info["Title"] = "Consent to use Electronic Communication";
  doc.info["Author"] = "Landings Surgical Center";

  doc.fontSize(11);

  doc.image(__dirname + "/consent1.jpg", 10, 10, { width: 600 });
  doc.text(req.body.name, 120, 592);
  doc.text(req.body.address, 140, 620);
  doc.text(req.body.homePhone, 160, 648);
  doc.text(req.body.mobilePhone, 440, 648);
  doc.text(req.body.email, 120, 673);
  doc.text(req.body.date, 100, 745);
  doc.image(req.body.trimmedSignature, 138, 695, { width: 80 });

  doc.addPage();
  doc.image(__dirname + "/consent2.jpg", 10, 10, { width: 600 });
  doc.addPage();
  doc.image(__dirname + "/consent3.jpg", 10, 10, { width: 600 });
  doc.fontSize(9);
  doc.text(`${req.body.std ? "Yes" : ""}`, 79, 467);
  doc.text(`${req.body.hiv ? "Yes" : ""}`, 79, 483);
  doc.text(`${req.body.mental ? "Yes" : ""}`, 79, 497);
  doc.text(`${req.body.disability ? "Yes" : ""}`, 79, 511);
  doc.text(`${req.body.substanceAbuse ? "Yes" : ""}`, 79, 524);
  doc.text(`${req.body.other ? "Yes" : ""}`, 79, 537);
  doc.text(req.body.otherDescription, 179, 537);
  doc.addPage();
  doc.image(__dirname + "/consent4.jpg", 10, 10, { width: 600 });
  doc.image(req.body.trimmedSignature, 138, 595, { width: 120 });
  doc.fontSize(11);
  doc.text(req.body.date, 400, 600);
  doc.end();

  try {
    const mailOptions = {
      from: "sean@suhbae.com",
      to: "sean@suhbae.com",
      subject: `Consent - ${req.body.name}`,
      html: req.body.date,
      html: req.body.name,
      attachments: [
        {
          filename: `Consent_${fileName}_${secondsId}.pdf`,
          path: __dirname + `/Consent_${fileName}_${secondsId}.pdf`,
          contentType: "application/pdf",
        },
      ],
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.status(500).send({
          success: false,
          message: "somthing went wrong, try again",
        });
      } else {
        res.send({
          success: true,
          message: "thanks for contacting us.",
        });
      }
    });
  } catch (error) {
    res.sendStatus(500).send({
      success: false,
      message: "Somting went wrong, try again later",
    });
  }
});

module.exports = router;
