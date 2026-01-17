import { useState } from "react";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthSubmit from "../../components/auth/AuthSubmit";
import { signIn } from "../../services/auth";
import { useNavigate } from "react-router";
import SvgIconBillDue from "../../components/icons/IconBillDue";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  function handleChangeEmail(e) {
    console.log(e.currentTarget.value);
    setEmail(e.currentTarget.value);
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    if (typeof email !== "string" || typeof password !== "string") {
      console.error("invalid form data");
      return;
    }

    try {
      const data = await signIn({ email, password });
      console.log("Success! ", data);
      navigate("/");
    } catch (err) {
      setError(true);
      console.error(error, err);
    }

    console.log({ email, password });
  };

  return (
    <AuthLayout>
      <section className="h-full flex items-center justify-center w-full lg-basis-[60%] px-4">
        <div className="bg-white w-full px-5 py-6 md:p-[32px] sm:w-[560px] rounded-xl">
          <form onSubmit={handleLogin} className="flex flex-col pb-8">
            <h2 className="pb-[32px] font-bold text-[32px]">Login</h2>
            <div className="mb-2">
              <div className="mb-4">
                <label className="flex flex-col">
                  <span className="text-xs font-bold mb-2 text-stone-500">
                    Email
                  </span>
                  <span className="flex items-center relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="Placeholder"
                      onChange={(e) => setEmail(e.currentTarget.value)}
                      className={`w-full pl-5 py-3 rounded-md border ${
                        error ? "border-red " : "border-stone-400"
                      }`}
                      required
                    ></input>
                    {error && <SvgIconBillDue className="absolute right-6" />}
                  </span>
                </label>
              </div>
              <div>
                <label htmlFor="password" className="flex flex-col">
                  <span className="text-xs font-bold mb-2 text-stone-500">
                    Password
                  </span>
                  <span className="flex items-center relative">
                    <input
                      type="password"
                      name="password"
                      placeholder="Placeholder"
                      onChange={(e) => setPassword(e.currentTarget.value)}
                      className={`w-full pl-5 py-3 rounded-md border  ${
                        error ? "border-red " : "border-stone-400"
                      }`}
                      required
                    ></input>
                    {error && <SvgIconBillDue className="absolute right-6" />}
                  </span>
                </label>
              </div>

              <span className="text-xs text-red">
                {error ? "Invalid username or password." : "\u00A0"}
              </span>
            </div>
            <AuthSubmit disabled={!(email.length > 0 && password.length > 0)}>
              Login
            </AuthSubmit>
          </form>
          <p className="text-center text-grey-500">
            Need to create an account?
            <a
              href="/signup"
              className="font-bold underline text-grey-900 ml-2"
            >
              Sign&nbsp;Up
            </a>
          </p>
        </div>
      </section>
    </AuthLayout>
  );
}
