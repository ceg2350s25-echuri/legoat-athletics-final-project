

// i didn't end up using "category_icon" because i could not get emojis to load properly in this websitee/project for some reason
const products = [
    {
        product_name: "Basketball",
        product_id: "basketball_ball",
        product_image: "basketball-image.png",
        product_description:
        `
            This Basketball is signed by the LeGoat himself (Lebron James), play like the KING using this basketball!
        `,
        color: "orange",
        category: "basketball",
        category_icon: "🏀",
        price: 29.99,
        in_stock: true
    },
    {
        product_name: "Tennis Racket",
        product_id: "tennis_racket",
        product_image: "tennis-racket-image.jpg",
        product_description: `
            A tennis racket that makes the "Whoosh" sound every time you hit a ball with it! Perfect for tennis players that want a little extra "oomph" in their racket.
        `,
        color: "yellow",
        // The default color shade is 600 (text-color-600), but specify a custom shade per product
        color_shade: "500",
        category: "tennis",
        category_icon: "🎾",
        price: 29.99,
        in_stock: true
    },
    {
        product_name: "Football",
        product_id: "football_ball",
        product_image: "american-football-ball.png",
        product_description: `
            An NFL football that follows industry standards. There's even a secret hatch so you can deflate it like the Patriots did in 2015 to steal the superbowl!
        `,
        color: "stone",
        color_shade: "700",
        // If custom_color is used, then text-[#custom_color] instead of "text-color-color_shade" 
        custom_color: "#9e7355",
        category: "football",
        category_icon: "🏈",
        price: 24.99,
        in_stock: true
    },

    {
        product_name: "Soccer Ball",
        product_id: "soccer_ball",
        product_description: `
            A normal black and white soccer ball that you can trust to last you years. LeGoat Atheltics only sells the highest quality and biggest balls.`, 
        product_image: "soccer-ball.png",
        color: "white",
        category: "soccer",
        category_icon: "⚽",
        price: 29.99,
        in_stock: true
    },


    {
        product_name: "Golf Club",
        product_id: "golf_club",
        product_image: "golf-club.png",
        product_description: `A standard Golf Club, just make sure your wife doesn't get ahold of it so she can't beat you after finding out you were cheating on her with over a 100 women! (<i>*cough* *cough* Tiger Woods</i>) `,
        color: "black",
        category: "golf",
        category_icon: "⛳",
        price: 29.99,
        in_stock: true
    },

    {
        product_name: "Basketball Shoes",
        product_id: "basketball_shoes",
        product_image: "basketball-shoes.png",
        product_description: `
            Running shoes sold by Shaq, these probably aren't the shoes you wanted, but the ones Mom buys you because times are tough. Its okay, she loves you!
        `,
        color: "orange",
        category: "basketball",
        category_icon: "🏀",
        price: 29.99,
        in_stock: true
    },

    {
        product_name: "Mini Basketball Hoop",
        product_id: "basketball_minihoop",
        product_image: "mini-hoop.jpg",
        product_description: `
            A basketball hoop for when you need to dunk on your little brother.
        `,
        color: "orange",
        category: "basketball",
        category_icon: "🏀",
        price: 19.99,
        in_stock: true
    },
    {
        product_name: "Basketball Headband",
        product_id: "basketball_headband",
        product_image: "basketball-headband.png",
        product_description: `
            Headband that *might* make you feel like you're in your prime. No guarantees.
        `,
        color: "red",
        category: "basketball",
        category_icon: "🏀",
        price: 9.99,
        in_stock: true
    },

    {
        product_name: "Soccer Cleats",
        product_id: "soccer_cleats",
        product_image: "soccer-cleats.jfif",
        product_description: `
            Lightweight cleats designed to help you outrun your defenders.
        `,
        color: "black",
        category: "soccer",
        category_icon: "⚽",
        price: 49.99,
        in_stock: true
    },
    {
        product_name: "Goalkeeper Gloves",
        product_id: "soccer_gloves",
        product_image: "soccer-gloves.jfif",
        product_description: `
            Catch the ball easily with these gloves. Like Harry Potter in Quidditch!
        `,
        color: "black",
        category: "soccer",
        category_icon: "⚽",
        price: 34.99,
        in_stock: true
    },


    {
        product_name: "Tennis Balls (Pack of 3)",
        product_id: "tennis_balls",
        product_image: "tennis-ball.png",
        product_description: `
            Just a normal tennis ball, your dog might eat it though! BE careful!
        `,
        color: "yellow",
        category: "tennis",
        category_icon: "🎾",
        price: 8.99,
        in_stock: true
    },
    {
        product_name: "Golf Balls (Pack of 12)",
        product_id: "golf_balls",
        product_image: "golf-ball.jpg",
        product_description: `
            Tiger Woods loves these golf balls. You should too if he trusts these balls to win him championships!
        `,
        color: "white",
        category: "golf",
        category_icon: "⛳",
        price: 6.99,
        in_stock: true
    },
    {
        product_name: "Golf Glove",
        product_id: "golf_glove",
        product_image: "golf-gloves.jpg",
        product_description: `
            Comfortable glove to help you golf better. Trusted by Tiger Woods himself.
        `,
        color: "white",
        category: "golf",
        category_icon: "⛳",
        price: 14.99,
        in_stock: true
    },




];




