
const buttons = document.querySelectorAll('.filter-button');
const gridItems = document.querySelectorAll('.image-filter');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const filter = button.getAttribute('data-filter');

    gridItems.forEach(item => {
      if (filter === 'all') {
        item.style.display = 'block';
      } else {
        item.classList.contains(filter) ? item.style.display = 'block' : item.style.display = 'none';
      }
    });
  });
});
