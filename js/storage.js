


function saveItemToCartStorage(product) {

    // Retrieve current list of saved products and add new product
    const cart = JSON.parse(localStorage.getItem("productsInCart")) || [];

    cart.push(product);
    
    localStorage.setItem("productsInCart", JSON.stringify(cart));


    // Recalculate total price and update it
    
    updateCartCounter(calculateCartCheckoutPrice());



};


function checkoutCartEvents() {
    const checkoutTableBody = document.getElementById("checkout-table-rows");

    checkoutTableBody.addEventListener("click", (event) => {
        const target = event.target;

        let cart = JSON.parse(localStorage.getItem("productsInCart")) || [];

        if (target.classList.contains("product-increase-quantity")) {
            const id = target.dataset.id;
            const item = cart.find(p => p.product_id === id);
            if (!item) return;

            item.quantity = (item.quantity || 1) + 1;
            localStorage.setItem("productsInCart", JSON.stringify(cart));

            const qtySpan = document.getElementById(`qty-${id}`);
            if (qtySpan) qtySpan.textContent = item.quantity;
        }

        if (target.classList.contains("product-decrease-quantity")) {
            const id = target.dataset.id;
            const item = cart.find(p => p.product_id === id);
            if (!item) return;

            if (item.quantity > 1) {
                item.quantity -= 1;
                localStorage.setItem("productsInCart", JSON.stringify(cart));

                const qtySpan = document.getElementById(`qty-${id}`);
                if (qtySpan) qtySpan.textContent = item.quantity;
            }
        }

        if (target.classList.contains("delete-item")) {
            const id = target.dataset.id;
            cart = cart.filter(p => p.product_id !== id);
            localStorage.setItem("productsInCart", JSON.stringify(cart));

            const row = document.getElementById(`checkout-item-${id}`);
            if (row) row.remove();
        }
    });
}



function updateCheckoutCartList() {

    console.log("Updating checkout list with each product in cart...");

    const checkoutTableBody = document.getElementById("checkout-table-rows");

    // make sure table is empty before adding items again
    checkoutTableBody.innerHTML = "";

    const cart = JSON.parse(localStorage.getItem("productsInCart")) || [];

    if (cart.length === 0) {
        console.log("No saved products are in cart.. Not adding anything to checkout list");
        return;
    }

    cart.forEach(product => {


        const row = document.createElement("tr");
        row.id = `checkout-item-${product.product_id}`;

        row.innerHTML = `
            <td class="px-4 py-3 font-medium">${product.product_name}</td>

            <td class="px-4 py-3">
                <img src="images/${product.product_image}" class="w-12 h-12 object-cover rounded">
            </td>

            <td class="px-4 py-3">
                ${product.category.toUpperCase()}
            </td>

            <td class="px-4 py-3">$${product.price.toFixed(2)}</td>

            <td class="px-4 py-3">
                <div class="flex items-center gap-2">
                    <button class="px-2 py-1 bg-gray-200 rounded product-decrease-quantity" data-id="${product.product_id}">-</button>

                    <span class="min-w-6 text-center font-semibold" id="qty-${product.product_id}">${product.quantity}</span>

                    <button class="px-2 py-1 bg-gray-200 rounded product-increase-quantity" data-id="${product.product_id}">+</button>
                </div>
            </td>

            <td class="px-4 py-3">
                <button class="px-3 py-1 bg-red-500 text-white rounded delete-item"
                        data-id="${product.product_id}">
                    Delete
                </button>
            </td>
        `;

        checkoutTableBody.appendChild(row);

    });

}




function calculateCartCheckoutPrice() {

    console.log("Calcating tiotal checkout price..");
    const cart = JSON.parse(localStorage.getItem("productsInCart")) || [];

    console.log(`There are ${cart.length} items in the cart.`)

    let totalPrice = 0;

    cart.forEach(product => {
        console.log(`Product ${product.product_name} price: ${product.price}`);
        totalPrice += product.price;
    });
    
    return totalPrice.toFixed(2);
}


function updateCartCounter(totalCheckoutPrice) {

    console.log("Updating cart counter...");
    const cartCounter = document.getElementById("cartItemCount");

    // Retrieve the saved products in cart from localStorage and update the cart counter in navbar
    const cart = JSON.parse(localStorage.getItem("productsInCart")) || [];

    const cartCount = cart.length;

    // const totalCheckoutPrice = calculateCartCheckoutPrice();

    if (cartCount > 0) {
        cartCounter.innerHTML = `${cartCount} items in cart (total: $${totalCheckoutPrice})`;
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



