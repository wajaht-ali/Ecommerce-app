import slugify from "slugify";
import CategoryModel from "../models/categoryModel.js";

//create category
export const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;

    //category validation
    if (!name) {
      return res.status(401).send({
        message: "Name is required",
      });
    }
    //existing category
    const existingCategory = await CategoryModel.findOne({ name });
    if (existingCategory) {
      return res.status(200).send({
        success: true,
        message: "Category already existed!",
      });
    }

    const category = await new CategoryModel({
      name,
      slug: slugify(name),
    }).save();
    res.status(201).send({
      success: true,
      message: "Category created sucessfully!",
      category,
    });
  } catch (error) {
    console.log(`Error with createCategory ${error}`);
    res.status(500).send({
      success: false,
      message: "Error with create category",
      error,
    });
  }
};

//update category
export const updateCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedCategory = await CategoryModel.findByIdAndUpdate(id, {
      name,
      slug: slugify(name),
      new: true, //auto updating purpose
    });
    res.status(201).send({
      success: true,
      message: "category updated sucessfully!",
      updatedCategory,
    });
  } catch (error) {
    console.log(`Error with updateCategory ${error}`);
    res.status(500).send({
      success: false,
      message: "Error with update category",
      error,
    });
  }
};

//get all category
export const categoryController = async (req, res) => {
  try {
    const category = await CategoryModel.find({});
    res.status(201).send({
      success: true,
      message: "Find all categories",
      category,
    });
  } catch (error) {
    console.log(`Error with all Category Controller ${error}`);
    res.status(500).send({
      success: false,
      message: "Error with all category Controller",
      error,
    });
  }
};

//get single category
export const singleCategoryController = async (req, res) => {
  try {
    // const { id } = req.params;
    const category = await CategoryModel.findOne({ slug: req.params.slug });
    res.status(201).send({
      success: true,
      message: "Find one category successfully",
      category,
    });
  } catch (error) {
    console.log(`Error with single category controller ${error}`);
    res.status(500).send({
      success: false,
      message: "Error with single category controller",
      error,
    });
  }
};

//delete single category
export const deleteCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await CategoryModel.findByIdAndDelete(id);
    res.status(201).send({
      success: true,
      message: "Category deleted sucessfully!",
      category,
    });
  } catch (error) {
    console.log(`Error with deleteCategory ${error}`);
    res.status(500).send({
      success: false,
      message: "Error with delete category",
      error,
    });
  }
};
