var phoneProducts = [
    {
      name: "samsung s22",
      brand: "Android",
      price: 999.99,
      inStock: true,
    },
    {
      name: "Galaxy S21",
      brand: "Samsung",
      price: 899.99,
      inStock: true,
    },
    {
      name: "note 10",
      brand: "samsung",
      price: 799.99,
      inStock: false,
    },
  ];
  
// Function to display available phones
function showAvailablePhones() {
    console.log("Available Phones:");
    phoneProducts.forEach(function (phone) {
      if (phone.inStock) {
        console.log(phone.brand + " " + phone.name + " - $" + phone.price);
      }
    });
  }
  
  // Function to calculate the total price when adding phones to the cart
  function calculateTotalPrice(phones) {
    var totalPrice = 0;
    phones.forEach(function (phone) {
      var phoneObj = phoneProducts.find(function (p) {
        return p.name === phone;
      });
      if (phoneObj) {
        totalPrice += phoneObj.price;
      }
    });
    return totalPrice;
  }
  
  // Simulating the process of a customer adding phones to the cart
  var customerCart = ["s10 plus", "Galaxy S21", "Pixel 5"];
  var cartTotal = calculateTotalPrice(customerCart);

// Displaying the customer's cart and the total price
console.log("Customer's Cart:");
customerCart.forEach(function (phone) {
  console.log(phone);
});
console.log("Total Price: $" + cartTotal); 
   