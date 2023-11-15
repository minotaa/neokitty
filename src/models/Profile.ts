import mongoose, { Schema } from "mongoose";

const ProfileSchema: Schema = new Schema({
  id: {
    type: String,
    required: true
  },
})

export default mongoose.model('profiles', ProfileSchema)