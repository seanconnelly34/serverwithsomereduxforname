require("dotenv").config();
const path = require("path");
const express = require("express");
const router = new express.Router();
const fs = require("fs");
const PDFDocument = require("pdfkit");
const transporter = require("../config");
const Timestamp = require("../utils/Timestamp");

router.post("/covid", (req, res) => {
  const secondsId = Timestamp();
  const doc = new PDFDocument({ margin: 20, compress: false });
  let fileName = req.body.name;

  doc.pipe(
    fs.createWriteStream(__dirname + `/Covid_${fileName}_${secondsId}.pdf`)
  );
  // Set some meta data
  doc.info["Title"] = "Covid Assessment Form";
  doc.info["Author"] = "Landings Surgical Center";
  doc.fontSize(17);
  doc.text("Covid Assessment Form", {
    underline: true,
    align: "center",
  });

  doc.fontSize(11);
  //----------------------------------------- LEFT SIDE START
  //DATE
  doc.font("Times-Bold");
  doc.text("Date:", 50, 90, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.date, 145, 90);
  //END DATE
  // NAME
  doc.font("Times-Bold");
  doc.text("Name:", 50, 110, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.name, 145, 110);
  //END
  // DOB
  doc.font("Times-Bold");
  doc.text("Date of birth:", 50, 130, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.dob, 145, 130);
  //END DOB

  doc.rect(50, 160, 510, 0).stroke();

  doc.font("Times-Bold");
  doc.text("Symptoms", 50, 190, {
    underline: true,
  });

  doc.font("Times-Roman");
  doc.text("New or worsening cough:", 50, 210);
  doc.text(`${req.body.cough ? "Yes" : "No"}`, 185, 210);

  doc.text("Fever > 38 C, chills, sweats):", 50, 230);
  doc.text(`${req.body.fever ? "Yes" : "No"}`, 185, 230);

  doc.text("Sore or hoarse throat:", 50, 250);
  doc.text(`${req.body.throat ? "Yes" : "No"}`, 185, 250);

  doc.text("Headache:", 50, 270);
  doc.text(`${req.body.headache ? "Yes" : "No"}`, 185, 270);

  doc.text("Nasal Congestion:", 50, 290);
  doc.text(`${req.body.nose ? "Yes" : "No"}`, 185, 290);

  doc.text("Sneezing:", 50, 310);
  doc.text(`${req.body.sneeze ? "Yes" : "No"}`, 185, 310);

  doc.text("Loss of smell or taste:", 50, 330);
  doc.text(`${req.body.smellTaste ? "Yes" : "No"}`, 185, 330);

  doc.text("Shortness of breath:", 50, 350);
  doc.text(`${req.body.breath ? "Yes" : "No"}`, 185, 350);

  doc.text("Muscle aches:", 50, 370);
  doc.text(`${req.body.aches ? "Yes" : "No"}`, 185, 370);

  doc.text("Unusual fatigue:", 50, 390);
  doc.text(`${req.body.fatique ? "Yes" : "No"}`, 185, 390);

  doc.text("Lesions on feet, toes,fingers:", 50, 410);
  doc.text(`${req.body.lesions ? "Yes" : "No"}`, 185, 410);

  doc.text("Diarrhea:", 50, 430);
  doc.text(`${req.body.lesions ? "Yes" : "No"}`, 185, 430);

  doc.rect(50, 460, 510, 0).stroke();

  doc.text(
    "Have you travelled outside of Maritime Canada in the last 14 days (outside of NB, NS, PEI):",
    50,
    490
  );
  doc.text(req.body.day14Travel, 460, 490);

  doc.text("Have you had close contact with Covid-19:", 50, 510);
  doc.text(req.body.closeContact, 460, 510);

  doc.text(
    "Do you live within a known cluster as identified on the COVID-19 Hub:",
    50,
    530
  );
  doc.text(req.body.clusterHub, 460, 530);

  doc.text("Have you been tested for COVID-19:", 50, 550);
  doc.text(req.body.tested, 460, 550);

  doc.text("Date of test:", 50, 570);
  doc.text(
    `${req.body.dateOfSwab === "" ? "NA" : req.body.dateOfSwab}`,
    460,
    570
  );

  doc.image(req.body.trimmedSignature, 50, 600, { width: 150 });

  doc.end();

  // res.json({
  //   success: true,
  //   message: "thanks for contacting us.",
  // });
  try {
    const mailOptions = {
      from: "sean@suhbae.com",
      to: "sean@suhbae.com",
      subject: `Covid-19 Assessment - ${req.body.name}`,
      html: req.body.date,
      html: req.body.name,
      attachments: [
        {
          filename: `Covid_${fileName}_${secondsId}.pdf`,
          path: __dirname + `/Covid_${fileName}_${secondsId}.pdf`,
          contentType: "application/pdf",
        },
      ],
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.status(500).send({
          success: false,
          message: "sending mail went wrong, try again",
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
      message: "covid end catch block, try again later",
    });
  }
});

module.exports = router;
