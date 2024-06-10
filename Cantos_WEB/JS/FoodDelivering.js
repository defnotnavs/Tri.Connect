document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const food = document.getElementById('food').value;
    const quantity = document.getElementById('quantity').value;
  
    document.getElementById('name').value = '';
    document.getElementById('address').value = '';
    document.getElementById('food').value = '';
    document.getElementById('quantity').value = '';
  
   
  });