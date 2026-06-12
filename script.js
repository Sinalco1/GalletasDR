const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle) {
  menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
}

const branches = {
  'Uptown': '9996487951',
  'Francisco M': '9991031703',
  'La Isla': '9994126665',
  'Temozón': '9991725274',
  'México O': '9992637993',
  'Montecristo': '9999929687',
  'Plancha': '9994126648'
};

const form = document.querySelector('#orderForm');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const branch = document.querySelector('#branch').value;
    const product = document.querySelector('#product').value.trim();
    const message = document.querySelector('#message').value.trim();
    const phone = branches[branch] || branches['Uptown'];
    const text = `Hola, soy ${name}. Me gustaría contactar a la Suc. ${branch}. Producto o pedido: ${product}. Mensaje adicional: ${message}`;
    window.open(`https://wa.me/52${phone}?text=${encodeURIComponent(text)}`, '_blank');
  });
}
