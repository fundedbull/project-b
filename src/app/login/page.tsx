import { Text } from "@ui/Text";
import Link from "next/link";

export default async function Login() {
  return (
    <div className="container mx-auto mb-32 mt-32 flex h-screen flex-col items-center justify-center gap-4 md:mb-0 md:mt-0">
      <Text intent={"heading"} size={"extra"}>
        Let&apos;s Create Your Brix
      </Text>
      <form className="flex flex-col gap-4">
        <label className="font-bold text-primary-500" htmlFor="email">
          <Text intent={"heading"}>Email</Text>
        </label>
        <input
          className="w-72 px-2 py-2"
          type="email"
          name="email"
          id="email"
          required
        />
        <label className="font-bold text-primary-500" htmlFor="password">
          <Text intent={"heading"}>Password</Text>
        </label>
        <input
          className="w-72 px-2 py-2"
          type="password"
          name="password"
          id="password"
          required
        />

        <button
          type="submit"
          className="relative h-full p-1 transition duration-300 ease-in-out before:absolute before:-inset-0 before:block before:rounded-full before:bg-gradient-to-r before:from-primary-500 before:to-secondary-500 hover:scale-105 hover:cursor-pointer"
        >
          <div className="relative rounded-full bg-neutral-800 px-2 py-1 text-center font-bold">
            <Text intent={"ui"} size="large">
              Login
            </Text>
          </div>
        </button>

        <div className="flex flex-row justify-between">
          <Text>Don&apos;t have an account?</Text>
          <Link className="text-lg text-secondary-400 underline" href="/signup">
            <Text>Signup</Text>
          </Link>
        </div>
      </form>
      {/* <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {message && (
          <>
            <Text intent={"ui"}>{message}</Text>
          </>
        )}
      </div> */}
    </div>
  );
}
