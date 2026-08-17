import { supabase } from '../config/supabase.js';

/**
 * Cadastra um novo usuário no Supabase Auth.
 * O Trigger do banco criará o perfil automaticamente na tabela 'profiles'.
 */
export async function signUpUser(email, password, fullName) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
    },
  });

  if (error) throw new Error(error.message);
  return data;
}

/**
 * Autentica um usuário existente com e-mail e senha.
 */
export async function signInUser(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  return data;
}

/**
 * Encerra a sessão ativa do usuário.
 */
export async function signOutUser() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

/**
 * Retorna o usuário logado atualmente na sessão.
 */
export async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}