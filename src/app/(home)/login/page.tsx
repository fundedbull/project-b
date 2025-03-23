import Link from "next/link";
import Image from "next/image";
import logo from "/public/brix_logo.png";
import { JetBrains_Mono, Inter } from "next/font/google";

const jb_mono = JetBrains_Mono({
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

const Login = () => {
  return (
    <div
      className={`${inter.className} min-w-screen min-h-screen flex items-center justify-center`}
    >
      <div className="container mx-auto flex h-screen flex-col items-center justify-center gap-4">
        <h1 className={`${jb_mono.className} text-5xl font-bold text-blue`}>
          Log in
        </h1>

        <form method="post" className="flex flex-col gap-2">
          <label
            className={`${jb_mono.className} px-1 text-lg font-bold text-blue`}
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-72 px-2 py-2"
            type="email"
            name="email"
            id="email"
            required
          />

          <label
            className={`${jb_mono.className} px-1 text-lg font-bold text-blue`}
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-72 px-2 py-2"
            type="password"
            name="password"
            id="password"
            required
          />

          <Link href="/forgot-password" className="text-blue underline">
            Forgot password?
          </Link>

          <button
            className={`${jb_mono.className} bg-orange px-4 py-3 text-lg font-semibold text-white`}
            type="submit"
          >
            Log in
          </button>

          <div className="flex flex-row justify-between">
            <p className={` text-lg text-blue`}>Don&apos;t have an account?</p>
            <Link className={` text-lg text-blue underline`} href="/signup">
              Sign up
            </Link>
          </div>

          {/* If you want to show an error message, you can add a condition here */}
          {/* Example:
        {errorMessage && (
          <div className="shake max-w-72 bg-secondary-200 p-4 font-bold text-white">
            <p>{errorMessage}</p>
          </div>
        )}
        */}
        </form>

        <Link href="/">
          <Image src={logo} alt="Funded Bull Logo" width={150} height={150} />
        </Link>
      </div>
    </div>
  );
};

export default Login;
