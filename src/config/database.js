const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://sajanmoon5:moonprsajan@devtinderapp.qqjcu.mongodb.net/TodosApp"
  );
};

module.exports = connectDB;