function getItemQuantity(productId) {
    const cart = JSON.parse(localStorage.getItem("productsInCart")) || [];
    const items = cart.filter(p => p.product_id === productId);
    return items.length; 
}

function increaseProductQuantity(product) {
    const cart = JSON.parse(localStorage.getItem("productsInCart")) || [];
    cart.push(product);
    localStorage.setItem("productsInCart", JSON.stringify(cart));
}

function decreaseProductQuantity(productId) {
    let cart = JSON.parse(localStorage.getItem("productsInCart")) || [];
    
    // remove the first product we find with that id
    const removeIndex = cart.findIndex(p => p.product_id === productId);
    if (removeIndex !== -1) {
        cart.splice(removeIndex, 1);
    }

    localStorage.setItem("productsInCart", JSON.stringify(cart));
}


function checkIfCartIsEmpty() {
    const cart = JSON.parse(localStorage.getItem("productsInCart")) || [];
    if (cart.length === 0) {
        alert("Your shopping cart is empty! You cannot checkout!");
    }

    else {
        window.location.href = "checkout.html";
    }
}

function autoFillCheckoutForm() {


    // check if info is alreday saved from previous checkout
    const savedInfoJSON = localStorage.getItem("savedCheckoutInfo");

    if (savedInfoJSON) {

        console.log("Found saved checkout info!");
        const savedInfo = JSON.parse(savedInfoJSON);
        
        // set all the inputs with the saved values frfom localsStorage
        if (document.getElementById("first_name")) {
            
            document.getElementById("first_name").value = savedInfo.first_name || "";

            document.getElementById("last_name").value = savedInfo.last_name || "";

            document.getElementById("email").value = savedInfo.email || "";
            
            document.getElementById("phone").value = savedInfo.phone || "";

            document.getElementById("address").value = savedInfo.address || "";

            document.getElementById("city").value = savedInfo.city || "";

            document.getElementById("zip").value = savedInfo.zip || "";


        }
    }

    else {
        console.log("Checkout info not save in localStorage")
    }



}





function checkoutFormSubmitCart() {


    // i saved everything but credit card info in localStorage bc why would u do that fr lol
	let first_name = document.forms["checkoutForm"]["first_name"].value;
	let last_name = document.forms["checkoutForm"]["last_name"].value;

    let email = document.forms["checkoutForm"]["email"].value;
	let phone = document.forms["checkoutForm"]["phone"].value;
	let address = document.forms["checkoutForm"]["address"].value;
	let city = document.forms["checkoutForm"]["city"].value;
	let zip = document.forms["checkoutForm"]["zip"].value;


    const orderedCart = JSON.parse(localStorage.getItem("productsInCart")) || [];
    const orderDetails = {
        first_name: first_name,
        last_name: last_name,
        email: email,   
        phone: phone,
        address: address,
        city: city,
        zip: zip,
        card_number: card_number,
        expiration_date: expiration_date,
        cvv: cvv,
        cart: orderedCart
    };

    console.log("Order details:");
    console.log(JSON.stringify(orderDetails));

    // make sure each time the user checks out we overwrite the last saved info wiuth the current one
    localStorage.setItem("savedCheckoutInfo", JSON.stringify(orderDetails));

    console.log("Checkout form was submitted! And saved in localStorage for the user: ");
    console.log(first_name + " " + last_name);

    let total_charge = calculateCartCheckoutPrice();

    alert("Thank you for your order, " + first_name + "! Your order has been placed successfully. Your card was charged for $" + total_charge + ".");


    // clear the cart now that the user finished ordering and redirdct back to indesx
    localStorage.removeItem("productsInCart");  
    document.location.href = "index.html";


}


