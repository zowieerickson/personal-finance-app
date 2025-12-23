import { supabase } from "../lib/supabaseClient";

interface AuthCredentials {
  email: string;
  password: string;
}

export async function signUp({ email, password }: AuthCredentials) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw error;
  }

  console.log(data);
  return data;
}

export async function signIn({ email, password }: AuthCredentials) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw error;
  }

  console.log("Sign in data: ", data);
  return data;
}
