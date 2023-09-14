import { Router } from "express";
import {
  createUser,
  getUser,
  UpdateUser,
  DeleteUser,
} from "../controller/user.js";

const router = Router();

router.route("/").post(createUser);
router.route("/:user_id").get(getUser).put(UpdateUser).delete(DeleteUser);

export default router;