// updates the table of products on checkouth.tml (the bottom summary section)
function renderCheckoutSummary() {

    // Make sure we're on the checkout page
    const summaryRows = document.getElementById("checkout-summary-rows");
    const summaryTotal = document.getElementById("checkout-summary-total");

    if (!summaryRows) return;

    const cart = JSON.parse(localStorage.getItem("productsInCart")) || [];

    const grouped = {};
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];

        // new dict sine it doesn't exist yet
        if (!grouped[item.product_id]) {
            grouped[item.product_id] = {
                name: item.product_name,
                price: item.price,
                quantity: 1
            };
        } 
        
        // already exist so just add 1 to quantity
        else {
            grouped[item.product_id].quantity++;
        }
    }

    summaryRows.innerHTML = "";

    let total = 0;

    // add each prodct to the summary on checkout.html
    for (let id in grouped) {
        const product = grouped[id];

        const row = document.createElement("tr");
        row.innerHTML = 
        `
            <td class="py-2">${product.name}</td>
            <td class="py-2">${product.quantity}</td>
            <td class="py-2">$${(product.price * product.quantity).toFixed(2)}</td>
        `;

        summaryRows.appendChild(row);

        total += product.price * product.quantity;
    }

    // just to make sure the total is a float
    summaryTotal.textContent = total.toFixed(2);
}



// Loads the products onto products.html, sep by category
function loadProductsByCategory() {
    const container = document.getElementById("separated-product-grid");

    // make sure we on products.html
    if (!container) {
        return;
    }

    console.log("Loading products onto products.html...");

    // Iterate through products and add them to the right cat section
    products.forEach(product => {

        const section = document.getElementById(`category-${product.category}`);

        // no existing html category found for the product? shouldnt happen but just i ncase
        if (!section) {
            return;
        }

        const card = document.createElement("div");
        card.className = "border border-gray-300 rounded-xl p-4 shadow-sm space-y-4";


        // this is basically the as the one on index.html, changed it up a little
        card.innerHTML = 
        `
            <h3 class="text-lg font-semibold">${product.product_name}</h3>

            <div class="flex justify-center py-4">
                <img src="images/${product.product_image}" class="w-24 h-24" />
            </div>

            <div class="text-gray-700 font-semibold text-xl">
                $${product.price.toFixed(2)}
            </div>

            <div class="flex items-center justify-between">

                <div class="px-2 py-1 border border-gray-300 rounded-xl text-sm font-semibold">
                    ${product.category.toUpperCase()}
                </div>

                <div class="flex items-center space-x-2">
                    <button class="product-decrease bg-gray-200 px-2 py-1 rounded" data-id="${product.product_id}">-</button>
                    <span id="productQty-${product.product_id}" class="font-semibold">0</span>
                    <button class="product-increase bg-gray-200 px-2 py-1 rounded" data-id="${product.product_id}">+</button>
                </div>

            </div>
        `;

        section.appendChild(card);

        // attach event listeners for the increase and decrease quantity buttons
        const qtySpan = card.querySelector(`#productQty-${product.product_id}`);
        const decreaseBtn = card.querySelector(`.product-decrease[data-id="${product.product_id}"]`);
        const increaseBtn = card.querySelector(`.product-increase[data-id="${product.product_id}"]`);

        qtySpan.textContent = getItemQuantity(product.product_id);

        increaseBtn.addEventListener("click", () => {

            increaseProductQuantity(product);

            qtySpan.textContent = getItemQuantity(product.product_id);
            updateCartCounter(calculateCartCheckoutPrice());

            
        });

        decreaseBtn.addEventListener("click", () => {

            decreaseProductQuantity(product.product_id);

            qtySpan.textContent = getItemQuantity(product.product_id);
            updateCartCounter(calculateCartCheckoutPrice());

        });


    });
}



