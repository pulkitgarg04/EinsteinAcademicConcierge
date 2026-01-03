import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  credits: { type: Number, required: true },
  discipline_id: { type: mongoose.Schema.Types.ObjectId, ref: "Discipline" },
  capacity: { type: Number, required: true }
}, { timestamps: true });

export default mongoose.model("Course", courseSchema);
