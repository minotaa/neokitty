import mongoose, { Schema } from "mongoose";

const CatSchema: Schema = new Schema({
  user: {
    type: String,
    required: true
  },
  name: String,
  createdAt: Date,
  happiness: Number,
  hunger: Number,
  fitness: Number,
  level: Number,
  exp: Number,
  grownUp: Boolean
})

export default mongoose.model('cats', CatSchema)