document.addEventListener("DOMContentLoaded", () => {

    console.log("Calcuating total price of every iutme in cart..");
    const totalCheckoutPrice = calculateCartCheckoutPrice();
    console.log("The total price is: " + totalCheckoutPrice);


    // This runs across every page since the counter is in the navbar (which appears on every .html page)
    updateCartCounter(totalCheckoutPrice);

    console.log("Updating checkout list");

    const checkoutTableBody = document.getElementById("checkout-table-rows");

    // Make sure checkout functions are only run on checkout.html page
    if (checkoutTableBody != null)  {
        checkoutCartEvents();
        updateCheckoutCartList();
    }


    // same idea here, only run this code if we're on checkout.html
    const checkoutSummary = document.getElementById("checkout-summary");
    if (checkoutSummary) {
        renderCheckoutSummary();
        autoFillCheckoutForm();
    }

    



    const productGrid = document.getElementById("main-product-grid");

    // for loading products onto index.html
    if (productGrid != null) {
        console.log("Found product grid: " + productGrid.id);



        products.forEach(product => {

            const productName = product.product_name;
            const productId = product.product_id;
            const productCategory = product.category;

            // not usinig this because i couldn't get emojis to work even with using the correct font family?
            const productCategoryIcon  = product.category_icon;
            const productPrice = product.price
            const productInStock = product.in_stock;


            console.log(`Loading product: ${productName}, ID: ${productId}, category: ${productCategory}, price: ${productPrice}, in stock: ${productInStock}`); 

            const row = document.createElement("div");
            row.className = "col-span-3 py-3";

            const rowBody = document.createElement("div");
            rowBody.className = "space-y-8 border border-gray-300 rounded-xl p-4 shadow-sm";
            rowBody.innerHTML = `

                <div class="">

                    <div class="space-y-4 px-2 py-1">
                        <h3 class="text-lg font-semibold mb-2">${product.product_name}</h3>
                        <div 
                            class="px-2 py-1.5 flex w-fit border border-gray-300 rounded-xl text-md font-semibold ${product.custom_color ? `text-[${product.custom_color}]` : `text-${product.color}-${product.color_shade ? product.color_shade : 500}`}">* ${product.category.toUpperCase()}</div>
                    </div>

                    <div class="py-6 text-center justify-center justify-items-center flex">
                        <img class="w-24 h-24" src="images/${product.product_image}"/>
                    </div>

                
                </div>




                <div class="px-2 py-1 flex w-full justify-between items-center">

                    <div class="text-gray-700 font-semibold mb-3 text-xl">$${productPrice.toFixed(2)}</div>


                        <div id="qtyContainer-${productId}" class="flex items-center space-x-2">
                            
                            <button 
                                class="product-decrease bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded text-lg font-semibold" 
                                data-id="${productId}">
                                -
                            </button>

                            <span 
                                id="productQty-${productId}" 
                                class="min-w-6 text-center font-semibold">
                                0
                            </span>

                            <button 
                                class="product-increase bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded text-lg font-semibold" 
                                data-id="${productId}">
                                +
                            </button>

                        </div>

                </div>


                <div class="px-1">
                    <button 
                        id="product-description-switch-${productId}" 
                        class="flex items-center space-x-2 text-md font-medium text-gray-600 hover:cursor-pointer hover:text-gray-800">
                        
                        <span class="chevron-icon">

                            <!-- Chevron right icon from Hero icons (chevron right is used for closed description, adn then I used the Chevron down for opened description) -->
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>

                        </span>

                        <span>Show product info</span>
                    </button>

                    <div 
                        id="product-description-content-${productId}" 
                        class="text-md text-gray-500/90 mt-3 hidden">
                        ${product.product_description}
                    </div>
                </div>

                `; 


                
            row.appendChild(rowBody);

            productGrid.appendChild(row);


            // old logic, now we add products to cart based on the quantity counter
            // const addToCartButton = document.getElementById(`addToCartButton-${productId}`);
            // addToCartButton.addEventListener("click", (e) => {

            //     console.log("Product was added to cart: " + productId);
            //     console.log(e);

            //     // Update local storage cart with the product whose "Add to cart" btn was clicked
            //     saveItemToCartStorage(product);


            // });


            const qtySpan = document.getElementById(`productQty-${productId}`);
            const decreaseBtn = rowBody.querySelector(`.product-decrease[data-id="${productId}"]`);
            const increaseBtn = rowBody.querySelector(`.product-increase[data-id="${productId}"]`);

            qtySpan.textContent = getItemQuantity(productId);

            increaseBtn.addEventListener("click", () => {
                increaseProductQuantity(product);
                qtySpan.textContent = getItemQuantity(productId);

                updateCartCounter(calculateCartCheckoutPrice());
            });

            decreaseBtn.addEventListener("click", () => {
                decreaseProductQuantity(productId);
                qtySpan.textContent = getItemQuantity(productId);

                updateCartCounter(calculateCartCheckoutPrice());
            });



            const descriptionToggler = document.getElementById(`product-description-switch-${productId}`);
            const descriptionContent = document.getElementById(`product-description-content-${productId}`);
            const descriptionIcon = descriptionToggler.querySelector(".chevron-icon");

            descriptionToggler.addEventListener("click", () => {

                var isOpen = false;

                if (descriptionContent.classList.contains("hidden")) {
                    isOpen = false;
                }

                else {
                    isOpen = true;
                }

                if (isOpen) {
                    descriptionContent.classList.add("hidden");

                    // Chevorn right from Hero icons for closed description
                    descriptionIcon.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>`;

                } else {
                    descriptionContent.classList.remove("hidden");

                    // Chevron down from hero icons for open description
                    descriptionIcon.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>`;

                }
            });

        })


    }


    // for loading products onto products.html (separated onto diff rows by sports type/category)
    else {
        loadProductsByCategory();

    }



});