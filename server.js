const express = require("express");
const app = express();
const PORT = 5000;

const apiRoutes = require("./routes/api-routes");
const publicRoutes = require("./routes/public-routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", apiRoutes);
app.use("/", publicRoutes);
app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));