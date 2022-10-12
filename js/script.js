const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const handleSubmit = (e) => {
  e.preventDefault();

  // Clear QR Code first before generating another one
  qr.innerText = '';

  const url = document.getElementById('url').value;
  const size = document.getElementById('size').value;

  showSpinner();
  setTimeout(() => {
    hideSpinner();
    generateQRCode(url, size);
  }, 1000);
};

const generateQRCode = (url, size) => {
  const qrcode = new QRCode('qrcode', {
    text: url,
    width: size,
    height: size,
  });
};

const showSpinner = () => {
  document.getElementById('spinner').style.display = 'block';
};

const hideSpinner = () => {
  document.getElementById('spinner').style.display = 'none';
};

form.addEventListener('submit', handleSubmit);
