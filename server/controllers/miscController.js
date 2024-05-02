import NewsletterModel from "../models/newsletterModel.js";

export const newsletterController = async (req, res) => {
  try {
    const { email } = req.body;
    //validation
    if (!email) {
      return res.status(201).send({
        success: false,
        message: "Email is required!",
      });
    }
    //already registered
    const existingEmail = await NewsletterModel.findOne({ email: email });
    if (existingEmail) {
      return res.status(201).send({
        success: true,
        message: "Email is already registered!",
        existingEmail,
      });
    }
    const newsletter = await new NewsletterModel({ email: email }).save();
    res.status(201).send({
      success: true,
      message: "Email registered successfully!",
      newsletter,
    });
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      message: "Error with newsletter controller",
      error: error,
    });
  }
};
