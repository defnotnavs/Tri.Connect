const form = document.getElementById('deliveryForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const itemName = document.getElementById('itemName').value;
  const senderName = document.getElementById('senderName').value;
  const senderAddress = document.getElementById('senderAddress').value;
  const recipientName = document.getElementById('recipientName').value;
  const recipientAddress = document.getElementById('recipientAddress').value;
  const deliveryDate = document.getElementById('deliveryDate').value;

  
  form.reset();
});