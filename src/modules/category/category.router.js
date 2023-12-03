import { Router } from "express";
import * as categoryController from "./controller/medicine.js";
const router = Router();

//======================== create new categry ========================
router.post("/createCategore", admin, categoryController.createCategore);

//======================== UPDATA CATEGORY ========================
router.patch("/updataCategory/:id", admin, categoryController.updateCategory);

//======================== DELET CATEGORY ========================
router.delete("/deleteCategory/:id", admin, categoryController.deleteCategory);

export default router;
