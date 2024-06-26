import express from "express";
import formidable from "express-formidable";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createProductController,
  deleteSingleProduct,
  getProductController,
  getProductDetails,
  getProductPhotoController,
  getSingleProductController,
  productFilterController,
  productPhotoController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";

const router = express.Router();

//create product
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

//update product
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//get all products
router.get("/get-product", getProductController);

//get single products
router.get("/get-product/:slug", getSingleProductController);

//get product details
router.get("/get-product-details/:slug", getProductDetails);

//get products photo
router.get("/get-product-photo/:id", getProductPhotoController);

//delete product
router.delete("/delete-product/:id", requireSignIn, isAdmin, deleteSingleProduct);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//filter products
router.post("/product-filters", productFilterController);
export { router as productRouter };

//search products 
router.get("/search/:keyword", searchProductController);