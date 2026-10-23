const products = [
  {
    id: "baby-tee",
    name: "Baby Tee Graphic 00s",
    category: "y2k",
    categoryLabel: "Baby tee · Y2K",
    price: 89.90,
    oldPrice: 119.90,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=82",
    sizes: ["PP", "P", "M", "G"],
    colors: ["Rosa", "Branco", "Preto"],
    tags: ["best", "sale", "y2k", "pink"],
    badge: "BEST SELLER",
    rating: "4.9"
  },
  {
    id: "velvet-set",
    name: "Jeans Bootcut Low-Rise",
    category: "denim",
    categoryLabel: "Cintura baixa · Flare",
    price: 219.90,
    image: "https://images.pexels.com/photos/16137389/pexels-photo-16137389.jpeg?auto=compress&cs=tinysrgb&w=900",
    sizes: ["34", "36", "38", "40", "42"],
    colors: ["Jeans azul", "Jeans escuro"],
    tags: ["new", "best", "y2k", "denim", "rich"],
    badge: "LOW-RISE FIT",
    rating: "4.9"
  },
  {
    id: "denim-mini",
    name: "Calça Pink Low-Rise",
    category: "pink",
    categoryLabel: "Cintura baixa · Pink",
    price: 139.90,
    oldPrice: 169.90,
    image: "https://images.pexels.com/photos/19397138/pexels-photo-19397138.jpeg?auto=compress&cs=tinysrgb&w=900",
    sizes: ["34", "36", "38", "40", "42"],
    colors: ["Pink", "Rosa bebê"],
    tags: ["best", "sale", "pink", "y2k", "rich"],
    badge: "-18%",
    rating: "4.8"
  },
  {
    id: "pink-top",
    name: "Top Cropped Lace Lilac",
    category: "pink",
    categoryLabel: "Cropped · Pink",
    price: 79.90,
    image: "https://images.pexels.com/photos/17258411/pexels-photo-17258411.jpeg?auto=compress&cs=tinysrgb&w=900",
    sizes: ["PP", "P", "M", "G"],
    colors: ["Rosa pink", "Branco", "Lilás"],
    tags: ["new", "pink", "coquette"],
    badge: "NEW IN",
    rating: "4.9"
  },
  {
    id: "flare-black",
    name: "Calça Cargo Baggy Preta",
    category: "y2k",
    categoryLabel: "Calça preta · Y2K",
    price: 149.90,
    image: "https://images.pexels.com/photos/18568806/pexels-photo-18568806.jpeg?auto=compress&cs=tinysrgb&w=900",
    sizes: ["34", "36", "38", "40", "42"],
    colors: ["Preto", "Grafite"],
    tags: ["best", "y2k", "rich"],
    badge: "IT GIRL FIT",
    rating: "4.8"
  },
  {
    id: "coquette-dress",
    name: "Top Halter Renda Espresso",
    category: "y2k",
    categoryLabel: "Halter de renda · Y2K",
    price: 189.90,
    image: "https://images.pexels.com/photos/13963463/pexels-photo-13963463.jpeg?auto=compress&cs=tinysrgb&w=900",
    sizes: ["PP", "P", "M", "G"],
    colors: ["Marrom", "Preto"],
    tags: ["new", "coquette", "pink", "party"],
    badge: "NEW IN",
    rating: "5.0"
  },
  {
    id: "flare-jeans",
    name: "Jeans Flare Low-Rise",
    category: "denim",
    categoryLabel: "Calça flare · Denim",
    price: 199.90,
    oldPrice: 239.90,
    image: "https://images.pexels.com/photos/39078904/pexels-photo-39078904.jpeg?auto=compress&cs=tinysrgb&w=900",
    sizes: ["34", "36", "38", "40", "42"],
    colors: ["Jeans azul", "Jeans escuro"],
    tags: ["sale", "denim", "y2k"],
    badge: "SALE",
    rating: "4.7"
  },
  {
    id: "flare-pink",
    name: "Conjunto Velour Lilás 00s",
    category: "pink",
    categoryLabel: "Conjunto · Flare Y2K",
    price: 229.90,
    image: "https://images.pexels.com/photos/22724273/pexels-photo-22724273.jpeg?auto=compress&cs=tinysrgb&w=900",
    sizes: ["34", "36", "38", "40", "42"],
    colors: ["Lilás", "Rosa pink"],
    tags: ["new", "best", "pink", "y2k", "rich"],
    badge: "NEW IN",
    rating: "4.9"
  },
  {
    id: "baby-tee-butterfly",
    name: "Baby Tee Rhinestone Pink",
    category: "pink",
    categoryLabel: "Top cropped · Y2K",
    price: 119.90,
    image: "https://images.pexels.com/photos/16652549/pexels-photo-16652549.jpeg?auto=compress&cs=tinysrgb&w=900",
    sizes: ["PP", "P", "M", "G"],
    colors: ["Rosa", "Lilás", "Branco"],
    tags: ["best", "coquette", "pink", "y2k", "rich"],
    badge: "IT GIRL PICK",
    rating: "4.8"
  },
  {
    id: "denim-low-rise",
    name: "Regata Baby Girl Branca",
    category: "y2k",
    categoryLabel: "Regata ajustada · Y2K",
    price: 69.90,
    oldPrice: 89.90,
    image: "https://images.pexels.com/photos/40027127/pexels-photo-40027127.jpeg?auto=compress&cs=tinysrgb&w=900",
    sizes: ["PP", "P", "M", "G"],
    colors: ["Branco", "Preto"],
    tags: ["sale", "y2k", "pink"],
    badge: "00S BASIC",
    rating: "4.6"
  },
  {
    id: "off-shoulder",
    name: "Top Flare Marrom Honey",
    category: "y2k",
    categoryLabel: "Top ajustado · Y2K",
    price: 89.90,
    image: "https://images.pexels.com/photos/15130846/pexels-photo-15130846.jpeg?auto=compress&cs=tinysrgb&w=900",
    sizes: ["PP", "P", "M", "G"],
    colors: ["Marrom", "Caramelo"],
    tags: ["new", "pink", "coquette"],
    badge: "NEW IN",
    rating: "4.8"
  },
  {
    id: "rhinestone-halter",
    name: "Top Halter Rhinestone",
    category: "y2k",
    categoryLabel: "Top brilhante · Y2K",
    price: 129.90,
    image: "https://images.pexels.com/photos/14919720/pexels-photo-14919720.jpeg?auto=compress&cs=tinysrgb&w=900",
    sizes: ["PP", "P", "M", "G"],
    colors: ["Preto", "Prata"],
    tags: ["new", "best", "y2k", "party"],
    badge: "NIGHT OUT",
    rating: "4.9"
  },
  {
    id: "bag-mini",
    name: "Shoulder Bag Chocolate",
    category: "acessorios",
    categoryLabel: "Bolsa · Acessórios Y2K",
    price: 149.90,
    image: "https://images.pexels.com/photos/32498584/pexels-photo-32498584.jpeg?auto=compress&cs=tinysrgb&w=900",
    sizes: ["Único"],
    colors: ["Marrom", "Preto"],
    tags: ["best", "acessorios", "y2k", "rich"],
    badge: "IT GIRL PICK",
    rating: "4.9"
  },
  {
    id: "studded-belt",
    name: "Cinto Studded Big Buckle",
    category: "acessorios",
    categoryLabel: "Cinto com ilhoses · Y2K",
    price: 79.90,
    image: "https://images.pexels.com/photos/38381440/pexels-photo-38381440/free-photo-of-fashionable-red-studded-belt-close-up.jpeg?auto=compress&w=900",
    sizes: ["P", "M", "G"],
    colors: ["Vermelho", "Preto"],
    tags: ["new", "best", "acessorios", "y2k"],
    badge: "Y2K DETAIL",
    rating: "4.9"
  },
  {
    id: "y2k-sunglasses",
    name: "Óculos Slim 2000",
    category: "acessorios",
    categoryLabel: "Óculos · Y2K",
    price: 69.90,
    oldPrice: 89.90,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=82",
    sizes: ["Único"],
    colors: ["Marrom", "Preto", "Rosa"],
    tags: ["sale", "acessorios", "y2k"],
    badge: "-22%",
    rating: "4.8"
  },
  {
    id: "platform-sneakers",
    name: "Tênis Chunky Platform",
    category: "acessorios",
    categoryLabel: "Tênis plataforma · Y2K",
    price: 239.90,
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=700&q=82",
    sizes: ["34", "35", "36", "37", "38", "39"],
    colors: ["Branco", "Rosa"],
    tags: ["new", "acessorios", "y2k"],
    badge: "PLATFORM ERA",
    rating: "4.9"
  }
];

