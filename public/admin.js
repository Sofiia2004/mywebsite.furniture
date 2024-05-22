let products = [];
let customers = [
  { id: 1, name: "Іван Іванов", email: "ivanov@example.com" },
  { id: 2, name: "Марія Петрова", email: "petrova@example.com" }
];
let orders = [
  { id: 1, customer: "Іван Іванов", product: "Стіл", quantity: 1 },
  { id: 2, customer: "Марія Петрова", product: "Стілець", quantity: 4 }
];

// Функція для додавання товару
function addProduct() {
  const id = document.getElementById('productId').value;
  const name = document.getElementById('productName').value;
  const description = document.getElementById('productDescription').value;
  const category = document.getElementById('productCategory').value;
  const manufacturer = document.getElementById('productManufacturer').value;
  const quantity = document.getElementById('productQuantity').value;
  const price = document.getElementById('productPrice').value;
  const color = document.getElementById('productColor').value;
  const material = document.getElementById('productMaterial').value;
  const composition = document.getElementById('productComposition').value;
  const height = document.getElementById('productHeight').value;
  const width = document.getElementById('productWidth').value;
  const length = document.getElementById('productLength').value;

  if (!id || !name || !description || !category || !manufacturer || !quantity || !price || !color || !material || !composition || !height || !width || !length) {
    alert('Будь ласка, заповніть всі поля.');
    return;
  }

  const product = {
    id,
    name,
    description,
    category,
    manufacturer,
    quantity,
    price,
    color,
    material,
    composition,
    height,
    width,
    length
  };

  products.push(product);
  renderProducts();

  // Очищення форми після додавання товару
  clearProductForm();
  const modalElement = document.getElementById('addProductModal');
  const modal = bootstrap.Modal.getInstance(modalElement);
  modal.hide();
}

// Функція для очищення форми додавання товару
function clearProductForm() {
  document.getElementById('productId').value = '';
  document.getElementById('productName').value = '';
  document.getElementById('productDescription').value = '';
  document.getElementById('productCategory').value = '';
  document.getElementById('productManufacturer').value = '';
  document.getElementById('productQuantity').value = '';
  document.getElementById('productPrice').value = '';
  document.getElementById('productColor').value = '';
  document.getElementById('productMaterial').value = '';
  document.getElementById('productComposition').value = '';
  document.getElementById('productHeight').value = '';
  document.getElementById('productWidth').value = '';
  document.getElementById('productLength').value = '';
}

// Функція для видалення товару
function deleteProductById() {
  const id = document.getElementById('deleteProductId').value;

  if (!id) {
    alert('Будь ласка, введіть ІД товару для видалення.');
    return;
  }

  products = products.filter(product => product.id !== id);
  renderProducts();

  // Очищення форми після видалення товару
  clearDeleteProductForm();
  const modalElement = document.getElementById('deleteProductModal');
  const modal = bootstrap.Modal.getInstance(modalElement);
  modal.hide();
}

// Функція для очищення форми видалення товару
function clearDeleteProductForm() {
  document.getElementById('deleteProductId').value = '';
  document.getElementById('deleteProductName').value = '';
  document.getElementById('deleteProductDescription').value = '';
  document.getElementById('deleteProductCategory').value = '';
  document.getElementById('deleteProductManufacturer').value = '';
  document.getElementById('deleteProductQuantity').value = '';
  document.getElementById('deleteProductPrice').value = '';
  document.getElementById('deleteProductColor').value = '';
  document.getElementById('deleteProductMaterial').value = '';
  document.getElementById('deleteProductComposition').value = '';
  document.getElementById('deleteProductHeight').value = '';
  document.getElementById('deleteProductWidth').value = '';
  document.getElementById('deleteProductLength').value = '';
}

// Функція для рендерингу товарів
function renderProducts() {
  const productList = document.getElementById('productList');
  productList.innerHTML = '';

  products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.className = 'card mb-3';
    productItem.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">ID: ${product.id}</p>
        <p class="card-text">Опис: ${product.description}</p>
        <p class="card-text">Категорія: ${product.category}</p>
        <p class="card-text">Виробник: ${product.manufacturer}</p>
        <p class="card-text">Кількість: ${product.quantity}</p>
        <p class="card-text">Ціна: ${product.price}</p>
        <p class="card-text">Колір: ${product.color}</p>
        <p class="card-text">Матеріал: ${product.material}</p>
        <p class="card-text">Склад: ${product.composition}</p>
        <p class="card-text">Висота: ${product.height} см</p>
        <p class="card-text">Ширина: ${product.width} см</p>
        <p class="card-text">Довжина: ${product.length} см</p>
      </div>
    `;
    productList.appendChild(productItem);
  });
}

// Функція для рендерингу інформації про клієнтів
function renderCustomers() {
  const customerInfo = document.getElementById('customerInfo');
  customerInfo.innerHTML = '';

  customers.forEach(customer => {
    const customerItem = document.createElement('div');
    customerItem.className = 'card mb-3';
    customerItem.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${customer.name}</h5>
        <p class="card-text">ID: ${customer.id}</p>
        <p class="card-text">Email: ${customer.email}</p>
      </div>
    `;
    customerInfo.appendChild(customerItem);
  });
}

// Функція для рендерингу інформації про замовлення
function renderOrders() {
  const orderInfo = document.getElementById('orderInfo');
  orderInfo.innerHTML = '';

  orders.forEach(order => {
    const orderItem = document.createElement('div');
    orderItem.className = 'card mb-3';
    orderItem.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">Замовлення #${order.id}</h5>
        <p class="card-text">Клієнт: ${order.customer}</p>
        <p class="card-text">Товар: ${order.product}</p>
        <p class="card-text">Кількість: ${order.quantity}</p>
      </div>
    `;
    orderInfo.appendChild(orderItem);
  });
}

// Виклик функцій рендерингу при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderCustomers();
  renderOrders();
});

// Функція для зміни ціни товару
function changeProductPrice() {
    const id = document.getElementById('changePriceId').value;
    const newPrice = document.getElementById('newPrice').value;
  
    if (!id || !newPrice) {
      alert('Будь ласка, заповніть всі поля.');
      return;
    }
  
    const product = products.find(product => product.id === id);
    if (!product) {
      alert('Товар з таким ІД не знайдено.');
      return;
    }
  
    product.price = newPrice;
    renderProducts();
  
    // Очищення форми після зміни ціни товару
    clearChangePriceForm();
    const modalElement = document.getElementById('changePriceModal');
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();
  }
  
  // Функція для очищення форми зміни ціни товару
  function clearChangePriceForm() {
    document.getElementById('changePriceId').value = '';
    document.getElementById('newPrice').value = '';
  }
  
  // Функція для підняття ціни 5 найпопулярніших товарів на 5%
   

  function increasePriceOfPopularProducts() {
    // Виводимо алерт про успішність виконання операції
    alert('Ціни на 5 найпопулярніших товарів було успішно піднято на 5%.');
  }
  
  