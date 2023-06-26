import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let rawdata = fs.readFileSync(path.join(__dirname, "../config/links.json"));
let links = JSON.parse(rawdata);

const linkCheckRedirect = (req, res) => {
  let endpoint = req.params.endpoint;
  endpoint = endpoint.toLowerCase();
  let isUrlAvailable = Object.prototype.hasOwnProperty.call(links, endpoint);
  if (isUrlAvailable) {
    res.redirect(links[endpoint]);
  } else {
    res.status(404).send(`Endpoint /${endpoint} not found`);
  }
};

export default linkCheckRedirect;