const looks = [
  {
    id: "pink-girl-look",
    name: "Pink Girl — Low-Rise Crush",
    style: "pink",
    styleLabel: "PINK GIRL",
    description: "Rosa chiclete, cintura baixa e uma atitude que não passa despercebida.",
    image: "https://images.pexels.com/photos/16652549/pexels-photo-16652549.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Modelo com cropped pink, jeans de cintura baixa e cinto com ilhoses",
    details: ["BABY TEE", "PINK LOW-RISE", "STUDDED BELT"],
    products: ["baby-tee-butterfly", "velvet-set", "studded-belt"]
  },
  {
    id: "denim-baby-look",
    name: "Denim Baby — Casual It Girl",
    style: "denim",
    styleLabel: "DENIM BABY",
    description: "Baby tee ajustada com flare jeans: o uniforme oficial da it girl dos anos 2000.",
    image: "https://images.pexels.com/photos/13963463/pexels-photo-13963463.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Modelo usando top rendado marrom, jeans e óculos retrô",
    details: ["LACE HALTER TOP", "LOW-RISE FLARE", "SHOULDER BAG"],
    products: ["coquette-dress", "velvet-set", "y2k-sunglasses", "bag-mini"]
  },
  {
    id: "glam-girl-look",
    name: "Glam Girl — Red Carpet Energy",
    style: "glam",
    styleLabel: "GLAM GIRL",
    description: "Top com brilho, jeans escuro e acessórios de atitude para chegar como protagonista.",
    image: "https://images.pexels.com/photos/14919720/pexels-photo-14919720.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Modelo em top brilhante Y2K, jeans cintura baixa e cinto metalizado",
    details: ["RHINESTONE TOP", "BOOTCUT DENIM", "CHROME DETAILS"],
    products: ["rhinestone-halter", "flare-jeans", "studded-belt", "y2k-sunglasses"]
  },
  {
    id: "y2k-princess-look",
    name: "Y2K Princess — Denim Daydream",
    style: "princess",
    styleLabel: "Y2K PRINCESS",
    description: "Regata branca ajustada, jeans bootcut e acessórios chunky com a energia divertida dos anos 2000.",
    image: "https://images.pexels.com/photos/40027127/pexels-photo-40027127.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Modelo em regata branca justa e jeans bootcut de cintura baixa",
    details: ["BABY TANK", "BOOTCUT JEANS", "CHUNKY SNEAKERS"],
    products: ["denim-low-rise", "velvet-set", "studded-belt", "platform-sneakers"]
  }
];

