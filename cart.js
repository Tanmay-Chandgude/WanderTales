// Function to render the cart items
function renderCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const totalPriceElement = document.getElementById('totalPrice');
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    cartItemsContainer.innerHTML = ''; // Clear previous items
    let totalPrice = 0;

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cartItems.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item');
            itemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}" />
                <div>
                    <h3>${item.name}</h3>
                    <p>Price: ₹${item.price}</p>
                    <button onclick="removeFromCart('${item.name}')">Remove</button>
                </div>
            `;
            cartItemsContainer.appendChild(itemDiv);
            totalPrice += item.price;
        });
    }
    
    totalPriceElement.innerText = totalPrice;
}

// Function to remove an item from the cart
function removeFromCart(itemName) {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems = cartItems.filter(item => item.name !== itemName); // Remove the item
    localStorage.setItem('cart', JSON.stringify(cartItems)); // Update the cart in localStorage
    renderCart(); // Re-render the cart
}


// Function to proceed to checkout
function proceedToCheckout() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    if (cartItems.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    // Store order details in localStorage or cookies (if needed)
    // You can adjust this logic based on what needs to be sent for the order
    localStorage.setItem('orderDetails', JSON.stringify(cartItems));

    // Redirect to the order placed page
    window.location.href = "orderplaced.html";
}

// Initialize the cart rendering
renderCart();

// Add event listener to the checkout button
document.getElementById('checkoutButton').addEventListener('click', proceedToCheckout);

// Initialize the cart rendering
renderCart();
