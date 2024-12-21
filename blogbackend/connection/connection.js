const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL || "mongodb+srv://preethu:preethu@cluster0.eksdofl.mongodb.net/BlogData?retryWrites=true&w=majority&appName=Cluster0",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("DB is connected");
})
.catch((error) => {
  console.error('Error in connection', error);
});
