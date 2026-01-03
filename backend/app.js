import express from "express";
import mongoose from "mongoose";

import studentRoutes from "./routes/student.routes.js";
import courseRoutes from "./routes/course.routes.js";
import enrollmentRoutes from "./routes/enrollment.routes.js";

mongoose.connect(process.env.MONGO_URI);

const app = express();
app.use(express.json());

app.use("/api/students", studentRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/enrollments", enrollmentRoutes);

app.listen(5000);
