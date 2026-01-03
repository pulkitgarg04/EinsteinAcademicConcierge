import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema({
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
  course_id: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
  term: { type: String, required: true },
  status: {
    type: String,
    enum: ["enrolled", "waitlisted", "dropped"],
    default: "enrolled"
  }
}, { timestamps: true });

enrollmentSchema.index({ student_id: 1, course_id: 1, term: 1 }, { unique: true });

export default mongoose.model("Enrollment", enrollmentSchema);
