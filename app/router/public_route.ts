import express from "express";
import userController from "@/app/controllers/user_controller";
import productController from "@/app/controllers/product_controller";

const router = express.Router();

//router.get("/login", (_: Request, res: Response) => {
//  res.status(200).json({ message: "login!" });
//});

router.get("/users", userController.get_users);
router.post("/user/register", userController.add_user);

router.get("/products", productController.get_product);
router.post("/product/add", productController.add_product);
router.post("/product/update", productController.update_product);

export default router;
