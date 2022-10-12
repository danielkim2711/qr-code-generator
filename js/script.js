const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const handleSubmit = (e) => {
  e.preventDefault();

  const url = document.getElementById('url').value;
  const size = document.getElementById('size').value;

  showSpinner();
  setTimeout(() => hideSpinner(), 1000);
};

const showSpinner = () => {
  document.getElementById('spinner').style.display = 'block';
};

const hideSpinner = () => {
  document.getElementById('spinner').style.display = 'none';
};

form.addEventListener('submit', handleSubmit);
