import NewsletterModel from "../models/newsletterModel.js";
import Stripe from "stripe"; // Import Stripe library
// Assuming you have your Stripe secret key stored securely (e.g., environment variable)
const stripe = Stripe(
  "sk_test_51PGvNpLYw4GrqE6Ya91F36MltZagPXsaqP2fUjtpCsC4Lg3zkjiqYIa5UHZwEkUeAkdwXgGo37uIk0e0KyDYgmg800Smxd6HNI"
);

//news letter controller
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

// payment gateway controller
// export const paymentController = async (req, res) => {
//   try {
//     const cartItems = req.body.cartItems;
//     console.log(typeof cartItems);
//     console.log(cartItems);

//     const lineItems = cartItems.map((item) => ({
//       price_data: {
//         currency: "usd",
//         product_data: {
//           name: item.name,
//         },
//         unit_amount: item.price * 100, // Price in cents
//       },
//       quantity: item.quantity,
//     }));

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: lineItems,
//       mode: "payment",
//       success_url: `http://localhost:3000/success`,
//       cancel_url: `http://localhost:3000/cancel`,
//     });

//     res.json({ id: session.id });
//   } catch (error) {
//     console.error(`Error with payment gateway: ${error.message}`); // Log the error for debugging
//     res.status(500).json({ error: "An error occurred" }); // Send a generic error response
//   }
// };

export const paymentController = async (req, res) => {
  try {
    const cartItems = req.body.cartItems;
    // console.log("your items: ", cartItems);
    const lineItems = cartItems.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100, // Price in cents
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `http://localhost:3000/success`,
      cancel_url: `http://localhost:3000/cancel`,
    });

    res.json({ id: session.id, status: "success" });
  } catch (error) {
    // Log the error and the request body for debugging
    console.error(`Error with payment gateway: ${error.message}`);
    // console.error("Request body at error:", req.body);

    res.status(500).json({ error: "An error occurred" });
  }
};
