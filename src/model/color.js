import { Schema, model } from "mongoose";

const colorSchema = new Schema({
  colorName: {
    type: String,
    minLength: 3,
    maxLength: 9,
    unique: true,
    required: true,
  },
});

const Color = model("color", colorSchema);

export default Color;