const productGrid = document.querySelector("#product-grid");
const searchInput = document.querySelector("#product-search");
const sortSelect = document.querySelector("#sort-products");
const priceSelect = document.querySelector("#price-filter");
const filterNote = document.querySelector("#active-filter-note");
const emptyState = document.querySelector("#empty-state");
const cartItemsEl = document.querySelector("#cart-items");
const cartCountEl = document.querySelector(".bag-count");
const cartTotalEl = document.querySelector("#cart-total");
const cartSummary = document.querySelector("#cart-summary");
const cartEmpty = document.querySelector("#cart-empty");
const toast = document.querySelector("#toast");
const lookGrid = document.querySelector("#look-grid");
const lookDialog = document.querySelector("#look-dialog");

const formatPrice = (value) => new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
}).format(value);

const safeRead = (key, fallback) => {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value ?? fallback;
  } catch (error) {
    console.warn(`Não foi possível ler ${key} do armazenamento local.`, error);
    return fallback;
  }
};

const saveData = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(`Não foi possível salvar ${key} no armazenamento local.`, error);
    showToast("Não foi possível salvar suas escolhas neste navegador.");
  }
};

let favorites = new Set(safeRead("fashion-style-favorites", []));
let cart = safeRead("fashion-style-cart", []);
let activeFilter = "all";
let activeCategory = "";
let toastTimer;

