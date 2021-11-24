const express = require("express");
const errorHandler = require("errorhandler");
const path = require('path');
const cors = require("cors");
const axios = require('axios');
const { checkContentsServer } = require('./modules/heimdall');
const { logg } = require('./modules/logger');



// EXPRESS APP SETTING ------------------------
const app = express();
app.use(express.json({
  limit: "50mb"
}));
app.use(express.text({
  defaultCharset:"utf-8",
  limit: "50mb"
}));
app.use(express.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded



// DEVELOP / PRODUCITION SETTING --------------
const corsOptions = {
  origin: [
    "http://localhost:4433",
    "http://13.76.155.192",
  ],
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions)); 
if (process.env.NODE_ENV === "development") {
  app.use(errorHandler({ dumpExceptions: true, showStack: true }))
}
if (process.env.NODE_ENV === "production") {
  app.use(errorHandler())
}



// SERVE --------------------------------------
logg(`[@app.js] SERVICE RUN LEVEL : ${process.env.NODE_ENV}`);
const static = express.static(path.join(__dirname, 'public'));
app.use(static)



// CONTENTS SERVER ----------------------------
checkContentsServer();
const vendor = require('./routes/vendor');
app.use('/vendor', vendor);


// API ROUTING --------------------------------
const visitor = require('./routes/visitor');
app.use('/visitor/api', visitor);



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
  logg(`[@app.js] Listening on port ${PORT}\n\n\n`);
});

const mongo = require('./modules/mongo');