import NewsletterModel from "../models/newsletterModel.js";
import Stripe from 'stripe';
const stripe = new Stripe('sk_test_51PGvNpLYw4GrqE6Ya91F36MltZagPXsaqP2fUjtpCsC4Lg3zkjiqYIa5UHZwEkUeAkdwXgGo37uIk0e0KyDYgmg800Smxd6HNI');

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
export const stripeController = async (req, res) => {

  console.log('testing')
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: price_1PGwF0LYw4GrqE6YHg8jCV1X,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `http://localhost:5173/?success=true`,
      cancel_url: `http://localhost:5173/?canceled=true`,
    });

    console.log(session, 'session')
  
    return res.status(201).send({
      message: 'Success'
    })
  } catch (error) {
    console.log(error)
    return res.status(500).send({
      message: 'error',
      error: error
    })
    // console.log('error in payment ', error)
  }
  
}