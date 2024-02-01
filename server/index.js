const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const routes = require("./src/routes");

app.use(cors());
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