function getProduct(productId) {
  return products.find((product) => product.id === productId);
}

function renderProducts() {
  const query = searchInput.value.trim().toLocaleLowerCase("pt-BR");
  const maxPrice = priceSelect.value === "all" ? Infinity : Number(priceSelect.value);
  let visible = products.filter((product) => {
    const matchesQuery = `${product.name} ${product.categoryLabel} ${product.colors.join(" ")}`.toLocaleLowerCase("pt-BR").includes(query);
    const matchesFilter = activeFilter === "all" ||
      (activeFilter === "favorites" ? favorites.has(product.id) : product.tags.includes(activeFilter));
    const matchesCategory = !activeCategory || product.category === activeCategory || product.tags.includes(activeCategory);
    return matchesQuery && matchesFilter && matchesCategory && product.price <= maxPrice;
  });

  if (sortSelect.value === "price-asc") visible.sort((a, b) => a.price - b.price);
  if (sortSelect.value === "price-desc") visible.sort((a, b) => b.price - a.price);
  if (sortSelect.value === "name") visible.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));

  productGrid.innerHTML = visible.map((product, index) => `
    <article class="product-card" style="animation-delay:${Math.min(index * 45, 250)}ms">
      <div class="product-image-wrap">
        <img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy">
        <span class="product-badge ${product.oldPrice ? "sale" : ""}">${product.badge}</span>
        <button class="favorite-button ${favorites.has(product.id) ? "is-favorite" : ""}" type="button"
          data-favorite="${product.id}" aria-label="${favorites.has(product.id) ? "Remover dos" : "Adicionar aos"} favoritos"
          aria-pressed="${favorites.has(product.id)}">♡</button>
      </div>
      <div class="product-info">
        <span class="product-category">${product.categoryLabel}</span>
        <h3 class="product-title">${product.name}</h3>
        <div class="product-rating" aria-label="Avaliação ${product.rating} de 5">★★★★★ <span>${product.rating} · avaliações</span></div>
        <p class="product-price"><strong>${formatPrice(product.price)}</strong>${product.oldPrice ? `<del>${formatPrice(product.oldPrice)}</del>` : ""}</p>
        <div class="product-options">
          <label><span class="sr-only">Tamanho de ${product.name}</span>
            <select data-size="${product.id}" aria-label="Tamanho de ${product.name}">
              ${product.sizes.map((size) => `<option value="${size}">${size === "Único" ? "Tamanho único" : `Tam. ${size}`}</option>`).join("")}
            </select>
          </label>
          <label><span class="sr-only">Cor de ${product.name}</span>
            <select data-color="${product.id}" aria-label="Cor de ${product.name}">
              ${product.colors.map((color) => `<option value="${color}">${color}</option>`).join("")}
            </select>
          </label>
        </div>
        <button class="add-to-bag" type="button" data-add="${product.id}">ADICIONAR À SACOLINHA +</button>
      </div>
    </article>
  `).join("");

  productGrid.hidden = visible.length === 0;
  emptyState.hidden = visible.length !== 0;
  const label = activeCategory ? `Coleção: ${categoryName(activeCategory)}` : "";
  filterNote.textContent = label;
}

