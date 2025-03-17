import express from 'express';
import { loginBanker, appointmentsBanker, appointmentCancel, bankerList, changeAvailablity, appointmentComplete, bankerDashboard, bankerProfile, updateBankerProfile } from '../controllers/BankerController.js';
import authBanker from '../middleware/authBanker.js';
const bankerRouter = express.Router();

bankerRouter.post("/login", loginBanker)
bankerRouter.post("/cancel-appointment", authBanker, appointmentCancel)
bankerRouter.get("/appointments", authBanker, appointmentsBanker)
bankerRouter.get("/list", bankerList)
bankerRouter.post("/change-availability", authBanker, changeAvailablity)
bankerRouter.post("/complete-appointment", authBanker, appointmentComplete)
bankerRouter.get("/dashboard", authBanker, bankerDashboard)
bankerRouter.get("/profile", authBanker, bankerProfile)
bankerRouter.post("/update-profile", authBanker, updateBankerProfile)

export default bankerRouter;