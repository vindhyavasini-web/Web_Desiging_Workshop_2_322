const slides = Array.from(document.querySelectorAll(".hero-slide"));
const previousButton = document.querySelector(".hero-prev");
const nextButton = document.querySelector(".hero-next");
const searchInput = document.querySelector("#searchInput");
const searchForm = document.querySelector("#searchForm");
const categorySelect = document.querySelector("#categorySelect");
const voiceSearch = document.querySelector("#voiceSearch");
const voiceToggle = document.querySelector("#voiceToggle");
const voiceStatus = document.querySelector("#voiceStatus");
const suggestions = document.querySelector("#suggestions");
const cartCount = document.querySelector("#cartCount");
const cartButton = document.querySelector("#cartButton");
const cartDrawer = document.querySelector("#cartDrawer");
const closeCart = document.querySelector("#closeCart");
const cartItems = document.querySelector("#cartItems");
const cartTotal = document.querySelector("#cartTotal");
const checkoutButton = document.querySelector("#checkoutButton");
const cartSavings = document.querySelector("#cartSavings");
const toast = document.querySelector("#toast");
const backTop = document.querySelector("#backTop");
const signInButton = document.querySelector("#signInButton");
const accountButton = document.querySelector("#accountButton");
const ordersButton = document.querySelector("#ordersButton");
const locationButton = document.querySelector("#locationButton");
const deliveryText = document.querySelector("#deliveryText");
const dealProducts = document.querySelector("#dealProducts");
const resultsPanel = document.querySelector("#resultsPanel");
const resultsGrid = document.querySelector("#resultsGrid");
const resultsTitle = document.querySelector("#resultsTitle");
const clearResults = document.querySelector("#clearResults");
const sortSelect = document.querySelector("#sortSelect");
const budgetSelect = document.querySelector("#budgetSelect");
const dealTimer = document.querySelector("#dealTimer");
const wishlistList = document.querySelector("#wishlistList");
const recentList = document.querySelector("#recentList");
const clearWishlist = document.querySelector("#clearWishlist");
const clearRecent = document.querySelector("#clearRecent");
const copyCoupon = document.querySelector("#copyCoupon");
const compareTray = document.querySelector("#compareTray");
const compareCount = document.querySelector("#compareCount");
const viewCompare = document.querySelector("#viewCompare");
const clearCompare = document.querySelector("#clearCompare");
const modalBackdrop = document.querySelector("#modalBackdrop");
const productModal = document.querySelector("#productModal");
const signInModal = document.querySelector("#signInModal");
const locationModal = document.querySelector("#locationModal");
const compareModal = document.querySelector("#compareModal");
const compareGrid = document.querySelector("#compareGrid");
const closeModal = document.querySelector("#closeModal");
const modalImage = document.querySelector("#modalImage");
const modalCategory = document.querySelector("#modalCategory");
const modalTitle = document.querySelector("#modalTitle");
const modalRating = document.querySelector("#modalRating");
const modalDescription = document.querySelector("#modalDescription");
const modalPrice = document.querySelector("#modalPrice");
const modalAddCart = document.querySelector("#modalAddCart");
const pinInput = document.querySelector("#pinInput");

