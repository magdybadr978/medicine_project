// create category
export const createCategore = async (req, res) => {
	try {
		//check category if exist already
		const checkCategory = await query("select * from categories where name=?", [
			req.body.name,
		]);
		if (checkCategory.length) {
			return res.status(400).json({
				errors: [{ msg: "category already exits " }],
			});
		}

		// prepare category object
		const categoryObj = new Category(); //(req.body.name, req.body.description);
		if (!req.body.name || !req.body.description)
			return res.status(500).json({
				errors: [{ msg: "feilds cann't be empty" }],
			});
		categoryObj.name = req.body.name;
		categoryObj.description = req.body.description;

		await query("insert into categories set ?", categoryObj);
		res.send("succesfully");
	} catch (err) {
		console.log(err);
		res.status(500).json({
			errors: [{ msg: "something error" }],
		});
	}
};
// update category
export const updateCategory = async (req, res) => {
	try {
		// check if category is exist
		const data = await query(
			`select * from categories where id=${req.params.id}`
		);
		if (!data[0]) {
			return res.status(400).json({ errors: [{ msg: "catrgory not found" }] });
		}

		const categoryObj = new Category();
		Object.assign(categoryObj, data[0]);
		// if(req.file){}
		if (req.body.name) {
			categoryObj.name = req.body.name;
		}
		if (req.body.description) {
			categoryObj.description = req.body.description; //description
		}
		//updata data
		await query(`UPDATE categories set ? where id = ?`, [
			categoryObj,
			req.params.id,
		]);
		res.status(200).json({
			msg: "updated category",
		});
	} catch (err) {
		// console.log(err);
		res.status(500).json({
			errors: [{ msg: "something error" }],
		});
	}
};
// delete category
export const deleteCategory=async (req, res) => {
	try {
		// ========= 1-Check is this category is exits
		const data = await query(
			`select * from categories where id = ${req.params.id}`
		);
		if (!data[0]) {
			res.status(404).json({
				errors: [{ msg: "category not found" }],
			});
		}
		// ========= 2-delete category from db
		await query(`delete from categories where id = ?`, [req.params.id]);
		res.status(200).json({
			msg: "deleted category successfully",
		});
	} catch (err) {
		res.status(500).json({
			errors: [{ msg: "something error" }],
		});
	}
}