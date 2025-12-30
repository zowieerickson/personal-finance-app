import { useNavigate } from "react-router";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthSubmit from "../../components/auth/AuthSubmit";
import { supabase } from "../../lib/supabaseClient";
import { signUp } from "../../services/auth";

export default function SignUp() {
  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      // Sign up
      const data = await signUp({ email, password }); // Supabase Auth only accepts email and password for sign up
      console.log("Signed up user: ", data.user);

      // Update profile
      if (data.user) {
        await supabase.from("profiles").update({ name }).eq("id", data.user.id);
        navigate("/");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AuthLayout>
      <section className="h-full flex items-center justify-center w-full lg-basis-[60%] px-4">
        <div className="bg-white w-full px-5 py-6 md:p-[32px] sm:w-[560px] rounded-xl">
          <form onSubmit={handleSignUp} className="flex flex-col pb-8">
            <h2 className="pb-[32px] font-bold text-[32px]">Sign Up</h2>
            <div className="mb-8">
              <div className="mb-4">
                <label className="flex flex-col">
                  <span className="text-xs font-bold mb-2 text-stone-500">
                    Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Placeholder"
                    className="pl-5 py-3 rounded-md border border-stone-400"
                    required
                  ></input>
                </label>
              </div>
              <div className="mb-4">
                <label className="flex flex-col">
                  <span className="text-xs font-bold mb-2 text-stone-500">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Placeholder"
                    className="pl-5 py-3 rounded-md border border-stone-400"
                    required
                  ></input>
                </label>
              </div>
              <div>
                <label htmlFor="password" className="flex flex-col">
                  <span className="text-xs font-bold mb-2 text-stone-500">
                    Password
                  </span>
                  <input
                    type="password"
                    name="password"
                    placeholder="Placeholder"
                    className="pl-5 py-3 rounded-md border border-stone-400"
                    required
                  ></input>
                </label>
              </div>
            </div>
            <AuthSubmit>Create Account</AuthSubmit>
          </form>
          <p className="text-center text-grey-500">
            Already have an account?
            <a href="/login" className="font-bold underline text-grey-900 ml-2">
              Login
            </a>
          </p>
        </div>
      </section>
    </AuthLayout>
  );
}