function renderLooks(style = "all") {
  const visibleLooks = style === "all" ? looks : looks.filter((look) => look.style === style);
  lookGrid.innerHTML = visibleLooks.map((look) => {
    const lookProducts = look.products.map(getProduct).filter(Boolean);
    const total = lookProducts.reduce((sum, product) => sum + product.price, 0);
    const pieceNames = lookProducts.map((product) => product.name).join(" + ");
    return `
      <button class="look-card" type="button" data-look="${look.id}" aria-label="Ver peças do look ${look.name}">
        <span class="look-card-image-wrap">
          <img class="look-card-image" src="${look.image}" alt="${look.imageAlt}" loading="lazy">
          <span class="look-style-label">${look.styleLabel}</span>
          <span class="look-card-open" aria-hidden="true">VER O LOOK ↗</span>
        </span>
        <span class="look-card-info">
          <span class="look-card-title">${look.name}</span>
            <span class="look-card-details">${(look.details || []).map((detail) => `<i>${detail}</i>`).join("")}</span>
            <span class="look-card-pieces">${pieceNames}</span>
            <span class="look-card-price">LOOK COMPLETO <strong>${formatPrice(total)}</strong></span>
        </span>
      </button>`;
  }).join("");
}

function openLook(lookId) {
  const look = looks.find((entry) => entry.id === lookId);
  if (!look) return;

  const lookProducts = look.products.map(getProduct).filter(Boolean);
  document.querySelector("#look-dialog-image").src = look.image;
  document.querySelector("#look-dialog-image").alt = look.imageAlt;
  document.querySelector("#look-dialog-style").textContent = look.styleLabel;
  document.querySelector("#look-dialog-title").textContent = look.name;
  document.querySelector("#look-dialog-description").textContent = look.description;
  document.querySelector("#look-total").textContent = formatPrice(lookProducts.reduce((sum, product) => sum + product.price, 0));
  document.querySelector("#look-pieces").innerHTML = lookProducts.map((product) => `
    <article class="look-piece">
      <img src="${product.image}" alt="" loading="lazy">
      <div class="look-piece-main">
        <span class="product-category">${product.categoryLabel}</span>
        <h3>${product.name}</h3>
        <strong>${formatPrice(product.price)}</strong>
        <div class="look-piece-options">
          <label><span class="sr-only">Tamanho de ${product.name}</span>
            <select data-look-size="${product.id}" aria-label="Tamanho de ${product.name}">
              ${product.sizes.map((size) => `<option value="${size}">${size === "Único" ? "Tamanho único" : `Tam. ${size}`}</option>`).join("")}
            </select>
          </label>
          <label><span class="sr-only">Cor de ${product.name}</span>
            <select data-look-color="${product.id}" aria-label="Cor de ${product.name}">
              ${product.colors.map((color) => `<option value="${color}">${color}</option>`).join("")}
            </select>
          </label>
        </div>
      </div>
      <button class="look-piece-add" type="button" data-look-add="${product.id}" aria-label="Adicionar ${product.name} à sacolinha">+</button>
    </article>
  `).join("");
  document.querySelector("#look-add-all").dataset.look = look.id;
  lookDialog.showModal();
}

function categoryName(category) {
  const names = {
    pink: "Pink Princess",
    y2k: "Y2K Icons",
    denim: "Denim Baby",
    coquette: "Coquette Girl",
    acessorios: "Cute Accessories",
    party: "Party Girl",
    rich: "Rich Girl Energy"
  };
  return names[category] || category;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2800);
}

function toggleFavorite(productId) {
  if (favorites.has(productId)) {
    favorites.delete(productId);
    showToast("Peça removida dos seus favoritos.");
  } else {
    favorites.add(productId);
    showToast("Salvo nos seus favoritos! ♡");
  }
  saveData("fashion-style-favorites", [...favorites]);
  renderProducts();
}

function addToCart(productId, size, color, notify = true) {
  const product = getProduct(productId);
  if (!product) return;
  const existing = cart.find((item) => item.id === productId && item.size === size && item.color === color);
  if (existing) existing.quantity += 1;
  else cart.push({ id: productId, size, color, quantity: 1 });
  saveData("fashion-style-cart", cart);
  renderCart();
  if (notify) showToast(`${product.name} foi para sua sacolinha!`);
}

