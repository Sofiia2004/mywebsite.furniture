// Пошук за назвою

document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search-input');
  const itemsContainer = document.getElementById('items-container');
  const items = Array.from(itemsContainer.getElementsByClassName('item'));

  searchInput.addEventListener('input', function () {
    const query = searchInput.value.toLowerCase();
    
    items.forEach(item => {
      const itemName = item.querySelector('.card-text').textContent.toLowerCase();
      if (itemName.includes(query)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Пошук за категоріями


document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search-input');
  const categorySelect = document.getElementById('category-select');
  const itemsContainer = document.getElementById('items-container');
  const items = Array.from(itemsContainer.getElementsByClassName('item'));

  function filterItems() {
    const query = searchInput.value.toLowerCase();
    const selectedCategory = categorySelect.value;

    items.forEach(item => {
      const itemName = item.querySelector('.card-text').textContent.toLowerCase();
      const itemCategory = item.getAttribute('data-category');

      const matchesSearch = itemName.includes(query);
      const matchesCategory = selectedCategory === 'all' || itemCategory === selectedCategory;

      if (matchesSearch && matchesCategory) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  searchInput.addEventListener('input', filterItems);
  categorySelect.addEventListener('change', filterItems);
});

