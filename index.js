const express = require("express");
const app = express();
const { PORT } = require("./config/config.js");

app.use(require("./middleware/logger.js"));
app.use(require("./routes/router.js"));
app.use(require("./middleware/404.js"));

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
