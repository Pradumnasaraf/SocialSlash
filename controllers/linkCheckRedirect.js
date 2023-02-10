const fs = require("fs");
const path = require("path");

let rawdata = fs.readFileSync(path.join(__dirname, "../config/links.json"));
let links = JSON.parse(rawdata);

const linkCheckRedirect = (req, res) => {
  let endpoint = req.params.endpoint;
  endpoint = endpoint.toLowerCase();
  let isUrlAvailable = links.hasOwnProperty(endpoint);
  if (isUrlAvailable) {
    res.redirect(links[endpoint]);
  } else {
    res.status(404).send(`Endpoint /${endpoint} not found`);
  }
};

module.exports = linkCheckRedirect;
