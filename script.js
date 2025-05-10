// Aqui você poderá adicionar sua lógica JavaScript
// Exemplo inicial:
document.addEventListener('DOMContentLoaded', () => {
    const signupBtn = document.getElementById('signup-btn');
    const loginBtn = document.getElementById('login-btn');
    const toLoginBtn = document.getElementById('to-login-btn');
    const toSignupBtn = document.getElementById('to-signup-btn');
  
    // Exemplo: alternar entre telas
    toLoginBtn?.addEventListener('click', () => {
      document.getElementById('signup-screen').classList.remove('active');
      document.getElementById('login-screen').classList.add('active');
    });
  
    toSignupBtn?.addEventListener('click', () => {
      document.getElementById('login-screen').classList.remove('active');
      document.getElementById('signup-screen').classList.add('active');
    });
  
    // Adicione mais lógica aqui conforme seu projeto evoluir
  });
  