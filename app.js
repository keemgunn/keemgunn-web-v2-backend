const express = require("express");
const errorHandler = require("errorhandler");
const path = require('path');
const cors = require("cors");
const axios = require('axios');

let vendorURL = ""



// EXPRESS APP SETTING ------------------------
const app = express();
app.use(express.json());
app.use(express.text({ defaultCharset: "utf-8" }));
app.use(express.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded



// DEVELOP / PRODUCITION SETTING --------------
if (process.env.NODE_ENV === "development") {
  app.use(errorHandler({ dumpExceptions: true, showStack: true }))
  app.use(cors({ origin: "http://localhost:8084" }));
  vendorURL = "http://localhost:4433"
}
if (process.env.NODE_ENV === "production") {
  app.use(errorHandler())
  app.use(cors({ origin: "http://localhost:8080" }));
  vendorURL = "http://13.76.155.192"
}



// SERVE --------------------------------------
console.log(`[@app.js] SERVICE RUN LEVEL : ${process.env.NODE_ENV}`);
const static = express.static(path.join(__dirname, 'public'));
app.use(static)



// API ROUTING --------------------------------
const visitor = require('./routes/visitor');
app.use('/visitor/api', visitor);
const vendor = require('./routes/vendor');
app.use('/vendor', vendor);



// for VUE-ROUTER -----------------------------
app.all("*", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  } catch (error) {
    res.json({ success: false, message: "Something went wrong" });
  }
});



// PORT SETTING -------------------------------
const PORT = (process.env.NODE_ENV === "production") ? 1080 : 8080;
app.listen(PORT, () => {
  console.log(`[@app.js] Listening on port ${PORT} \n\n\n`);
});



// VENDER LINK INITIATE -----------------------
const heimdall = require('./modules/heimdall');

