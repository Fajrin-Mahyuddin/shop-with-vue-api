import express, { Request, Response } from "express";
import usersController from "@/app/controllers/users_controller";
import productController from "@/app/controllers/product_controller";

const router = express.Router();

router.get("/login", (_: Request, res: Response) => {
  res.status(200).json({ message: "login!" });
});

router.get("/products", productController.get_product);
router.post("/product/add", productController.add_product);
router.post("/product/update", productController.update_product);

// router.get("/users/:params?", usersController.get)

export default router;
