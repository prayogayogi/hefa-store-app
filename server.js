const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");

const app = express();
// Serve files form our dist directory which now contains our index.html file
app.use("/", serveStatic(path.join(__dirname, "/dist")));

const port = proccess.env.PORT || 8080;
app.listen(port);

console.log(`Listening or port ${port}`);
