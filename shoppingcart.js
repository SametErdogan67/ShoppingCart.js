// Step 1: turn to enum
/*const Categories = {
    ELECTRONICS: 'Electronics',
    GROCERIES: 'Groceries',
    CLOTHING: 'Clothing'
};*/
var Categories;
(function (Categories) {
    Categories["ELECTRONICS"] = "Electronics";
    Categories["GROCERIES"] = "Groceries";
    Categories["CLOTHING"] = "Clothing";
})(Categories || (Categories = {}));
var products = [
    { id: 1, name: "Laptop", price: 999.99, category: Categories.ELECTRONICS },
    { id: 2, name: 'T-Shirt', price: 19.99, category: Categories.CLOTHING },
    { id: 3, name: 'Bananas', price: 1.99, category: Categories.GROCERIES }
];
// Step 3: Create a shopping cart (initially empty)
//let shoppingCart = [];
var shoppingCart = [];
// Step 4: Function to add a product to the cart (using arrow function)
/*const addToCart = (product): void => {
    shoppingCart.push(product);
    console.log(`${product.name} has been added to your cart.`);
};*/
var addToCart = function (product) {
    shoppingCart.push(product);
    console.log("".concat(product.name, " has been added to your cart."));
};
// Step 5: Function to calculate the total price of the cart (using arrow function)
/*const calculateTotal = (cart): void => {
    let total = 0;
    cart.forEach((item) => total += item.price);
    return total.toFixed(2);
};*/
var calculateTotal = function (cart) {
    var total = 0;
    cart.forEach(function (item) { return total += item.price; });
    return total.toFixed(2);
};
// Step 6: Function to display the cart contents (using arrow function)
/*const displayCart = (cart): void => {
    if (cart.length === 0) {
        console.log('Your cart is empty.');
        return;
    }

    console.log('Your cart contains:');
    cart.forEach((item): void => {
        console.log(`- ${item.name} (${item.category}): $${item.price}`);
    });
    console.log(`Total: $${calculateTotal(cart)}`);
};*/
var displayCart = function (cart) {
    if (cart.length === 0) {
        console.log('Your cart is empty.');
        return;
    }
    console.log('Your cart contains:');
    cart.forEach(function (item) {
        console.log("- ".concat(item.name, " (").concat(item.category, "): $").concat(item.price));
    });
    console.log("Total: $".concat(calculateTotal(cart)));
};
// Step 7: Simulate adding products to the cart and displaying it
addToCart(products[0]); // Adding Laptop
addToCart(products[2]); // Adding Bananas
displayCart(shoppingCart);
