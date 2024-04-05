import fs from "fs";
import ProductModel from "../models/productModel.js";
import CategoryModel from "../models/categoryModel.js";
import slugify from "slugify";

//create product
export const createProductController = async (req, res) => {
  try {
    const { name, description, price, quantity, category, shipping } =
      req.fields;
    const { photo } = req.files;
    //validation
    switch (true) {
      case !name:
        return res.status(500).send({ message: "Name is requried!" });
      // case !slug:
      //   return res.status(500).send({ message: "Slug is requried!" });
      case !description:
        return res.status(500).send({ message: "Description is requried!" });
      case !price:
        return res.status(500).send({ message: "Price is requried!" });
      case !quantity:
        return res.status(500).send({ message: "Quantity is requried!" });
      case !category:
        return res.status(500).send({ message: "Category is requried!" });
      case photo && photo.size > 1000000:
        return res.status(500).send({
          message: "Shipping is requried & should be less than 1 MB!",
        });
    }
    const foundCategory = await CategoryModel.findOne({ name: category });
    const product = new ProductModel({
      name,
      slug: slugify(name),
      description,
      price,
      quantity,
      category: foundCategory._id, // Use the ObjectId of the found category
      shipping,
      slug: slugify(name),
    });
    //photo validation
    if (photo) {
      product.photo.data = fs.readFileSync(photo.path);
      product.photo.contentType = photo.type;
    }
    await product.save();
    res.status(201).send({
      success: true,
      message: "Product created successfully!",
      product,
    });
  } catch (error) {
    console.log(`Error with create product ${error}`);
    res.status(500).send({
      success: false,
      message: "Error with create product",
      error,
    });
  }
};

//update product
export const updateProductController = async (req, res) => {
  try {
    const { pid } = req.params;
    const { name, description, price, quantity, category, shipping } =
      req.fields;
    const { photo } = req.files;
    //validation
    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is requried!" });
      // case !slug:
      //   return res.status(500).send({ error: "Slug is requried!" });
      case !description:
        return res.status(500).send({ error: "Description is requried!" });
      case !price:
        return res.status(500).send({ error: "Price is requried!" });
      case !quantity:
        return res.status(500).send({ error: "Quantity is requried!" });
      case !category:
        return res.status(500).send({ error: "Category is requried!" });
      case photo && photo.size > 1000000:
        return res
          .status(500)
          .send({ error: "Shipping is requried & should be less than 1 MB!" });
    }

    const foundCategory = await CategoryModel.findOne({ name: category });
    // console.log(foundCategory)
    const product = await ProductModel.findByIdAndUpdate(
      pid,
      {
        name,
        slug: slugify(name),
        description,
        price,
        quantity,
        category: foundCategory._id, // Use the ObjectId of the found category
        shipping,
        slug: slugify(name),
      },
      { new: true }
    );
    
    //photo validation
    if (photo) {
      product.photo.data = fs.readFileSync(photo.path);
      product.photo.contentType = photo.type;
    }
    await product.save();
    res.status(201).send({
      success: true,
      message: "Product created successfully!",
      product,
    });
  } catch (error) {
    console.log(`Error with update product ${error}`);
    res.status(500).send({
      success: false,
      message: "Error with update product",
      error,
    });
  }
};
//get all product
export const getProductController = async (req, res) => {
  try {
    const product = await ProductModel.find({})
      .select("-photo")
      .populate("category")
      .limit(12)
      .sort({ createdAt: -1 });
    res.status(201).send({
      success: true,
      total: product.length,
      message: "Get all product",
      product,
    });
  } catch (error) {
    console.log(`Error with get product ${error}`);
    res.status(500).send({
      success: false,
      message: "Error with get product",
      error,
    });
  }
};

//get single product
export const getSingleProductController = async (req, res) => {
  try {
    const slug = req.params.slug;
    const product = await ProductModel.findOne({ slug: slug })
      .populate("category")
      .select("-photo");
    res.status(201).send({
      success: true,
      message: "get single product",
      product,
    });
  } catch (error) {
    console.log(`Error with get single product ${error}`);
    res.status(500).send({
      success: false,
      message: "Error with get single product",
      error,
    });
  }
};

//get product photo
export const getProductPhotoController = async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id).select("photo");
    if (product.photo.data) {
      res.set("Content-type", product.photo.contentType);
    }
    res.status(201).send(product.photo.data);
  } catch (error) {
    console.log(`Error with get photo product ${error}`);
    res.status(500).send({
      success: false,
      message: "Error with get photo product",
      error,
    });
  }
};
//delete a product
export const deleteSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.findByIdAndDelete(id);
    res.status(201).send({
      success: true,
      message: "Product deleted sucessfully",
      product,
    });
  } catch (error) {
    console.log(`Error with delete product ${error}`);
    res.status(500).send({
      success: false,
      message: "Error with delete product",
      error,
    });
  }
};
//get photo
export const productPhotoController = async (req, res) => {
  try {
    const { pid } = req.params;
    const product = await ProductModel.findById(pid).select("photo");
    if (product.photo.data) {
      res.set("Content-type", product.photo.contentType);
      return res.status(201).send(product.photo.data);
    }
  } catch (error) {
    console.log(`Error with product photo ${error}`);
    res.status(500).send({
      success: false,
      message: "Error with product photo",
      error,
    });
  }
};
