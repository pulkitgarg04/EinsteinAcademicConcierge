import express from "express";
import Enrollment from "../models/Enrollment.js";
import Course from "../models/Course.js";

const router = express.Router();

// AUTO-REGISTER WITH CAPACITY CHECK
router.post("/", async (req, res) => {
  const { course_id } = req.body;

  const enrolledCount = await Enrollment.countDocuments({
    course_id,
    status: "enrolled"
  });

  const course = await Course.findById(course_id);
  if (enrolledCount >= course.capacity) {
    req.body.status = "waitlisted";
  }

  const enrollment = await Enrollment.create(req.body);
  res.status(201).json(enrollment);
});

router.get("/", async (_, res) => {
  res.json(await Enrollment.find()
    .populate("student_id")
    .populate("course_id"));
});

router.delete("/:id", async (req, res) => {
  await Enrollment.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

export default router;
