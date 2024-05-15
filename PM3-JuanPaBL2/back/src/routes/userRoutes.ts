import { Router} from "express";
import { controladorGetUsers, controladorGetUsersId, controladorLogin, controladorRegister} from "../controllers/userControllers";

const router = Router();

//ENRUTADOR DE USERS
router.get("/", controladorGetUsers)

router.get("/:id", controladorGetUsersId)

router.post("/register", controladorRegister)

router.post("/login", controladorLogin)

export default router;