const products = [
  {
    id: "shoe-1",
    title: "Sports shoes and sneakers",
    category: "fashion",
    price: 1299,
    rating: 4.2,
    badge: "Up to 40% off",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80",
    description: "Lightweight everyday sneakers with cushioned support and a flexible outsole."
  },
  {
    id: "laptop-1",
    title: "Thin and light laptop",
    category: "electronics",
    price: 52990,
    rating: 4.4,
    badge: "Deal of the day",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=500&q=80",
    description: "Portable laptop for work, study, video calls and entertainment."
  },
  {
    id: "watch-1",
    title: "Smart watch with fitness tracking",
    category: "electronics",
    price: 2499,
    rating: 4.1,
    badge: "Up to 55% off",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=500&q=80",
    description: "Track steps, heart rate, calls, messages and workouts from your wrist."
  },
  {
    id: "camera-1",
    title: "Camera and accessories kit",
    category: "electronics",
    price: 34990,
    rating: 4.5,
    badge: "Limited time",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=500&q=80",
    description: "Capture travel, portraits and videos with a compact creator-friendly setup."
  },
  {
    id: "beauty-1",
    title: "Beauty and grooming combo",
    category: "fashion",
    price: 899,
    rating: 4.0,
    badge: "Min. 30% off",
    image: "https://images.unsplash.com/photo-1585386959984-a4155223168f?auto=format&fit=crop&w=500&q=80",
    description: "Daily grooming essentials packed for gifting or personal care."
  },
  {
    id: "watch-2",
    title: "Classic wrist watch",
    category: "fashion",
    price: 1799,
    rating: 4.3,
    badge: "Great Indian picks",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80",
    description: "A clean analog watch with a versatile design for office and casual wear."
  },
  {
    id: "headphone-1",
    title: "Wireless over-ear headphones",
    category: "electronics",
    price: 1499,
    rating: 4.2,
    badge: "Starting Rs.149",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
    description: "Comfortable wireless headphones with deep bass and long battery life."
  },
  {
    id: "furniture-1",
    title: "Modern fabric sofa",
    category: "home",
    price: 18999,
    rating: 4.4,
    badge: "Up to 60% off",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=80",
    description: "A compact living room sofa with soft fabric and sturdy wooden legs."
  },
  {
    id: "home-1",
    title: "Cotton bedsheet set",
    category: "home",
    price: 799,
    rating: 4.1,
    badge: "Home deal",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=500&q=80",
    description: "Soft cotton bedsheets with pillow covers for everyday comfort."
  },
  {
    id: "fresh-1",
    title: "Fresh fruits basket",
    category: "fresh",
    price: 499,
    rating: 4.0,
    badge: "Fresh",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=500&q=80",
    description: "Assorted seasonal fruits delivered fresh to your doorstep."
  },
  {
    id: "phone-1",
    title: "5G smartphone with AMOLED display",
    category: "electronics",
    price: 23999,
    rating: 4.3,
    badge: "Bank offer",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=500&q=80",
    description: "A fast 5G phone with a bright display, long battery life and sharp cameras."
  },
  {
    id: "tablet-1",
    title: "Entertainment tablet 10 inch",
    category: "electronics",
    price: 14999,
    rating: 4.1,
    badge: "Hot deal",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500&q=80",
    description: "Slim tablet for streaming, reading, browsing and online classes."
  },
  {
    id: "speaker-1",
    title: "Portable Bluetooth speaker",
    category: "electronics",
    price: 2199,
    rating: 4.2,
    badge: "Top rated",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=500&q=80",
    description: "Compact wireless speaker with punchy sound for home and travel."
  },
  {
    id: "bag-1",
    title: "Laptop backpack with organizer",
    category: "fashion",
    price: 1199,
    rating: 4.4,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80",
    description: "Durable backpack with laptop padding, bottle pocket and daily storage."
  },
  {
    id: "shirt-1",
    title: "Men's casual cotton shirt",
    category: "fashion",
    price: 699,
    rating: 4.0,
    badge: "Fashion sale",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=500&q=80",
    description: "Comfortable cotton shirt for work, college and weekend outings."
  },
  {
    id: "dress-1",
    title: "Women's floral summer dress",
    category: "fashion",
    price: 999,
    rating: 4.2,
    badge: "Limited deal",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=500&q=80",
    description: "Lightweight summer dress with a soft feel and relaxed fit."
  },
  {
    id: "lamp-1",
    title: "Decorative table lamp",
    category: "home",
    price: 1299,
    rating: 4.5,
    badge: "Home pick",
    image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=500&q=80",
    description: "Warm bedside lamp for reading, work desks and living room corners."
  },
  {
    id: "chair-1",
    title: "Ergonomic office chair",
    category: "home",
    price: 6999,
    rating: 4.3,
    badge: "Work from home",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=500&q=80",
    description: "Supportive office chair with adjustable height and comfortable cushioning."
  },
  {
    id: "cookware-1",
    title: "Non-stick cookware set",
    category: "home",
    price: 2499,
    rating: 4.1,
    badge: "Kitchen deal",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=500&q=80",
    description: "Everyday cookware set for frying, sauteing and quick family meals."
  },
  {
    id: "grocery-1",
    title: "Organic grocery essentials",
    category: "fresh",
    price: 899,
    rating: 4.2,
    badge: "Fresh deal",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    description: "Pantry staples and organic kitchen basics packed for daily cooking."
  },
  {
    id: "coffee-1",
    title: "Premium roasted coffee beans",
    category: "fresh",
    price: 599,
    rating: 4.6,
    badge: "Customer loved",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=500&q=80",
    description: "Freshly roasted coffee beans with rich aroma and smooth flavour."
  },
  {
    id: "book-1",
    title: "Bestselling paperback novel",
    category: "deals",
    price: 399,
    rating: 4.4,
    badge: "Reader favourite",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80",
    description: "A popular paperback pick for relaxed reading and gifting."
  }
];

