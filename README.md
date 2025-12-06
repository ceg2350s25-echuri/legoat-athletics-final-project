
# LeGoat Atheltics Store - CS 2800 Final Project

## Site Theme

### CSS
My website is themed with *TailwindCSS*, there is very little actual CSS in [styles.css](/css/styles.css) because I have a lot of expereince with Tailwind and decides to mostly use Tailwind classes for styling my website

For my color palette/theme, I chose a combination of light blue for foreground and dark blue for background


### Tailwind Colors

The icons I used in this project are from [Hero Icons](https://heroicons.com/)
    - I just copied the SVG code of each Icon from Hero Icons

For icon colors, I just copied the color code straight from [Tailwind Color Codes Documentation](https://tailwindcss.com/docs/colors)
    - Some icons' colors look super weird (and AI-ish), like `stroke="oklch(62.3% 0.214 259.815)"`, it's not because I used AI, but rather I copied that weird `oklch` color code from the Tailwind color docs ([you can verify this by just clicking any color](https://tailwindcss.com/docs/colors)). 
    - Full list of [Hero Icons](https://heroicons.com/) I used:
        - Shopping cart icon
        - Magnifying glass icon
        - Menu bar for mobile Navbar
        - Chevron right and Chevron down (for closed and opened descriptions respectively)



For headings, text, etc. colors I used the default Tailwind color classes, (text-blue-500, bg-blue-500, etc.)



## Features


The products are categorized by sport in products.html page. In index.html they are loaded without any categorization in just one big grid. All products are loaded from an array in the app.js file. You can customize the color, the name, description, etc of products by changing the values in the array!


The checkout form is autofilled with contact information. This info is saved in localStorage so whenever you come back to the checkout page after already submitting it once, the input forms will automatically be filled in with the previous information you submitted!


A summary of your cart is shown right before you submit the checkout page on checkout.html 

Your cart also updates the total price any time you add or remove a quantity of any item