function changeQuantity(productId, size, color, amount) {
  const item = cart.find((entry) => entry.id === productId && entry.size === size && entry.color === color);
  if (!item) return;
  item.quantity += amount;
  if (item.quantity <= 0) cart = cart.filter((entry) => entry !== item);
  saveData("fashion-style-cart", cart);
  renderCart();
}

function removeFromCart(productId, size, color) {
  cart = cart.filter((item) => !(item.id === productId && item.size === size && item.color === color));
  saveData("fashion-style-cart", cart);
  renderCart();
  showToast("Peça removida da sacolinha.");
}

function renderCart() {
  cart = cart.filter((item) => getProduct(item.id) && item.quantity > 0);
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + getProduct(item.id).price * item.quantity, 0);
  cartCountEl.textContent = count;
  cartCountEl.setAttribute("aria-label", `${count} ${count === 1 ? "item" : "itens"} na sacolinha`);
  cartTotalEl.textContent = formatPrice(total);
  cartSummary.hidden = count === 0;
  cartEmpty.hidden = count > 0;
  cartItemsEl.innerHTML = cart.map((item) => {
    const product = getProduct(item.id);
    return `
      <article class="cart-item">
        <img src="${product.image}" alt="" loading="lazy">
        <div class="cart-item-info">
          <h3>${product.name}</h3>
          <p>${item.color} · ${item.size === "Único" ? "Tamanho único" : `Tam. ${item.size}`}</p>
          <strong>${formatPrice(product.price * item.quantity)}</strong>
          <div class="quantity-control" aria-label="Quantidade de ${product.name}">
            <button type="button" data-quantity="-1" data-id="${item.id}" data-size="${item.size}" data-color="${item.color}" aria-label="Diminuir quantidade">−</button>
            <span>${item.quantity}</span>
            <button type="button" data-quantity="1" data-id="${item.id}" data-size="${item.size}" data-color="${item.color}" aria-label="Aumentar quantidade">+</button>
          </div>
        </div>
        <button class="remove-item" type="button" data-remove="${item.id}" data-size="${item.size}" data-color="${item.color}" aria-label="Remover ${product.name}">×</button>
      </article>`;
  }).join("");

  const freeShipping = 299;
  const remaining = freeShipping - total;
  document.querySelector("#shipping-hint").textContent = remaining > 0
    ? `Faltam ${formatPrice(remaining)} para ganhar frete grátis ✦`
    : "Oba! Você ganhou frete grátis ✦";
}

function openCart() {
  document.body.classList.add("cart-open");
  document.querySelector("#cart-drawer").setAttribute("aria-hidden", "false");
  document.querySelector(".close-drawer").focus();
}

function closeCart() {
  document.body.classList.remove("cart-open");
  document.querySelector("#cart-drawer").setAttribute("aria-hidden", "true");
  document.querySelector(".bag-trigger").focus();
}

function setFilter(filter) {
  activeFilter = filter;
  activeCategory = "";
  document.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.filter === filter);
  });
  renderProducts();
}

productGrid.addEventListener("click", (event) => {
  const favoriteButton = event.target.closest("[data-favorite]");
  if (favoriteButton) {
    toggleFavorite(favoriteButton.dataset.favorite);
    return;
  }
  const addButton = event.target.closest("[data-add]");
  if (addButton) {
    const productId = addButton.dataset.add;
    const size = productGrid.querySelector(`[data-size="${productId}"]`).value;
    const color = productGrid.querySelector(`[data-color="${productId}"]`).value;
    addToCart(productId, size, color);
  }
});

lookGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-look]");
  if (card) openLook(card.dataset.look);
});

document.querySelectorAll(".look-style-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".look-style-tab").forEach((entry) => {
      entry.classList.toggle("active", entry === tab);
    });
    renderLooks(tab.dataset.lookStyle);
  });
});

