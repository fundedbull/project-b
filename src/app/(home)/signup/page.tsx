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

export default async function Login() {
  return (
    <div
      className={`${inter.className} min-w-screen min-h-screen flex items-center justify-center`}
    >
      <div className="container mx-auto mb-32 mt-32 flex h-screen flex-col items-center justify-center gap-4 md:mb-0 md:mt-0">
        <h1 className={`${jb_mono.className} text-5xl font-bold text-blue`}>
          Sign up
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
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="w-72 px-2 py-2"
            type="text"
            name="name"
            id="name"
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

          <div className="max-w-72">
            <input type="checkbox" id="tos" name="tos" value="tos" required />
            <label
              className={`text-wrap px-1 text-lg font-semibold text-neutral-300`}
              htmlFor="tos"
            >
              By creating an account, I agree to this website&#39;s{" "}
              <a
                href="/privacy"
                className="text-white underline hover:text-blue"
              >
                privacy policy
              </a>
              ,{" "}
              <a className="text-white underline hover:text-blue" href="/tos">
                terms of service
              </a>
              , and{" "}
              <a
                className="text-white underline hover:text-blue"
                href="/disclaimer"
              >
                disclaimer
              </a>
            </label>
            <br />

            <input type="checkbox" id="me" name="me" value="me" required />
            <label
              className={`${jb_mono.className} text-wrap px-1 text-lg font-semibold text-neutral-300`}
              htmlFor="me"
            >
              I consent to receive marketing emails.
            </label>
            <br />
          </div>

          <button
            className={`${jb_mono.className} bg-orange px-4 py-3 text-lg font-semibold text-white`}
            type="submit"
          >
            Sign Up
          </button>

          <div className="flex flex-row justify-between">
            <p className={` text-lg text-blue`}>Already have an account?</p>
            <Link className={` text-lg text-blue underline`} href="/login">
              Login
            </Link>
          </div>
        </form>

        <Link href="/">
          <Image src={logo} alt="Funded Bull Logo" width={150} height={150} />
        </Link>
      </div>
    </div>
  );
}
