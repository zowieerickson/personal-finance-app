import AuthLayout from "../../components/auth/AuthLayout";
import AuthSubmit from "../../components/auth/AuthSubmit";
import { signIn } from "../../services/auth";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();

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
      console.error(err);
    }

    console.log({ email, password });
  };

  return (
    <AuthLayout>
      <section className="h-full flex items-center justify-center w-full lg-basis-[60%] px-4">
        <div className="bg-white w-full px-5 py-6 md:p-[32px] sm:w-[560px] rounded-xl">
          <form onSubmit={handleLogin} className="flex flex-col pb-8">
            <h2 className="pb-[32px] font-bold text-[32px]">Login</h2>
            <div className="mb-8">
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
            <AuthSubmit>Login</AuthSubmit>
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
