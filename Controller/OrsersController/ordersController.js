const Order = require("../../models/Order");
const Product = require("../../models/Product");

// create Orders
exports.createOrder = async (req, res, next) => {

    req.body.userid = req.user.id;
    console.log(req.body);
    const newOrder = new Order(req.body);
    try {
        const savedOrder = await newOrder.save();
        req.newOrder = savedOrder;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    } 
}

// Confirm Order 
exports.confirmOrder = async (req, res) => {
    try {
        const confirmedOrder = await Order.findByIdAndUpdate(req.params.id, {
            status: "Confirmed"
        }, { new: true });
        res.redirect('http://localhost:3005/payment/success');
        // res.status(200).json(confirmedOrder);
    } catch (error) {
        res.status(500).json(error);
    }

}


// get Orders By Id
exports.getOrdersById = async (req, res) => {
    try {
        const order = await Order.findOne({ userid: req.params.id });
        if (order) {

            res.status(200).json(order);
        } else {
            res.status(204).json("Could Not find Any Orders for this Shopper");
        }
    } catch (error) {
        res.status(500).json(error);
    }
}


// Get All Orders 
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        if (orders) {
            res.status(200).json(orders);
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

// Cancell Order
exports.cancelOrder = async (req, res) => {
    try {
        const canceledOrder = await Order.findByIdAndUpdate(req.params.id, {
            status: "Cancelled"
        }, { new: true });
        res.status(200).json(canceledOrder);
    } catch (error) {
        res.status(500).json(error);
    }

    // res.json("Request for CancelOrders");
}


exports.returnOrder = async (req, res) => {

    res.json("Request for returnOrder");
}


exports.sales = async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(date.setMonth(lastMonth.getMonth() - 1));
    console.log(previousMonth );

    try {
        const salesData = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    Year: { $year : "$createdAt" },
                    // monthYear: { $concat: [ { $substr: [ "$month", 0, 2 ] }, "-", { $substr: [ "$year", 0, 4 ] } ] },
                    sales: "$amount",
                },
            },
            {
                $group : {
                    _id : "$month",
                    total: {$sum: "$sales" },
                    // monthValue: "$month",
                    // yearValue : "$Year",
                },
            },
        ]);
        res.status(200).json(salesData);
    } catch (error) {
        res.status(500).json(error);
    }
}




// Fetch orders from orders table that matches a specific seller id and the given Filters
// exports.getOrdersForSeller = async (req, res) => {

//     res.json("Request for Gel All Orders for Seller with Filter");
// }


