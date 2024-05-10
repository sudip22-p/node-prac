require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const dbPassword = process.env.MONGODB_PASSWORD; // Retrieve password from environment variable

// Construct the connection string using the password
const dbURI = `mongodb+srv://paudelsudip134:${dbPassword}@cluster0.bldqpkj.mongodb.net/learnMERN?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(dbURI)
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.log("Error occurred:", err);
  });

app.get('/', (req, res) => {
  res.send('Hello SUDIP!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
