document.addEventListener('DOMContentLoaded', () => {

    const loginForm = document.getElementById('loginForm');
  
  
    loginForm.addEventListener('submit', (event) => {
  
      event.preventDefault();
  
  
      const email = document.getElementById('email').value;
  
      const password = document.getElementById('password').value;
  
  
      // Perform your login logic here
  
  
      console.log(`Email: ${email}`);
  
      console.log(`Password: ${password}`);
  
    });
  
  });