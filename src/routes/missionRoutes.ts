import { Router } from "express";
import { registerMission, listMissions, deleteMission } from "../controllers/missionController";
import { authenticateToken } from "../middleware/authMiddleware";

const router = Router();


router.post("/missions", authenticateToken, registerMission);

router.get("/missions", listMissions);

router.delete("/missions/:id", authenticateToken, deleteMission);

export default router;
