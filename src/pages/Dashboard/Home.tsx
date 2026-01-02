import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { getProfile } from "../../services/profile";
import { supabase } from "../../lib/supabaseClient";
import DashboardHeader from "./components/DashboardHeader";
import StatCard from "./components/StatCard";

export default function Home() {
  const [name, setName] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
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
      } finally {
        setReady(true);
      }
    };

    loadProfile();
  }, []);

  if (!ready) {
    return null; // or we could add a skeleeton or minimal layout
  }

  return (
    <div>
      <DashboardHeader title="Overview" />
      <div className="flex flex-col gap-3 md:gap-6 md:flex-row">
        <StatCard
          className="bg-grey-900 text-white"
          label="Current Balance"
          value="4,836.00"
        />
        <StatCard label="Income" value="3,814.25" className="bg-white" />
        <StatCard
          label="Current Balance"
          value="1,700.50"
          className="bg-white"
        />
      </div>
      <p>Hello, {name}</p>
    </div>
  );
}
