// routes/usuarios.ts
import { Router } from "express";
import {
  createTeacher,
  deleteTeacher,
  getTeacher,
  updateTeacher,
} from "../controllers/teacher";
import validate from "../middlewares/validate";
import { teacherSchema } from "../schemas/teacher";

const router = Router();

router.get("/", getTeacher);
router.post("/", validate(teacherSchema), createTeacher);
router.put("/:id", validate(teacherSchema), updateTeacher);
router.delete("/:id", deleteTeacher);

export default router;
