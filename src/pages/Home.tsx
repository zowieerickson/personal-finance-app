import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { getProfile } from "../services/profile";
import { supabase } from "../lib/supabaseClient";

export default function Home() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const response = await supabase.auth.getUser();
        if (!response.data.user) {
          console.log("no user");
          navigate("/login");
          return;
        }
        const profile = await getProfile(response.data.user.id);
        setName(profile.name);
      } catch (err) {
        console.error(err);
      }
    };

    loadProfile();
  }, []);

  return (
    <>
      <h1>home page</h1>
      <p>Hello {name}</p>
    </>
  );
}
