
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
];





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



    const productGrid = document.getElementById("product-grid");

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


                    <div id="addToCartButton-${productId}" class="flex items-center space-x-1.5 bg-white hover:cursor-pointer hover:bg-gray-200/30 border border-gray-300 px-2 py-2.5 text-sm rounded-md">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                        <div>Add to cart</div>

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

            const addToCartButton = document.getElementById(`addToCartButton-${productId}`);
            addToCartButton.addEventListener("click", (e) => {

                console.log("Product was added to cart: " + productId);
                console.log(e);

                // Update local storage cart with the product whose "Add to cart" btn was clicked
                saveItemToCartStorage(product);


            });


            // Find each product's description toggler and set its onClick to show/hide and change chevroniIcon
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






    // I tried fetching the products this way through a JSON file, but it doesn't work without running the HTML file through an actual local web server
    // Because CORS blocks the fetch 
    // fetch("./products.json")
    // .then(response => response.json())
    // .then(products => {
        
    // })



});