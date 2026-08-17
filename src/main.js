import { getCurrentUser, signOutUser } from './services/authService.js';
import { initAuthView } from './ui/views/authView.js';

async function initApp() {
  const user = await getCurrentUser();
  const authModal = document.getElementById('auth-modal');
  const logoutBtn = document.getElementById('btn-logout');

  if (!user) {
    authModal.style.display = 'flex';
    initAuthView(() => initApp());
  } else {
    authModal.style.display = 'none';
    console.log('Usuário autenticado:', user.email);
    // Próximo passo: carregar dados das transações e saldo
  }

  logoutBtn.addEventListener('click', async () => {
    await signOutUser();
    window.location.reload();
  });
}

// Inicializa a aplicação quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initApp);