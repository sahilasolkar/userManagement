const express = require("express");
const { userRoute } = require("./routes/userRoutes");

require("./config/db");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoute);

app.get("/", async (req, res) => {
  res.send("user Management");
});

app.listen(5000, () => {
  console.log("Server listening on PORT: 5000");
});
