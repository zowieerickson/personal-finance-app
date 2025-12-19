import { useState } from "react";
import AuthLayout from "../../components/auth/AuthLayout";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const payload = {
      password,
      email,
    };

    const response = await fetch("http://localhost:5173/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    // console.log(response);
    console.log(payload);
    // const data = await response.json();
    // console.log("Backend response:", data);
  };

  return (
    <AuthLayout>
      <section className="h-full flex items-center justify-center w-full lg-basis-[60%] px-4">
        <div className="bg-white w-full px-5 py-6 md:p-[32px] sm:w-[560px] rounded-xl">
          <form onSubmit={handleSubmit} className="flex flex-col pb-8">
            <h2 className="pb-[32px] font-bold text-[32px]">Login</h2>
            <div className="mb-8">
              <div className="mb-4">
                <label className="flex flex-col">
                  <span className="text-xs font-bold mb-2 text-stone-500">
                    Email
                  </span>
                  <input
                    type="email"
                    value={email}
                    placeholder="Placeholder"
                    className="pl-5 py-3 rounded-md border border-stone-400"
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    placeholder="Placeholder"
                    className="pl-5 py-3 rounded-md border border-stone-400"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  ></input>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="text-sm font-bold text-white bg-[#201F24] py-4 rounded-md"
            >
              Login
            </button>
          </form>
          <p className="text-center text-[#696868]">
            Need to create an account?
            <a
              href="/signup"
              className="font-bold underline text-[#201F24] ml-2"
            >
              Sign&nbsp;Up
            </a>
          </p>
        </div>
      </section>
    </AuthLayout>
  );
}
