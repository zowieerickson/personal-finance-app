import AuthLayout from "../../components/auth/AuthLayout";
import AuthSubmit from "../../components/auth/AuthSubmit";

export default function LoginPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const name = formData.get("name");
    const password = formData.get("password");
    console.log({ email, name, password });

    const response = await fetch("http://localhost:5173/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    console.log("response", response);
    console.log("formData", [...formData.entries()]);
    // const data = await response.json();
    // console.log("Backend response:", data);
  };

  return (
    <AuthLayout>
      <section className="h-full flex items-center justify-center w-full lg-basis-[60%] px-4">
        <div className="bg-white w-full px-5 py-6 md:p-[32px] sm:w-[560px] rounded-xl">
          <form onSubmit={handleSubmit} className="flex flex-col pb-8">
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
          <p className="text-center text-[#696868]">
            Already have an account?
            <a
              href="/login"
              className="font-bold underline text-[#201F24] ml-2"
            >
              Login
            </a>
          </p>
        </div>
      </section>
    </AuthLayout>
  );
}