const passthroughMessages = {
  prime: "Prime page opened: fast delivery, videos and exclusive deals.",
  video: "MX Player / Prime Video demo opened.",
  sell: "Seller registration demo opened.",
  support: "Customer service demo opened."
};

let activeSlide = 0;
let activeProductId = null;
let toastTimer;
let cart = JSON.parse(localStorage.getItem("amazonDemoCart") || "{}");
let wishlist = JSON.parse(localStorage.getItem("amazonDemoWishlist") || "[]");
let recentlyViewed = JSON.parse(localStorage.getItem("amazonDemoRecent") || "[]");
let compareList = JSON.parse(localStorage.getItem("amazonDemoCompare") || "[]");
let couponApplied = localStorage.getItem("amazonDemoCoupon") === "AMAZON10";
let signedInUser = localStorage.getItem("amazonDemoUser") || "";
let deliveryPin = localStorage.getItem("amazonDemoPin") || "600001";
let currentResultItems = [...products];
let voiceEnabled = localStorage.getItem("amazonDemoVoice") !== "off";
let voiceTimer;
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = SpeechRecognition ? new SpeechRecognition() : null;

function formatPrice(price) {
  return `Rs.${price.toLocaleString("en-IN")}`;
}

function saveCart() {
  localStorage.setItem("amazonDemoCart", JSON.stringify(cart));
}

function saveWishlist() {
  localStorage.setItem("amazonDemoWishlist", JSON.stringify(wishlist));
}

function saveRecentlyViewed() {
  localStorage.setItem("amazonDemoRecent", JSON.stringify(recentlyViewed));
}

function saveCompare() {
  localStorage.setItem("amazonDemoCompare", JSON.stringify(compareList));
}

