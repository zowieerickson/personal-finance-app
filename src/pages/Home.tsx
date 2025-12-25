import { useState, useEffect } from "react";
import { getProfile } from "../services/profile";
import { supabase } from "../lib/supabaseClient";

export default function Home() {
  const [name, setName] = useState("");

  useEffect(() => {
    const loadProfile = async () => {
      let nameHolder;
      let username;
      try {
        nameHolder = await supabase.auth.getUser();
        username = await getProfile(nameHolder.data.user.id);
        setName(username.name);
      } catch (err) {
        console.error(err);
      }
    };

    loadProfile();
  }, []);

  const findName = async () => {};

  findName();

  return (
    <>
      <h1>home page</h1>
      <p>Hello {name}</p>
    </>
  );
}
