const express = require("express");
const connectDB = require("./config/database");
const authRouter = require("./routes/user");

const app = express();

app.use(express.json());

app.use("/", authRouter);

app.use((req, res) => {
  res.send("Hello from the server");
});

connectDB()
  .then(() => {
    console.log("database connected succesfully");
    app.listen(3000, () => {
      console.log("listing on server 3000");
    });
  })
  .catch((error) => {
    console.log("database connection failedd", error);
  });
