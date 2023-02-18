const list = document.querySelector('.my-list');
const dropdown = document.querySelector('.my-dropdown');
const menu = dropdown.querySelector('.my-dropdown-menu');
const toggle = dropdown.querySelector('.my-dropdown-toggle');

list.querySelectorAll('li').forEach((li) => {
  const item = document.createElement('li');
  item.textContent = li.textContent;
  item.addEventListener('click', () => {
    toggle.textContent = li.textContent;
    menu.classList.remove('show');
  });
  menu.appendChild(item);
});

toggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});
