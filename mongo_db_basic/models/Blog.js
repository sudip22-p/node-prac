import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  hidden: Boolean,
});
//conversion of schema to model
export const Blog = mongoose.model('Blog', blogSchema);