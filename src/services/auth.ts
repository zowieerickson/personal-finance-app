import { supabase } from "../lib/supabase";

interface SignUpParams {
  name: string;
  email: string;
  password: string;
}

export async function signUp({ name, email, password }: SignUpParams) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw error;
  }

  // Insert profile row
  const { error: profileError } = await supabase.from("profiles").insert({
    id: data.user?.id, // link to auth users
    name,
  });

  return data;
}
