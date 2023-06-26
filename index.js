import express from "express";
import { PORT } from "./config/config.js";
import logger from "./middleware/logger.js";
import router from "./routes/router.js";
import notFound from "./middleware/404.js";

const app = express();

app.use(logger);
app.use(router);
app.use(notFound);

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}.`);
});
