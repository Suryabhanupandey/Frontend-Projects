
  const products = [
    { id: 1, name: "Smartphone", price: 14999, img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80" },
    { id: 2, name: "T-Shirt", price: 2999, img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80" },
    { id: 3, name: "Laptop", price: 49999, img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80" },
    { id: 4, name: "Smart Watch", price: 5999, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80" }
  ];

  const grid = document.getElementById('productGrid');
  const cartCount = document.getElementById('cartCount');
  let count = 0;

  // Generate product cards dynamically
  products.forEach(p => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <div class="card-content">
        <h3>${p.name}</h3>
        <p class="price">₹${p.price}</p>
        <button class="btn" onclick="addToCart()">Add to Cart</button>
      </div>
    `;
    grid.appendChild(card);
  });

  function addToCart() {
    count++;
    cartCount.textContent = count;
  }
