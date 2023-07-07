import { Router } from "express";
import {
  createColor,
  deleteColor,
  editColor,
  getColor,
  getColors,
} from "../controllers/colors.controllers";

const router = Router();

router.route("/colors").get(getColors).post(createColor);
router.route("/colors/:id").put(editColor).delete(deleteColor).get(getColor);

export default router;
