var express = require('express');
var app = express();

// Importing Router files
const shoppers = require('./shoppersRoutes');
const sellers =  require('./sellerRoutes');
const orders =  require('./ordersRoutes');
const cart = require('./cartRoutes');
const payment =  require('./paymentRoutes');
const products = require('./productsRoutes');
const wishlist = require('./wishlistRoutes');
const reports = require('./reportsRoutes');
const status = require('./status');
const stripe = require('./Stripe');
// const users = require('./userRoutes');

// Routing based on URL-pattern
app.use('/', status);
app.use('/shoppers', shoppers);
app.use('/sellers', sellers);
app.use('/orders', orders);
app.use('/cart', cart);
app.use('/payment', payment);
app.use('/products', products);
app.use('/reports', reports);
app.use('/wishlist', wishlist);
app.use('/stripe', stripe);
// app.use('/users', users);


module.exports = app;

