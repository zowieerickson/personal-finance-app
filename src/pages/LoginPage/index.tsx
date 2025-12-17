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
    <div className="lg:p-5">
      <div className="flex flex-col items-center lg:min-h-screen lg:flex-row">
        <div className="block py-6 bg-black rounded-b-xl flex justify-center w-full lg:flex-col lg:justify-between lg:basis-[40%] lg:shrink-0 lg:max-w-xl lg:min-h-screen  lg:p-10 lg:bg-[url('/src/assets/images/illustrations/illustration-authentication.svg')] lg:bg-cover lg:bg-center lg:rounded-xl">
          <div className="bg-[url('/src/assets/images/logos/logo-large.svg')] w-[122px] h-[22px] w-100%"></div>
          <div className="hidden text-white lg:block">
            <h3 className="text-3xl font-bold pb-6">
              Keep track of your money and&nbsp;save for your&nbsp;future
            </h3>
            <p className="text-sm">
              Personal finance app puts you in control of your spending. Track
              transactions, set budgets, and add to savings pots easily.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center min-h-screen w-full lg-basis-[60%] px-4">
          <div className="bg-white w-full p-[32px] md:w-[560px] rounded-xl">
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
                Sign&nbsp;Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
