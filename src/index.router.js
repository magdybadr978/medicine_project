import connectDB from "../DB/connection.js";
import medicineRouter from "./modules/medicine/medicine.router.js";
import categoryRouter from "./modules/category/category.router.js";
import authRouter from "./modules/auth/auth.router.js";
import { globalErrorHandling } from "./utils/errorHandling.js";

const initApp = (app, express) => {
	//convert Buffer Data
	app.use(express.json({}));
	//Setup API Routing
	app.use(`/auth`, authRouter);
	app.use(`/medicine`, medicineRouter);
	app.use(`/category`, categoryRouter);
	app.all("*", (req, res, next) => {
		res.send("In-valid Routing Plz check url  or  method");
	});
	app.use(globalErrorHandling);

	connectDB();
};

export default initApp;
