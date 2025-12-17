import { useState } from "react";
import styles from "./LoginPage.module.css";

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
    <div className={styles.login}>
      <h1>This is the Sign Up page!</h1>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <div className="p-5">
        <div className="flex min-h-screen">
          <div className="hidden md:block basis-[40%] shrink-0 max-w-xl bg-[url('/src/assets/images/illustrations/illustration-authentication.svg')] bg-cover bg-center p-4 rounded-xl">
            <div className={styles.logoOverlay}></div>
          </div>
          <div className="flex basis-[60%] items-center justify-center">
            <div className="bg-white p-[32px] w-[560px] rounded-xl">
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
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
