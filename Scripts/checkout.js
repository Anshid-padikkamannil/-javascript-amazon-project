import { renderCheckoutHeader } from "./Checkout/checkoutHeader.js";
import { renderOrderSummary } from "./Checkout/orderSummary.js";
import { renderPaymentSummary } from "./Checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/cart-calss.js';
import '../data/car.js';
// import '../data/backend-practice.js';


async function loadPage() {

    try {
        // throw 'error1 for example'

       await loadProductsFetch();

        const value = await new Promise((resolve, reject) => {
            // throw 'error2 for example'
            loadCart(() => {
                // reject('error3 for example')
                resolve();
            });
        }); 
    } catch (error) {
        console.log('Unexpecter error. Please try again later.');
    }
    
 
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();

}
loadPage()


// Promise.all([
//     loadProductsFetch(),    
//     new Promise((resolve) => {
//         loadCart(() => {
//             resolve();
//         });
//     })

// ]).then(() => {
//     renderCheckoutHeader();
//     renderOrderSummary();
//     renderPaymentSummary();
// });



// new Promise((resolve) => {
//     loadProducts(() => {
//         resolve('value1');
//     });
// }).then((value) => {
//     console.log(value);
    
//     return new Promise((resolve) => {
//         loadCart(() => {
//             resolve();
//         });
//     });                  
// }).then(() => {
//     renderCheckoutHeader();
//     renderOrderSummary();
//     renderPaymentSummary();
// });



// loadProducts(() => {
//     loadCart(() => {
//         renderCheckoutHeader();
//         renderOrderSummary();
//         renderPaymentSummary();
//     }); 
// });
