import { signInUser, signUpUser } from '../../services/authService.js';

let isSignUpMode = false;

export function initAuthView(onAuthSuccess) {
  const form = document.getElementById('auth-form');
  const toggleBtn = document.getElementById('toggle-auth-btn');
  const toggleText = document.getElementById('toggle-auth-text');
  const title = document.getElementById('auth-title');
  const submitBtn = document.getElementById('btn-auth-submit');
  const nameGroup = document.getElementById('name-group');
  const errorText = document.getElementById('auth-error');

  // Alternar entre Login e Cadastro
  toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    isSignUpMode = !isSignUpMode;
    
    errorText.style.display = 'none';
    if (isSignUpMode) {
      title.textContent = 'Criar Conta no MetaFinance';
      submitBtn.textContent = 'Cadastrar';
      toggleText.textContent = 'Já possui uma conta?';
      toggleBtn.textContent = 'Entrar';
      nameGroup.style.display = 'flex';
    } else {
      title.textContent = 'Entrar no MetaFinance';
      submitBtn.textContent = 'Entrar';
      toggleText.textContent = 'Não tem uma conta?';
      toggleBtn.textContent = 'Cadastre-se';
      nameGroup.style.display = 'none';
    }
  });

  // Submit do formulário
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    errorText.style.display = 'none';
    submitBtn.disabled = true;

    const email = document.getElementById('auth-email').value;
    const password = document.getElementById('auth-password').value;
    const fullName = document.getElementById('auth-name').value;

    try {
      if (isSignUpMode) {
        await signUpUser(email, password, fullName);
      } else {
        await signInUser(email, password);
      }
      
      document.getElementById('auth-modal').style.display = 'none';
      if (onAuthSuccess) onAuthSuccess();
    } catch (err) {
      errorText.textContent = err.message || 'Ocorreu um erro ao autenticar.';
      errorText.style.display = 'block';
    } finally {
      submitBtn.disabled = false;
    }
  });
}