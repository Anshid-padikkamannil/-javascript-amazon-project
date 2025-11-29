import { renderCheckoutHeader } from "./Checkout/checkoutHeader.js";
import { renderOrderSummary } from "./Checkout/orderSummary.js";
import { renderPaymentSummary } from "./Checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
// import '../data/cart-calss.js';
import '../data/car.js';
// import '../data/backend-practice.js';

new Promise((resolve, reject) => {
    loadProducts(() => {
        resolve();
    });
}).then(() => {
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
})

// loadProducts(() => {
//     renderCheckoutHeader();
//     renderOrderSummary();
//     renderPaymentSummary();
// });
