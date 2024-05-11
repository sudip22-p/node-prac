// require('dotenv').config(); // Load environment variables from .env file
// const express = require('express');
// const mongoose = require('mongoose');
import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import mongoose from 'mongoose'
import { Blog } from './models/Blog.js';

const app = express();
const port = 3000;
const dbPassword = process.env.MONGODB_PASSWORD; // Retrieve password from environment variable

// Construct the connection string using the password
const dbURI = `mongodb+srv://paudelsudip134:${dbPassword}@cluster0.bldqpkj.mongodb.net/learnMERN?retryWrites=true&w=majority&appName=Cluster0`;

const conn= mongoose.connect(dbURI)
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.log("Error occurred:", err);
  });

app.get('/', (req, res) => {
  const blog=new Blog({title:'Hello',author:'Shreyas Iyer',body:'qwertyuiop asdfghjkl zxcvbnm',hidden:'false'})
  blog.save()
  res.send('Hello SUDIP!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
