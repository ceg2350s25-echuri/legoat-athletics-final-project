
const products = [
    {
        product_name: "Basketball",
        product_id: "basketball_ball",
        product_image: "basketball-image.png",
        category: "basketball",
        category_icon: "🏀",
        price: 29.99,
        in_stock: true
    },
    {
        product_name: "Tennis Racket",
        product_id: "tennis_racket",
        product_image: "tennis-racket-image.jpg",
        category: "tennis",
        category_icon: "🎾",
        price: 29.99,
        in_stock: true
    }
];





document.addEventListener("DOMContentLoaded", () => {


    updateCartCounter();

    console.log("Updating checkout list");

    updateCheckoutCartList();


    const productGrid = document.getElementById("product-grid");

    if (productGrid != null) {
        console.log("Found product grid: " + productGrid.id);



        products.forEach(product => {

            const productName = product.product_name;
            const productId = product.product_id;
            const productCategory = product.category;
            const productCategoryIcon  = product.category_icon;
            const productPrice = product.price
            const productInStock = product.in_stock;


            console.log(`Loading product: ${productName}, ID: ${productId}, category: ${productCategory}, price: ${productPrice}, in stock: ${productInStock}`); 

            const row = document.createElement("div");
            row.className = "col-span-3 py-3";

            const rowBody = document.createElement("div");
            rowBody.className = "space-y-8 border border-gray-300 rounded-xl p-4 shadow-sm";
            rowBody.innerHTML = `

                <div>

                    <div class="space-y-4">
                        <h3 class="text-lg font-semibold mb-2">${product.product_name}</h3>
                        <div class="py-2.5 px-2 flex w-fit border border-gray-300 rounded-xl flex emoji-font">${product.category.toUpperCase()}</div>
                    </div>

                    <div class="pt-5">
                        <img class="w-20 h-20" src="images/${product.product_image}"/>

                    </div>

                
                </div>




                <div class="flex w-full justify-between items-center">

                    <div class="text-gray-700 font-semibold mb-3">$${productPrice.toFixed(2)}</div>


                    <div id="addToCartButton-${productId}" class="flex items-center space-x-1.5 bg-white hover:cursor-pointer hover:bg-gray-200/30 border border-gray-300 px-2 py-2.5 text-sm rounded-md">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                        <div>Add to cart</div>

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


        })


    }






    // I tried fetching the products this way through a JSON file, but it doesn't work without running the HTML file through an actual local web server
    // Because CORS blocks the fetch 
    // fetch("./products.json")
    // .then(response => response.json())
    // .then(products => {
        
    // })



});