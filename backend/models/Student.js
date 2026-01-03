import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  enrollment_id: { type: String, required: true, unique: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  preferred_name: String,
  discipline_id: { type: mongoose.Schema.Types.ObjectId, ref: "Discipline" },
  status: {
    type: String,
    enum: ["active", "graduated", "dropped"],
    default: "active"
  }
}, { timestamps: true });

export default mongoose.model("Student", studentSchema);
