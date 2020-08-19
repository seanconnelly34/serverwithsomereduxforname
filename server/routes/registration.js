require("dotenv").config();
const path = require("path");
const express = require("express");
const router = new express.Router();
const fs = require("fs");
const PDFDocument = require("pdfkit");
const transporter = require("../config");
const Timestamp = require("../utils/Timestamp");

router.post("/registration", (req, res) => {
  const secondsId = Timestamp();
  const doc = new PDFDocument({ margin: 20, compress: false });
  let fileName = req.body.name;
  doc.pipe(
    fs.createWriteStream(
      __dirname + `/Registration_${fileName}_${secondsId}.pdf`
    )
  );
  // Set some meta data
  doc.info["Title"] = "Landings Surgical Center Registration Form";
  doc.info["Author"] = "Landings Surgical Center";
  doc.fontSize(17);
  doc.text("The Landings Surgical Center", {
    underline: true,
    align: "center",
  });
  doc.fontSize(12);
  doc.moveDown();
  doc.text("Pre-Screening Data", { align: "center" });
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
  // DOB
  doc.font("Times-Bold");
  doc.text("Date of birth:", 50, 110, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.dob, 145, 110);
  //END DOB
  // HEALTHCARD
  doc.font("Times-Bold");
  doc.text("Health Card #:", 50, 130, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.healthcard, 145, 130);
  //END HEALTHCARD
  // EXPIRY DATE
  doc.font("Times-Bold");
  doc.text("Expiry Date:", 50, 150, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.expirydate, 145, 150);
  //END expiry date
  // EXPIRY CITY
  doc.font("Times-Bold");
  doc.text("City:", 50, 170, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.city, 145, 170);
  //END city
  // EXPIRY postal
  doc.font("Times-Bold");
  doc.text("Postal Code:", 50, 190, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.postal, 145, 190);
  //END postal
  // work phone
  doc.font("Times-Bold");
  doc.text("Work Phone:", 50, 210, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.workphone, 145, 210);
  //END workphone
  // work email
  doc.font("Times-Bold");
  doc.text("Family Physician:", 50, 230, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.famphysician, 145, 230);
  //END email
  // fam doc
  doc.font("Times-Bold");
  doc.text("Email:", 50, 250, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.email, 145, 250);
  //END
  // contacted
  doc.font("Times-Bold");
  doc.text("Prefered contact method:", 50, 270, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.contacted, 185, 270);
  //END
  // contacted
  doc.font("Times-Bold");
  doc.text("How did you hear of us:", 50, 290, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.hearofus, 185, 290);
  //END
  //----------------------------------------- RIGHT SIDE START
  //NAME
  doc.font("Times-Bold");
  doc.text("Name:", 300, 90, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.name, 390, 90);
  // END
  // AGE
  doc.font("Times-Bold");
  doc.text("Age:", 300, 110, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.dob, 390, 110);
  //END
  // effective date
  doc.font("Times-Bold");
  doc.text("Effective Date:", 300, 130, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.effectivedate, 390, 130);
  //END
  // street address
  doc.font("Times-Bold");
  doc.text("Street Address:", 300, 150, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.streetaddress, 390, 150);
  //END
  // province
  doc.font("Times-Bold");
  doc.text("Province:", 300, 170, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.province, 390, 170);
  //END
  // homephone
  doc.font("Times-Bold");
  doc.text("Home Phone:", 300, 190, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.homephone, 390, 190);
  //END
  // cell
  doc.font("Times-Bold");
  doc.text("Cell Phone:", 300, 210, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.cellphone, 390, 210);
  //END
  // occupation
  doc.font("Times-Bold");
  doc.text("Occupation:", 300, 230, {
    underline: true,
  });
  doc.font("Times-Roman");
  doc.text(req.body.occupation, 390, 230);
  //END

  doc.rect(50, 330, 510, 0).stroke();

  // doc.image("line.png", 50, 650, { width: 510 });

  doc.font("Times-Bold");
  doc.text("Medical History", 50, 350, {
    underline: true,
  });

  doc.font("Times-Roman");
  doc.text("Heart Attack:", 50, 390);
  doc.text(`${req.body.heartattack ? "Yes" : "No"}`, 175, 390);
  doc.text(req.body.heartattackDate, 185, 390);

  doc.text("Heart Disease:", 50, 410);
  doc.text(`${req.body.heartdisease ? "Yes" : "No"}`, 175, 410);
  doc.text(req.body.heartdiseaseDate, 185, 410);

  doc.text("Chest Pain:", 50, 430);
  doc.text(`${req.body.chestpain ? "Yes" : "No"}`, 175, 430);
  doc.text(req.body.chestpainDate, 185, 430);

  doc.text("Stroke:", 50, 450);
  doc.text(`${req.body.stroke ? "Yes" : "No"}`, 175, 450);
  doc.text(req.body.strokeDate, 185, 450);

  doc.text("Blood Clots:", 50, 470);
  doc.text(`${req.body.bloodclots ? "Yes" : "No"}`, 175, 470);
  doc.text(req.body.bloodclotsDate, 185, 470);

  doc.text("Prolonged Bleeding:", 50, 490);
  doc.text(`${req.body.bleeding ? "Yes" : "No"}`, 175, 490);
  doc.text(req.body.bleedingDate, 185, 490);

  doc.text("High Blood Pressure:", 50, 510);
  doc.text(`${req.body.bloodpressure ? "Yes" : "No"}`, 175, 510);
  doc.text(req.body.bloodpressureDate, 185, 510);

  doc.text("Kidney Disease:", 50, 530);
  doc.text(`${req.body.kidneydisease ? "Yes" : "No"}`, 175, 530);
  doc.text(req.body.kidneydiseaseDate, 185, 530);

  doc.text("Trouble Opening Mouth:", 50, 550);
  doc.text(`${req.body.openingmouth ? "Yes" : "No"}`, 175, 550);
  doc.text(req.body.openingmouthDate, 195, 550);

  doc.text("Sleep Apnea:", 50, 570);
  doc.text(`${req.body.sleepApnea ? "Yes" : "No"}`, 175, 570);
  doc.text(`Other: ${req.body.sleepApneaOther}`, 195, 570);

  doc.text("Smoker:", 50, 590);
  doc.text(`${req.body.doSmoke ? "Yes" : "No"}`, 175, 590);
  doc.text(`# per day: ${req.body.smokeNumn}`, 205, 590);

  doc.text("Quit smoking:", 50, 610);
  doc.text(`${req.body.didSmoke ? "Yes" : "No"}`, 175, 610);
  doc.text(req.body.smokeQuit, 205, 610);

  doc.text("Height:", 50, 630);
  doc.text(req.body.height, 175, 630);

  //-----------------------------right side
  doc.text("Diabetes:", 300, 390);
  doc.text(`${req.body.diabetes ? "Yes" : "No"}`, 405, 390);
  doc.text(req.body.diabetesDate, 435, 390);

  doc.text("Arthritis:", 300, 410);
  doc.text(`${req.body.arthritis ? "Yes" : "No"}`, 405, 410);
  doc.text(req.body.arthritisDate, 435, 410);

  doc.text("Asthma/Bronchitis:", 300, 430);
  doc.text(`${req.body.asthma ? "Yes" : "No"}`, 405, 430);
  doc.text(req.body.asthmaDate, 435, 430);

  doc.text("Seizures:", 300, 450);
  doc.text(`${req.body.seizures ? "Yes" : "No"}`, 405, 450);
  doc.text(req.body.seizuresDate, 435, 450);

  doc.text("Thyroid Disease:", 300, 470);
  doc.text(`${req.body.thyroid ? "Yes" : "No"}`, 405, 470);
  doc.text(req.body.thyroidDate, 435, 470);

  doc.text("Liver Disease:", 300, 490);
  doc.text(`${req.body.liversisease ? "Yes" : "No"}`, 405, 490);
  doc.text(req.body.liversiseaseDate, 435, 490);

  doc.text("HIV/Hepatitis:", 300, 510);
  doc.text(`${req.body.hiv ? "Yes" : "No"}`, 405, 510);
  doc.text(req.body.hivDate, 435, 510);

  doc.text("Depresssion:", 300, 530);
  doc.text(`${req.body.depression ? "Yes" : "No"}`, 405, 530);
  doc.text(req.body.depressionDate, 435, 530);

  doc.text("Weight:", 300, 630);
  doc.text(req.body.weight, 405, 630);

  doc.text("Possibility of pregnancy:", 50, 660);
  doc.text(req.body.pregnancy, 165, 660);
  doc.addPage();
  doc.text("Previous Surgergies:", 50, 70);
  doc.text(`1. ${req.body.prevSurg1}`, 50, 90);
  doc.text(`2. ${req.body.prevSurg2}`, 300, 90);
  doc.text(`3. ${req.body.prevSurg3}`, 50, 110);
  doc.text(`4. ${req.body.prevSurg4}`, 300, 110);

  doc.font("Times-Bold");
  doc.text("Allergies", 50, 140, {
    underline: true,
  });

  doc.font("Times-Roman");
  doc.text("Medications:", 50, 170);
  doc.text(req.body.allergicMed, 185, 170);
  doc.text(req.body.whichMed, 205, 170);

  doc.text("Foods:", 50, 190);
  doc.text(req.body.allergicMed, 185, 190);
  doc.text(req.body.whichFood, 205, 190);

  doc.text("Latex:", 50, 210);
  doc.text(req.body.allergicLatex, 185, 210);

  doc.text("Iodine:", 50, 230);
  doc.text(req.body.allergicIodine, 185, 230);

  doc.text("Malignant Hyperthermia:", 50, 250);
  doc.text(req.body.hyperthermia, 185, 250);

  doc.text("Problems with Anesthetic:", 50, 270);
  doc.text(req.body.anesthetic, 185, 270);
  doc.text(req.body.anestheticDescribe, 50, 290);

  doc.font("Times-Bold");
  doc.text("Medications", 50, 320, {
    underline: true,
  });

  doc.font("Times-Roman");
  doc.text(`1. ${req.body.medication1}`, 50, 350);
  doc.text(`2. ${req.body.medication2}`, 50, 370);
  doc.text(`3. ${req.body.medication3}`, 50, 390);
  doc.text(`4. ${req.body.medication4}`, 50, 410);
  doc.text(`5. ${req.body.medication5}`, 50, 430);
  doc.text(`6. ${req.body.medication6}`, 50, 450);

  doc.rect(50, 470, 510, 0).stroke();
  doc.text(
    `Contacted for Botox/Dermal filler promotions:   ${req.body.promotions}`,
    50,
    490
  );
  doc.text(
    `Contacted for Clinical Skin Care Therapist:   ${req.body.skinCare}`,
    50,
    510
  );

  doc.font("Times-Bold");
  doc.text("Comments", 50, 540, {
    underline: true,
  });

  doc.font("Times-Roman");
  doc.text(`${req.body.comments}`, 50, 570, { columns: 1, width: 510 });
  {
  }
  doc.image(req.body.trimmedSignature, 50, 650, { width: 150 });
  doc.end();

  try {
    const mailOptions = {
      from: "sean@suhbae.com",
      to: "sean@suhbae.com",
      subject: `Registration - ${req.body.name}`,
      html: req.body.date,
      html: req.body.name,
      attachments: [
        {
          filename: `Registration_${fileName}_${secondsId}.pdf`,
          path: __dirname + `/Registration_${fileName}_${secondsId}.pdf`,
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
