import { Router } from "express";
import { registerUser } from "../controllers/userController.js";
import { upload } from "../middlewares/multerMiddleware.js";

const router = Router();

// localhost:8000/api/v1/users/register => control pass to registerUser
router.route("/register").post(
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  registerUser
);

export default router;