function showSlide(index) {
  activeSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("active", slideIndex === activeSlide);
  });
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function speak(message) {
  if (!voiceEnabled || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(message);
  utterance.rate = 1;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function showVoiceStatus(message) {
  clearTimeout(voiceTimer);
  voiceStatus.textContent = message;
  voiceStatus.classList.add("show");
  voiceTimer = setTimeout(() => voiceStatus.classList.remove("show"), 2600);
}

function updateVoiceToggle() {
  voiceToggle.textContent = voiceEnabled ? "Voice: On" : "Voice: Off";
}

function announce(message) {
  showToast(message);
  speak(message);
}

function stars(rating) {
  const full = Math.round(rating);
  return `${"*".repeat(full)}${"-".repeat(5 - full)} ${rating}`;
}

function productExtras(product) {
  const seed = product.id.split("").reduce((sum, letter) => sum + letter.charCodeAt(0), 0);
  const stock = 4 + (seed % 18);
  const sold = 42 + (seed % 55);
  const deliveryDays = 1 + (seed % 4);
  const discount = 15 + (seed % 50);

  return {
    stock,
    sold,
    deliveryDays,
    discount,
    fastDelivery: deliveryDays <= 2
  };
}

function productCard(product, className = "product") {
  const wished = wishlist.includes(product.id) ? " active" : "";
  const wishLabel = wishlist.includes(product.id) ? "Remove from wishlist" : "Add to wishlist";
  const compared = compareList.includes(product.id) ? " active" : "";
  const compareLabel = compareList.includes(product.id) ? "Remove from compare" : "Add to compare";
  const extras = productExtras(product);

  return `
    <article class="${className}" data-product-id="${product.id}">
      <img src="${product.image}" alt="${product.title}">
      <span class="badge">${product.badge}</span>
      <h3>${product.title}</h3>
      <div class="rating">${stars(product.rating)}</div>
      <div class="meta-row">
        <span class="meta-pill">${extras.fastDelivery ? "Tomorrow" : `${extras.deliveryDays} day delivery`}</span>
        <span class="meta-pill">${extras.discount}% off</span>
      </div>
      <div class="stock-meter">
        <span>Only ${extras.stock} left in stock</span>
        <div class="stock-track"><div class="stock-fill" style="width: ${extras.sold}%"></div></div>
      </div>
      <strong class="price">${formatPrice(product.price)}</strong>
      <div class="product-actions">
        <button type="button" class="add-cart" data-add-id="${product.id}">Add to cart</button>
        <button type="button" class="wish-button${wished}" data-wish-id="${product.id}" aria-label="${wishLabel}">W</button>
        <button type="button" class="compare-button${compared}" data-compare-id="${product.id}" aria-label="${compareLabel}">C</button>
      </div>
    </article>
  `;
}

function renderDeals() {
  dealProducts.innerHTML = products.slice(0, 12).map((product) => productCard(product)).join("");
}

function renderResults(items, title) {
  currentResultItems = [...items];
  resultsTitle.textContent = title;
  const displayItems = applyResultControls(items);
  resultsGrid.innerHTML = displayItems.length
    ? displayItems.map((product) => productCard(product, "result-card")).join("")
    : `<p>No products found. Try searching for headphones, laptop, watch, shoes, home or fresh.</p>`;
  resultsPanel.classList.add("open");
  resultsPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  speak(`${displayItems.length} products found`);
}

function refreshResults() {
  if (!resultsPanel.classList.contains("open")) return;
  const displayItems = applyResultControls(currentResultItems);
  resultsGrid.innerHTML = displayItems.length
    ? displayItems.map((product) => productCard(product, "result-card")).join("")
    : "<p>No products match the selected filters.</p>";
}

function applyResultControls(items) {
  const budget = budgetSelect.value;
  let output = budget === "all"
    ? [...items]
    : items.filter((product) => product.price <= Number(budget));

  if (sortSelect.value === "low") {
    output.sort((a, b) => a.price - b.price);
  } else if (sortSelect.value === "high") {
    output.sort((a, b) => b.price - a.price);
  } else if (sortSelect.value === "rating") {
    output.sort((a, b) => b.rating - a.rating);
  }

  return output;
}

function productMatches(product, query, category) {
  const searchText = `${product.title} ${product.category} ${product.description}`.toLowerCase();
  const categoryMatches = category === "all" || product.category === category || category === "deals";
  return categoryMatches && searchText.includes(query);
}

function filterProducts(category, label = category) {
  if (passthroughMessages[category]) {
    showToast(passthroughMessages[category]);
    return;
  }

  const items = category === "all" || category === "deals"
    ? products
    : products.filter((product) => product.category === category);
  renderResults(items, category === "all" ? "All products" : `${label} products`);
}

function addToCart(productId) {
  cart[productId] = (cart[productId] || 0) + 1;
  saveCart();
  renderCart();
  announce("Added to cart");
}

function setQuantity(productId, quantity) {
  if (quantity <= 0) {
    delete cart[productId];
  } else {
    cart[productId] = quantity;
  }
  saveCart();
  renderCart();
}

function renderCart() {
  const entries = Object.entries(cart);
  const totalQuantity = entries.reduce((sum, [, quantity]) => sum + quantity, 0);
  const total = entries.reduce((sum, [id, quantity]) => {
    const product = products.find((item) => item.id === id);
    return product ? sum + product.price * quantity : sum;
  }, 0);
  const discount = couponApplied && total > 0 ? Math.round(total * 0.1) : 0;
  const payable = Math.max(0, total - discount);

  cartCount.textContent = totalQuantity;
  cartTotal.textContent = formatPrice(payable);
  cartSavings.textContent = discount ? `Coupon AMAZON10 saved you ${formatPrice(discount)}` : "";

  if (!entries.length) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cartItems.innerHTML = entries.map(([id, quantity]) => {
    const product = products.find((item) => item.id === id);
    if (!product) return "";

    return `
      <article class="cart-line">
        <img src="${product.image}" alt="${product.title}">
        <div>
          <h3>${product.title}</h3>
          <p>${formatPrice(product.price)}</p>
          <div class="quantity-row">
            <button type="button" data-qty-id="${id}" data-change="-1">-</button>
            <span>Qty: ${quantity}</span>
            <button type="button" data-qty-id="${id}" data-change="1">+</button>
            <button class="remove-button" type="button" data-remove-id="${id}">Remove</button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function toggleCompare(productId) {
  if (compareList.includes(productId)) {
    compareList = compareList.filter((id) => id !== productId);
    announce("Removed from compare");
  } else if (compareList.length >= 4) {
    announce("You can compare up to 4 products");
    return;
  } else {
    compareList = [...compareList, productId];
    announce("Added to compare");
  }

  saveCompare();
  renderDeals();
  refreshResults();
  renderCompareTray();
}

function renderCompareTray() {
  compareCount.textContent = `${compareList.length} selected`;
  compareTray.classList.toggle("open", compareList.length > 0);
}

function renderCompareModal() {
  const items = compareList
    .map((id) => products.find((product) => product.id === id))
    .filter(Boolean);

  compareGrid.innerHTML = items.length
    ? items.map((product) => {
      const extras = productExtras(product);
      return `
        <article class="compare-card">
          <img src="${product.image}" alt="${product.title}">
          <h3>${product.title}</h3>
          <strong class="price">${formatPrice(product.price)}</strong>
          <div class="compare-spec"><span>Rating</span><strong>${product.rating}</strong></div>
          <div class="compare-spec"><span>Delivery</span><strong>${extras.fastDelivery ? "Tomorrow" : `${extras.deliveryDays} days`}</strong></div>
          <div class="compare-spec"><span>Discount</span><strong>${extras.discount}%</strong></div>
          <div class="compare-spec"><span>Stock</span><strong>${extras.stock} left</strong></div>
        </article>
      `;
    }).join("")
    : '<p class="empty-state">Choose products with the C button to compare.</p>';
}

function toggleWishlist(productId) {
  if (wishlist.includes(productId)) {
    wishlist = wishlist.filter((id) => id !== productId);
    announce("Removed from wishlist");
  } else {
    wishlist = [productId, ...wishlist].slice(0, 8);
    announce("Added to wishlist");
  }
  saveWishlist();
  renderDeals();
  refreshResults();
  renderWishlist();
}

function addRecentlyViewed(productId) {
  recentlyViewed = [productId, ...recentlyViewed.filter((id) => id !== productId)].slice(0, 6);
  saveRecentlyViewed();
  renderRecent();
}

function compactItem(product) {
  return `
    <article class="compact-item" data-product-id="${product.id}">
      <img src="${product.image}" alt="${product.title}">
      <div>
        <strong>${product.title}</strong>
        <span>${product.badge}</span>
      </div>
      <strong class="price">${formatPrice(product.price)}</strong>
    </article>
  `;
}

function renderWishlist() {
  const items = wishlist
    .map((id) => products.find((product) => product.id === id))
    .filter(Boolean);

  wishlistList.innerHTML = items.length
    ? items.map(compactItem).join("")
    : '<p class="empty-state">Tap the W button on products you like.</p>';
}

function renderRecent() {
  const items = recentlyViewed
    .map((id) => products.find((product) => product.id === id))
    .filter(Boolean);

  recentList.innerHTML = items.length
    ? items.map(compactItem).join("")
    : '<p class="empty-state">Open a product to build your recent list.</p>';
}

function openProduct(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  addRecentlyViewed(productId);
  activeProductId = product.id;
  modalImage.src = product.image;
  modalImage.alt = product.title;
  modalCategory.textContent = product.category;
  modalTitle.textContent = product.title;
  modalRating.textContent = stars(product.rating);
  modalDescription.textContent = product.description;
  modalPrice.textContent = formatPrice(product.price);
  const extras = productExtras(product);
  modalDescription.textContent = `${product.description} Delivery: ${extras.fastDelivery ? "tomorrow" : `${extras.deliveryDays} days`}. Only ${extras.stock} left in stock.`;
  openModal(productModal);
  speak(`${product.title}. Price ${formatPrice(product.price)}. Rating ${product.rating}.`);
}

function updateDealTimer() {
  const now = new Date();
  const end = new Date();
  end.setHours(23, 59, 59, 999);
  const remaining = Math.max(0, end - now);
  const hours = String(Math.floor(remaining / 3600000)).padStart(2, "0");
  const minutes = String(Math.floor((remaining % 3600000) / 60000)).padStart(2, "0");
  const seconds = String(Math.floor((remaining % 60000) / 1000)).padStart(2, "0");
  dealTimer.textContent = `${hours}:${minutes}:${seconds}`;
}

function openModal(modal) {
  [productModal, signInModal, locationModal, compareModal].forEach((item) => item.classList.remove("active"));
  modalBackdrop.hidden = false;
  modal.classList.add("active");
}

function closeActiveModal() {
  modalBackdrop.hidden = true;
  [productModal, signInModal, locationModal, compareModal].forEach((item) => item.classList.remove("active"));
}

function updateAccountText() {
  if (signedInUser) {
    accountButton.querySelector("small").textContent = "Hello,";
    accountButton.querySelector("strong").textContent = signedInUser;
  }
}

function updateLocationText() {
  deliveryText.textContent = `Delivering to Chennai ${deliveryPin}`;
}

function renderSuggestions(value) {
  const query = value.trim().toLowerCase();
  if (!query) {
    suggestions.classList.remove("open");
    suggestions.innerHTML = "";
    return;
  }

  const matches = products
    .filter((product) => productMatches(product, query, "all"))
    .slice(0, 5);

  suggestions.innerHTML = matches
    .map((product) => `<button type="button" data-suggestion="${product.title}">${product.title}</button>`)
    .join("");
  suggestions.classList.toggle("open", matches.length > 0);
}

previousButton.addEventListener("click", () => showSlide(activeSlide - 1));
nextButton.addEventListener("click", () => showSlide(activeSlide + 1));
setInterval(() => showSlide(activeSlide + 1), 7000);

searchInput.addEventListener("input", (event) => renderSuggestions(event.target.value));

suggestions.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  searchInput.value = button.dataset.suggestion;
  suggestions.classList.remove("open");
  searchForm.requestSubmit();
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = searchInput.value.trim().toLowerCase();
  const category = categorySelect.value;
  const items = products.filter((product) => productMatches(product, query, category));
  renderResults(items, query ? `Results for "${searchInput.value.trim()}"` : "All products");
});

voiceToggle.addEventListener("click", () => {
  voiceEnabled = !voiceEnabled;
  localStorage.setItem("amazonDemoVoice", voiceEnabled ? "on" : "off");
  updateVoiceToggle();
  showVoiceStatus(voiceEnabled ? "Voice announcements enabled" : "Voice announcements muted");
  if (voiceEnabled) speak("Voice announcements enabled");
});

voiceSearch.addEventListener("click", () => {
  if (!recognition) {
    announce("Voice search is not supported in this browser");
    return;
  }

  recognition.lang = "en-IN";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  voiceSearch.classList.add("listening");
  showVoiceStatus("Listening... say a product name");
  speak("Listening");
  recognition.start();
});

if (recognition) {
  recognition.addEventListener("result", (event) => {
    const transcript = event.results[0][0].transcript.trim();
    searchInput.value = transcript;
    showVoiceStatus(`Searching for "${transcript}"`);
    searchForm.requestSubmit();
  });

  recognition.addEventListener("end", () => {
    voiceSearch.classList.remove("listening");
  });

  recognition.addEventListener("error", () => {
    voiceSearch.classList.remove("listening");
    announce("I could not hear that. Please try again.");
  });
}

document.addEventListener("click", (event) => {
  if (!event.target.closest(".search")) suggestions.classList.remove("open");

  const addButton = event.target.closest("[data-add-id]");
  if (addButton) {
    event.preventDefault();
    event.stopPropagation();
    addToCart(addButton.dataset.addId);
    return;
  }

  const wishButton = event.target.closest("[data-wish-id]");
  if (wishButton) {
    event.preventDefault();
    event.stopPropagation();
    toggleWishlist(wishButton.dataset.wishId);
    return;
  }

  const compareButton = event.target.closest("[data-compare-id]");
  if (compareButton) {
    event.preventDefault();
    event.stopPropagation();
    toggleCompare(compareButton.dataset.compareId);
    return;
  }

  const smartFilterButton = event.target.closest("[data-smart-filter]");
  if (smartFilterButton) {
    const mode = smartFilterButton.dataset.smartFilter;
    let items = [...products];
    let title = "Smart deals";

    if (mode === "under1000") {
      items = products.filter((product) => product.price <= 1000);
      title = "Deals under Rs.1,000";
    } else if (mode === "toprated") {
      items = products.filter((product) => product.rating >= 4.4);
      title = "Top rated picks";
    } else if (mode === "fastdelivery") {
      items = products.filter((product) => productExtras(product).fastDelivery);
      title = "Fast delivery picks";
    } else if (mode === "bigdiscount") {
      items = products.filter((product) => productExtras(product).discount >= 45);
      title = "Big discount picks";
    }

    renderResults(items, title);
    return;
  }

  const productCardElement = event.target.closest("[data-product-id]");
  if (productCardElement) {
    openProduct(productCardElement.dataset.productId);
    return;
  }

  const filterLink = event.target.closest("[data-filter]");
  if (filterLink) {
    event.preventDefault();
    filterProducts(filterLink.dataset.filter, filterLink.textContent.trim());
  }
});

cartButton.addEventListener("click", () => {
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
});

closeCart.addEventListener("click", () => {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
});

cartDrawer.addEventListener("click", (event) => {
  if (event.target === cartDrawer) closeCart.click();

  const quantityButton = event.target.closest("[data-qty-id]");
  if (quantityButton) {
    const id = quantityButton.dataset.qtyId;
    const change = Number(quantityButton.dataset.change);
    setQuantity(id, (cart[id] || 0) + change);
  }

  const removeButton = event.target.closest("[data-remove-id]");
  if (removeButton) {
    setQuantity(removeButton.dataset.removeId, 0);
  }
});

checkoutButton.addEventListener("click", () => {
  const hasItems = Object.keys(cart).length > 0;
  announce(hasItems ? "Checkout demo started" : "Add items before checkout");
});

copyCoupon.addEventListener("click", () => {
  couponApplied = true;
  localStorage.setItem("amazonDemoCoupon", "AMAZON10");
  renderCart();
  announce("Coupon AMAZON10 applied to cart");
});

viewCompare.addEventListener("click", () => {
  renderCompareModal();
  openModal(compareModal);
});

clearCompare.addEventListener("click", () => {
  compareList = [];
  saveCompare();
  renderCompareTray();
  renderDeals();
  refreshResults();
  announce("Compare list cleared");
});

modalAddCart.addEventListener("click", () => {
  if (activeProductId) addToCart(activeProductId);
});

closeModal.addEventListener("click", closeActiveModal);
modalBackdrop.addEventListener("click", (event) => {
  if (event.target === modalBackdrop || event.target.matches("[data-close-modal]")) {
    closeActiveModal();
  }
});

signInButton.addEventListener("click", () => openModal(signInModal));
accountButton.addEventListener("click", () => openModal(signInModal));
locationButton.addEventListener("click", () => openModal(locationModal));

ordersButton.addEventListener("click", () => {
  announce(signedInUser ? "Orders page demo opened" : "Please sign in to view orders");
});

signInModal.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.querySelector("#emailInput").value.trim();
  signedInUser = email.split("@")[0] || "Customer";
  localStorage.setItem("amazonDemoUser", signedInUser);
  updateAccountText();
  closeActiveModal();
  announce("Signed in successfully");
});

locationModal.addEventListener("submit", (event) => {
  event.preventDefault();
  deliveryPin = pinInput.value.trim() || deliveryPin;
  localStorage.setItem("amazonDemoPin", deliveryPin);
  updateLocationText();
  closeActiveModal();
  announce("Delivery location updated");
});

clearResults.addEventListener("click", () => {
  resultsPanel.classList.remove("open");
  searchInput.value = "";
});

sortSelect.addEventListener("change", refreshResults);
budgetSelect.addEventListener("change", refreshResults);

clearWishlist.addEventListener("click", () => {
  wishlist = [];
  saveWishlist();
  renderWishlist();
  renderDeals();
  refreshResults();
  announce("Wishlist cleared");
});

clearRecent.addEventListener("click", () => {
  recentlyViewed = [];
  saveRecentlyViewed();
  renderRecent();
  announce("Recently viewed cleared");
});

backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelectorAll("footer a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showToast(`${link.textContent} demo opened`);
  });
});

renderDeals();
renderCart();
renderWishlist();
renderRecent();
renderCompareTray();
updateAccountText();
updateLocationText();
updateVoiceToggle();
updateDealTimer();
setInterval(updateDealTimer, 1000);
