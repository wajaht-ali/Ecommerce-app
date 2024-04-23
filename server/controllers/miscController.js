export const newsletterController = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      message: "Error with newsletter controller",
      error: error,
    });
  }
};
