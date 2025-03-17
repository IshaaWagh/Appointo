import express from 'express';
import { loginAdmin, appointmentsAdmin, appointmentCancel, addBanker, allBankers, adminDashboard } from '../controllers/adminController.js';
import { changeAvailablity } from '../controllers/BankerController.js';
import authAdmin from '../middleware/authAdmin.js';
import upload from '../middleware/multer.js';
const adminRouter = express.Router();

adminRouter.post("/login", loginAdmin)
adminRouter.post("/add-Banker", authAdmin, upload.single('image'), addBanker)
adminRouter.get("/appointments", authAdmin, appointmentsAdmin)
adminRouter.post("/cancel-appointment", authAdmin, appointmentCancel)
adminRouter.get("/all-bankers", authAdmin, allBankers)
adminRouter.post("/change-availability", authAdmin, changeAvailablity)
adminRouter.get("/dashboard", authAdmin, adminDashboard)

export default adminRouter;