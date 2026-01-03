import express from "express";
import Course from "../models/Course.js";

const router = express.Router();

router.post("/", async (req, res) => {
  res.status(201).json(await Course.create(req.body));
});

router.get("/", async (_, res) => {
  res.json(await Course.find().populate("discipline_id"));
});

router.get("/:id", async (req, res) => {
  res.json(await Course.findById(req.params.id));
});

router.put("/:id", async (req, res) => {
  res.json(await Course.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

router.delete("/:id", async (req, res) => {
  await Course.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

export default router;

