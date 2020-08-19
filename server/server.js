require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
app.set("trust proxy", true);
const cors = require("cors");
//encrypt pdf

const buildPath = path.join(__dirname, "..", "build");
app.use(express.json());

app.use(express.static(buildPath));
app.use(cors());

const registration = require("./routes/registration");
const covid = require("./routes/covid");
const aesthetics = require("./routes/aesthetics");
const consent = require("./routes/consent");

app.use(registration);
app.use(covid);
app.use(aesthetics);
app.use(consent);

app.use(express.static(path.join(__dirname, "../frontend/build")));
app.listen(3030, () => {
  console.log("server on port 3030");
});
