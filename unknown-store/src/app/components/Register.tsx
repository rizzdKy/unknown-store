import Link from "next/link";
import ClientFlashComponent from "./ClientFlashComponent";
import { redirect } from "next/navigation";

const Register = () => {
  const handleFormAction = async (formData: FormData) => {
    "use server";

    type ResponseAPIType<T> = {
      statusCode: Number;
      message?: String;
      data?: T;
      error?: string;
    };

    const response = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseJson: ResponseAPIType<unknown> = await response.json();
    if (!response.ok) {
      let message = responseJson.error ?? "Something went wrong!";

      return redirect(`/register?error=${message}`);
    }

    // Setelah register, redirect ke halaman login
    return redirect("/login");
  };

  return (
    <div className="bg-gray-950 h-screen w-full py-[40px]">
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-gray-900 rounded-lg shadow-md dark:bg-gray-800 py-5">
        <div className="px-6 py-4">
          <div className="flex justify-center mx-auto">
            <Link href={"/"}>
              <img
                className="w-auto h-7 sm:h-8"
                src="/tempimg/asus-rog-1.svg"
                alt="LOGO"
              />
            </Link>
          </div>
          <ClientFlashComponent />
          <h3 className="mt-3 text-xl font-medium text-center text-white dark:text-gray-200">
            Sign up
          </h3>
          <form action={handleFormAction}>
            <div className="w-full mt-4">
              <input
                name="name"
                className="block w-full px-4 py-2 mt-2 text-gray-200 placeholder-white bg-gray-900 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                placeholder="Name"
                aria-label="Email Address"
              />
            </div>
            <div className="w-full mt-4">
              <input
                name="username"
                className="block w-full px-4 py-2 mt-2 text-gray-200 placeholder-white bg-gray-900 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                placeholder="Username"
                aria-label="Email Address"
              />
            </div>
            <div className="w-full mt-4">
              <input
                name="email"
                className="block w-full px-4 py-2 mt-2 text-gray-200 placeholder-white bg-gray-900 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
              />
            </div>
            <div className="w-full mt-4">
              <input
                name="password"
                className="block w-full px-4 py-2 mt-2 text-gray-200 placeholder-white bg-gray-900 border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                placeholder="Password"
                aria-label="Password"
              />
            </div>
            <div className="flex items-center justify-center mt-4">
              <button className="px-20 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Continue
              </button>
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center py-4 text-center bg-gray-900 dark:bg-gray-700">
          <span className="text-sm text-gray-600 dark:text-gray-200">
            Already have an account?{" "}
          </span>
          <Link
            href="/login"
            className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
