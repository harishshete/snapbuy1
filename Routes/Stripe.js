const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_KEY);
const ordersController = require("../Controller/OrsersController/ordersController");
const authControler = require("../Controller/AuthController/authController");

router.post('/create-checkout-session',authControler.verifyAndAuthorizeShopper, ordersController.createOrder, async (req, res) => {
    const orderId = req.newOrder._id.toString();
    const line_items = req.body.products.map(item => {
        return {
            price_data: {
                currency: 'inr',
                product_data: {
                    name: item.title,
                    images: [item.image]
                },
                unit_amount: item.price * 100,
            },
            quantity: item.quantity,
        }
    });

    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        success_url: `http://localhost:3000/orders/confirm${orderId}`,
        cancel_url: 'http://localhost:3005/payment/failed',
    });
    console.log(session.url);
    res.send({ url: session.url })
});

module.exports = router;
