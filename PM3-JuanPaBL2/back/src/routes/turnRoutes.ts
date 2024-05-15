import { Router} from "express";
import {controladorCancelAppointment, controladorGetAppointment, controladorGetAppointmentId, controladorNewAppointment} from "../controllers/turnController"

const router = Router();


//ENRUTADOR DE TURNOS
router.get("/", controladorGetAppointment);

router.get("/:id", controladorGetAppointmentId)

router.post("/schedule", controladorNewAppointment)

router.put("/cancel/:id", controladorCancelAppointment)

export default router;

