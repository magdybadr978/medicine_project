import * as medicineController from "./controller/medicine.js";
//======================== Create Medicine ========================
router.post(
	"/createMedicine",
	admin,
	// add image to folder upload immediately, before any check
	uplaod.single("imageURL"),
	medicineController.createMedicine
);

//======================== Update Medicine ========================
router.put(
	"/updateMedicine/:id",
	admin,
	uplaod.single("imageURL"),
	medicineController.updateMedicine
);
//======================== Delete Medicine ========================
router.delete("/deleteMedicine/:id", admin, medicineController.deleteMedicine);
