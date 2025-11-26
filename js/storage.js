


function saveItemToCartStorage(product) {

    // Retrieve current list of saved products and add new product
    const cart = JSON.parse(localStorage.getItem("productsInCart")) || [];

    cart.push(product);
    
    localStorage.setItem("productsInCart", JSON.stringify(cart));

    updateCartCounter();



};

function updateCheckoutCartList() {

    console.log("Updating checkout list");
    
    const checkoutTable = document.getElementById("checkout-table");

    const checkoutTableBody = document.getElementById('checkout-table-rows');

    const cart = JSON.parse(localStorage.getItem("productsInCart")) || [];

    if (cart.length > 0) {

        console.log(cart);
        console.log(cart.array);

        cart.forEach(product => {
            const productCheckoutRow = document.createElement("tr");
            productCheckoutRow.id = `checkout-item-${product.product_id}`;

            console.log(product.product_name);

            const productItem = document.createElement("div");
        
            // productItem.className = "px-3 py-4 border border-gray-300 rounded-xl shadow-sm hover:cursor-pointer";

            // Create table row for each product and add it to the checkout table
            productItem.innerHTML = `
                <div>

                </div>
            `

            checkoutList.appendChild(productItem);



            
        });
    }

    else {
        console.log("No saved products in cart to show in checkout list...");
    }

}




function updateCartCounter() {

    console.log("Updating cart counter...");
    const cartCounter = document.getElementById("cartItemCount");

    // Retrieve the saved products in cart from localStorage and update the cart counter in navbar
    const cart = JSON.parse(localStorage.getItem("productsInCart")) || [];

    const cartCount = cart.length;

    if (cartCount > 0) {
        cartCounter.innerHTML = `${cartCount} items in cart`;
        return;
    }

    else {
        cartCounter.innerHTML = "Cart is empty";
        return;
    }


    cartCounter.innerHTML = "";
}


function removeItemFromCartStorage(itemId) {

}


function getItemFromCartStorage(itemId) {


}


function calculateCartCheckoutPrice() {

}



