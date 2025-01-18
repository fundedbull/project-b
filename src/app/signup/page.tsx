"use client";
import { Text } from "@ui/Text";
import Link from "next/link";
import { useActionState } from "react";
import { signUp } from "@/app/lib/action";

export default function SignUp() {
  const [message, formAction] = useActionState(signUp, undefined);
  return (
    <div className="container mx-auto mb-32 mt-32 flex h-screen flex-col items-center justify-center gap-4 md:mb-0 md:mt-0">
      <Text intent={"heading"} size={"extra"}>
        Let&apos;s Create Your Brix
      </Text>
      <form action={formAction} className="flex flex-col gap-2">
        <label className="font-bold text-primary-400" htmlFor="email">
          <Text intent={"heading"}>Email</Text>
        </label>
        <input
          className="w-72 px-2 py-2"
          type="email"
          name="email"
          id="email"
          required
        />
        <label className="font-bold text-primary-400" htmlFor="username">
          <Text intent={"heading"}>Name</Text>
        </label>
        <input
          className="w-72 px-2 py-2"
          name="username"
          id="username"
          required
        />
        <label className="font-bold text-primary-400" htmlFor="password">
          <Text intent={"heading"}>Password</Text>
        </label>
        <input
          className="w-72 px-2 py-2"
          type="password"
          name="password"
          id="password"
          required
        />
        <div className="flex flex-col gap-4 max-w-72">
          <div className="flex gap-1 items-baseline">
            <input type="checkbox" id="tos" name="tos" required />
            <label
              className="text-wrap px-1 text-lg font-semibold text-primary-400"
              htmlFor="tos"
            >
              <Text>
                By creating an account, I agree to this website&#39;s{" "}
                <a
                  href="/privacy"
                  className="text-white underline hover:text-secondary-100"
                >
                  privacy policy
                </a>
                ,{" "}
                <a
                  className="text-white underline hover:text-secondary-100"
                  href="/tos"
                >
                  terms of service
                </a>
                , and{" "}
                <a
                  className="text-white underline hover:text-secondary-100"
                  href="/disclaimer"
                >
                  disclaimer
                </a>
              </Text>
            </label>
          </div>

          <div className="flex gap-1">
            <input type="checkbox" id="me" name="me" required />
            <label className="font-semibold text-primary-400" htmlFor="me">
              <Text>I consent to receive marketing emails.</Text>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="relative h-full p-1 transition duration-300 ease-in-out before:absolute before:-inset-0 before:block before:rounded-full before:bg-gradient-to-r before:from-primary-500 before:to-secondary-500 hover:scale-105 hover:cursor-pointer"
        >
          <div className="relative rounded-full bg-neutral-800 px-2 py-1 text-center font-bold">
            <Text intent={"ui"} size="large">
              Signup
            </Text>
          </div>
        </button>

        <div className="flex flex-row justify-between">
          <Text>Already have an account?</Text>
          <Link className="text-lg text-secondary-400 underline" href="/login">
            <Text>Login</Text>
          </Link>
        </div>
      </form>
      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {message && (
          <>
            <Text intent={"ui"}>{message}</Text>
          </>
        )}
      </div>
    </div>
  );
}
