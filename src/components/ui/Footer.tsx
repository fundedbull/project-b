import Link from "next/link";
import Image from "next/image";
import brix_logo from "/public/brix_logo.png";
import youtube_logo from "/public/youtube.png";
import reddit_logo from "/public/reddit.png";
import instagram_logo from "/public/instagram.png";
import linkedin_logo from "/public/linkedin.png";

export default function Footerbar() {
  return (
    <footer className="container mx-auto mt-10">
      <div className="ml-4 flex flex-col border-b-2 border-t-2 border-gray-800 pt-8 text-left text-2xl font-medium text-white md:ml-0 md:flex-row md:justify-between md:pt-4 md:text-xl">
        <div className="uppercase">
          <h1 className="text-4xl font-bold text-blue">Pages</h1>
          <ul className="pt-8 md:pt-4">
            <li className="pb-2">
              <Link href="/" className="hover:text-orange">
                HOME
              </Link>
            </li>
            {/* <li className="pb-2">
              <Link href="/about" className="hover:text-pink-500">
                ABOUT
              </Link>
            </li> */}
            <li className="pb-2">
              <Link href="/pricing" className="hover:text-orange">
                PRICING
              </Link>
            </li>
            <li className="pb-2">
              <Link href="/faqs" className="hover:text-orange">
                FAQS
              </Link>
            </li>
            <li className="pb-2">
              <Link href="/reviews" className="hover:text-orange">
                REVIEWS
              </Link>
            </li>
          </ul>
        </div>
        <div className="uppercase">
          <h1 className="pt-8 text-4xl font-bold text-blue md:pt-0">
            Utility Pages
          </h1>
          <ul className="pt-8 md:pt-4">
            <li className="pb-2">
              <Link href="/terms-of-service" className="hover:text-orange">
                TERMS OF SERVICE
              </Link>
            </li>
            <li className="pb-2">
              <Link href="/privacy-policy" className="hover:text-orange">
                PRIVACY POLICY
              </Link>
            </li>
            {/* <li className="pb-2">
              <Link to="/" className="hover:text-pink-500">
                404 NOT FOUND
              </Link>
            </li> */}
            <li className="pb-2">
              <Link href="/disclaimer" className="hover:text-orange">
                DISCLAIMER
              </Link>
            </li>
            <li className="pb-2">
              <Link href="/refund-policy" className="hover:text-orange">
                refund policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-16 md:mb-0">
          <h1 className="pt-8 text-4xl font-bold text-blue md:pt-0">
            Subscribe to our Newsletter
          </h1>
          <p className="text-md pt-8 text-white md:pt-4">
            Be apart of the BRIX family by entering your email down below.
          </p>
          <div className="mb-4 mt-4 w-fit">
            <form className="flex flex-col gap-4 md:flex-row">
              <input
                className="rounded-full bg-neutral-700 px-4 py-3 font-semibold outline-none"
                placeholder="Your email address"
              />
              <div className="button-primary-gradient h-full">
                <button className="w-full rounded-full bg-neutral-800 px-14 py-3 text-lg font-bold text-secondary-600">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div className="flex flex-row gap-4 text-center font-icons text-sm text-white">
            {/* <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/people/Funded-Bull/61559437496052/"
              className="bg-icons flex h-10 w-10 items-center justify-center rounded-lg"
            >
              <Image className="self-center" width="22" height="22" src={facebook_logo} alt="Facebook Logo" />
            </Link> */}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/brixpage?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr"
              className="bg-icons flex h-10 w-10 items-center justify-center rounded-lg"
            >
              <Image
                className="self-center"
                width="22"
                height="22"
                src={instagram_logo}
                alt="Instagram Logo"
              />
            </Link>
            {/* <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/brtmcom/"
              className="bg-icons flex h-10 w-10 items-center justify-center rounded-lg"
            >
              
            </Link> */}

            <Link
              href="https://www.linkedin.com/in/michael-rosas-32ba71330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              className="bg-icons flex h-10 w-10 items-center justify-center rounded-lg"
            >
              <Image
                className="self-center"
                width="24"
                height="24"
                src={linkedin_logo}
                alt="LinkedIn Logo"
              />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://youtube.com/@brixpage?si=pzWFW4yHFNdg5UVM"
              className="bg-icons flex h-10 w-10 items-center justify-center rounded-lg"
            >
              <Image
                className="self-center"
                width="24"
                height="24"
                src={youtube_logo}
                alt="Youtube Logo"
              />
            </Link>
            {/* The Reddit will hear about this */}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.reddit.com/r/BRIXPAGE/s/OYpUDHHNE4"
              className="bg-icons flex h-10 w-10 items-center justify-center rounded-lg"
            >
              <Image
                className="self-center"
                width="24"
                height="24"
                src={reddit_logo}
                alt="Reddit Logo"
              />
            </Link>
            {/* <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://discord.com/invite/8VdmmKsfja"
              className="bg-icons flex h-10 w-10 items-center justify-center rounded-lg"
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 127.14 96.36"
              >
                <path
                  fill="#fff"
                  d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
                />
              </svg>
            </Link> */}
            {/* <a
              href="tel:4423090694"
              className="bg-icons flex h-10 w-10 items-center justify-center rounded-lg"
            >
              
            </Link> */}
          </div>
        </div>
      </div>
      <div className="ml-4 flex flex-col items-center justify-between py-8 md:ml-0 md:flex-row">
        <Link href="/">
          <Image
            className="self-center"
            width="64"
            height="64"
            src={brix_logo}
            alt="BRIX Logo"
          />
        </Link>

        <p className="mt-4 text-left font-medium text-neutral-400 md:my-0">
          Copyright © 2025 BRIX | BRIX PAGE LLC
        </p>
      </div>
    </footer>
  );
}
