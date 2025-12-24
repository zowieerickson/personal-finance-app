import { supabase } from "../lib/supabaseClient";

export async function getProfile(userId: string) {
  const { data, error } = await supabase
    .from("profiles")
    .select("name")
    .eq("id", userId)
    .single();

  if (error) {
    throw error;
  }

  return data;
}
