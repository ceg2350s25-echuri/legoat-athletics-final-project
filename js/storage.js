


function saveItemToCartStorage(product) {

    // Retrieve current list of saved products and add new product
    const cart = JSON.parse(localStorage.getItem("productsInCart")) || [];

    cart.push(product);
    
    localStorage.setItem("productsInCart", JSON.stringify(cart));


    updateCartCounter(calculateCartCheckoutPrice());

};


function checkoutCartEvents() {
    const checkoutTableBody = document.getElementById("checkout-table-rows");

    checkoutTableBody.addEventListener("click", (event) => {
        const target = event.target;
        let cart = JSON.parse(localStorage.getItem("productsInCart")) || [];
        
        // increase button was clicked
        if (target.classList.contains("product-increase-quantity")) {
            const id = target.dataset.id;

            const productToAdd = cart.find(p => p.product_id === id);
            if (productToAdd) {
                cart.push(productToAdd);

                localStorage.setItem("productsInCart", JSON.stringify(cart));
            }

            updateCheckoutCartList();
            updateCartCounter(calculateCartCheckoutPrice());
        }
    
        // decrease btn was clicked
        if (target.classList.contains("product-decrease-quantity")) {
            const id = target.dataset.id;

            const index = cart.findIndex(p => p.product_id === id);
            if (index !== -1) {
                cart.splice(index, 1);
                localStorage.setItem("productsInCart", JSON.stringify(cart));
            }

            updateCheckoutCartList();
            updateCartCounter(calculateCartCheckoutPrice());
        }

        // user deleted product from cart
        if (target.classList.contains("delete-item")) {
            const id = target.dataset.id;

            cart = cart.filter(p => p.product_id !== id);
            localStorage.setItem("productsInCart", JSON.stringify(cart));

            updateCheckoutCartList();
            updateCartCounter(calculateCartCheckoutPrice());
        }
    });
}



// this just updates the table of products on cart.html
function updateCheckoutCartList() {

    const checkoutTableBody = document.getElementById("checkout-table-rows");

    checkoutTableBody.innerHTML = "";

    const cart = JSON.parse(localStorage.getItem("productsInCart")) || [];

    if (cart.length === 0) {
        return;
    }

    // one per product
    const grouped = {};

    // get the quantity of each product in the cart
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];

        // make a new dict if it's a unqiue prodct
        if (!grouped[item.product_id]) {

            grouped[item.product_id] = {
                product_id: item.product_id,
                name: item.product_name,
                image: item.product_image,
                category: item.category,
                price: item.price,
                quantity: 1
            };

        } 
        
        // if not just += 1 to quantity since it already exists
        else {
            grouped[item.product_id].quantity++;
        }
    }


    // finally make a row for each product for cart.html
    for (let id in grouped) {
        const product = grouped[id];

        const row = document.createElement("tr");
        row.id = `checkout-item-${product.product_id}`;

        row.innerHTML = 
        `
            <td class="px-4 py-3 font-medium">${product.name}</td>

            <td class="px-4 py-3">
                <img src="images/${product.image}" class="w-12 h-12 object-cover rounded">
            </td>

            <td class="px-4 py-3">${product.category.toUpperCase()}</td>

            <td class="px-4 py-3">$${product.price.toFixed(2)}</td>

            <td class="px-4 py-3">
                <div class="flex items-center gap-2">
                    <button 
                        class="px-2 py-1 bg-gray-200 rounded product-decrease-quantity" 
                        data-id="${product.product_id}">
                        -
                    </button>

                    <span 
                        class="min-w-6 text-center font-semibold" 
                        id="qty-${product.product_id}">
                        ${product.quantity}
                    </span>

                    <button 
                        class="px-2 py-1 bg-gray-200 rounded product-increase-quantity" 
                        data-id="${product.product_id}">
                        +
                    </button>
                </div>
            </td>

            <td class="px-4 py-3">
                <button 
                    class="px-3 py-1 bg-red-500 text-white rounded delete-item"
                    data-id="${product.product_id}">
                    Delete
                </button>
            </td>
        `;

        checkoutTableBody.appendChild(row);
    }
}






function calculateCartCheckoutPrice() {
    const cart = JSON.parse(localStorage.getItem("productsInCart")) || [];
    let total = 0;

    cart.forEach(item => total += item.price);

    return total.toFixed(2);
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



