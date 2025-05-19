// Example: Add product to cart
document.addEventListener('DOMContentLoaded', () => {
  const products = [
    { id: 1, name: "Sneakers", price: 29.99 },
    { id: 2, name: "T-shirt", price: 19.99 }
  ];

  const productList = document.getElementById("product-list");
  if (productList) {
    products.forEach(product => {
      const item = document.createElement("div");
      item.innerHTML = `
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(item);
    });
  }
});

function addToCart(productId) {
  alert("Added product ID " + productId + " to cart!");
}
