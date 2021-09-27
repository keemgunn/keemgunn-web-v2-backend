const express = require("express");
const errorHandler = require("errorhandler");
const path = require('path');
const cors = require("cors");


// ---------------- EXPRESS APP SETTING
const app = express();
app.use(express.json());
app.use(express.text({ defaultCharset: "utf-8" }));
app.use(express.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded
app.use(cors({ origin: "http://localhost:8081" }));

if (process.env.NODE_ENV === "development") {
  app.use(errorHandler({ dumpExceptions: true, showStack: true }))
}
if (process.env.NODE_ENV === "production") {
  app.use(errorHandler())
}



// ---------- SERVE
console.log(`[==== SERVICE RUN LEVEL : ${process.env.NODE_ENV} ====]`);
const static = express.static(path.join(__dirname, 'public'));
app.use(static)





// ---------- PORT SETTING
const PORT = (process.env.NODE_ENV === "production") ? 1080 : 8080;
app.listen(PORT, () => {
  console.log(`[==== Listening on port ${PORT} ... @app.js ====]`);
});
