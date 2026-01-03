import express from "express";
import Student from "../models/Student.js";

const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  const student = await Student.create(req.body);
  res.status(201).json(student);
});

// READ ALL
router.get("/", async (_, res) => {
  const students = await Student.find().populate("discipline_id");
  res.json(students);
});

// READ ONE
router.get("/:id", async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.json(student);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

export default router;
