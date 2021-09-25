const express = require("express");
const path = require('path');
const cors = require("cors");


// ---------------- APP SETTING
const app = express();
const static = express.static(path.join(__dirname, 'public'));

app.use(express.json());
app.use(express.text({ defaultCharset: "utf-8" }));
app.use(express.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded

app.use(cors({ origin: "http://localhost:8081" }));
app.use(static)


// ---------- PORT SETTING
const PORT = process.env.CLI_PORT || 8080;
app.listen(PORT, () => {
  console.log(`=== Listening on port ${PORT} ... @app.js`);
});








// deprecated - https://www.bezkoder.com/serve-vue-app-express/
// simple route
// app.get("/", (req, res) => {
//  res.json({ message: "Welcome to bezkoder application." });
// });

