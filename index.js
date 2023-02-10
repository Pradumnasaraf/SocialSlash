const express = require("express");
const app = express();

app.use(require("./middleware/logger.js"));
app.use(require("./routes/router.js"));
app.use(require("./middleware/404.js"));

const PORT = process.env.PORT || 9002;

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