document.querySelector(".look-dialog-close").addEventListener("click", () => lookDialog.close());
lookDialog.addEventListener("click", (event) => {
  if (event.target === lookDialog) lookDialog.close();
});
document.querySelector("#look-pieces").addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-look-add]");
  if (!addButton) return;
  const productId = addButton.dataset.lookAdd;
  const size = document.querySelector(`[data-look-size="${productId}"]`).value;
  const color = document.querySelector(`[data-look-color="${productId}"]`).value;
  addToCart(productId, size, color);
});
document.querySelector("#look-add-all").addEventListener("click", (event) => {
  const look = looks.find((entry) => entry.id === event.currentTarget.dataset.look);
  if (!look) return;
  look.products.forEach((productId) => {
    const size = document.querySelector(`[data-look-size="${productId}"]`).value;
    const color = document.querySelector(`[data-look-color="${productId}"]`).value;
    addToCart(productId, size, color, false);
  });
  lookDialog.close();
  openCart();
  showToast(`${look.name} foi adicionado à sacolinha!`);
});

cartItemsEl.addEventListener("click", (event) => {
  const quantityButton = event.target.closest("[data-quantity]");
  if (quantityButton) {
    changeQuantity(quantityButton.dataset.id, quantityButton.dataset.size, quantityButton.dataset.color, Number(quantityButton.dataset.quantity));
    return;
  }
  const removeButton = event.target.closest("[data-remove]");
  if (removeButton) removeFromCart(removeButton.dataset.remove, removeButton.dataset.size, removeButton.dataset.color);
});

document.querySelectorAll(".filter-chip").forEach((chip) => {
  chip.addEventListener("click", () => setFilter(chip.dataset.filter));
});

document.querySelectorAll("[data-category]").forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    activeFilter = "all";
    document.querySelectorAll(".filter-chip").forEach((chip) => chip.classList.toggle("active", chip.dataset.filter === "all"));
    searchInput.value = "";
    priceSelect.value = "all";
    renderProducts();
    document.querySelector("#loja").scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelectorAll("[data-collection]").forEach((link) => {
  link.addEventListener("click", () => {
    activeCategory = "";
    setFilter(link.dataset.collection);
    document.querySelector(".site-header").classList.remove("menu-open");
    document.querySelector(".menu-toggle").setAttribute("aria-expanded", "false");
  });
});

searchInput.addEventListener("input", renderProducts);
sortSelect.addEventListener("change", renderProducts);
priceSelect.addEventListener("change", renderProducts);
document.querySelector("#clear-filters").addEventListener("click", () => {
  searchInput.value = "";
  priceSelect.value = "all";
  sortSelect.value = "featured";
  activeCategory = "";
  setFilter("all");
});
document.querySelector(".search-toggle").addEventListener("click", () => {
  document.querySelector("#loja").scrollIntoView({ behavior: "smooth" });
  window.setTimeout(() => searchInput.focus(), 450);
});
document.querySelectorAll(".bag-trigger").forEach((button) => button.addEventListener("click", openCart));
document.querySelector(".close-drawer").addEventListener("click", closeCart);
document.querySelector("#drawer-backdrop").addEventListener("click", closeCart);
document.querySelector(".continue-shopping").addEventListener("click", () => {
  closeCart();
  document.querySelector("#loja").scrollIntoView({ behavior: "smooth" });
});
document.querySelector(".checkout-button").addEventListener("click", () => {
  showToast("Checkout demonstrativo. Configure uma plataforma de pagamento para receber pedidos.");
});
document.querySelector(".menu-toggle").addEventListener("click", (event) => {
  const header = document.querySelector(".site-header");
  const isOpen = header.classList.toggle("menu-open");
  event.currentTarget.setAttribute("aria-expanded", String(isOpen));
});
document.querySelectorAll(".mobile-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".site-header").classList.remove("menu-open");
    document.querySelector(".menu-toggle").setAttribute("aria-expanded", "false");
  });
});
document.querySelector("#newsletter-form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#newsletter-feedback").textContent = "Obrigada! Sua inscrição foi registrada neste protótipo. ♡";
  event.currentTarget.reset();
});
document.querySelector("#current-year").textContent = new Date().getFullYear();
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && document.body.classList.contains("cart-open")) closeCart();
});

renderProducts();
renderLooks();
renderCart();
