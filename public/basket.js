document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.btn-dark[data-id]');
    buyButtons.forEach(button => {
      button.addEventListener('click', function() {
        const productId = button.getAttribute('data-id');
        const productName = document.getElementById('productName').innerText;
        const productPrice = document.getElementById('productPrice').innerText;
  
        // Отримати поточний вміст кошика з localStorage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        // Додати товар до кошика
        cart.push({ id: productId, name: productName, price: productPrice });
        
        // Оновити вміст кошика у localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
  
        // Викликати функцію для відображення товарів у кошику
        displayCartItems();
  
        // Повідомлення про успішне додавання товару до кошика
        alert('Товар додано до кошика');
      });
    });
  });
  
  function displayCartItems() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = ''; // Очищаємо попередні товари
  
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    let totalPrice = 0;
    
    cart.forEach(item => {
      const cartItemDiv = document.createElement('div');
      cartItemDiv.classList.add('cart-item');
      
      const itemName = document.createElement('h4');
      itemName.textContent = item.name;
      cartItemDiv.appendChild(itemName);
  
      const itemPrice = document.createElement('p');
      itemPrice.textContent = `Ціна: ${item.price} грн`;
      cartItemDiv.appendChild(itemPrice);
      
      cartItemsDiv.appendChild(cartItemDiv);
  
      totalPrice += parseInt(item.price); // Додайте ціну товару до загальної суми
    });
    
    document.getElementById('total-price').textContent = totalPrice; // Оновити загальну суму у кошику
  }
  