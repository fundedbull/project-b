import Footerbar from "@ui/Footer";
import Navbar from "@ui/Navbar";
import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Tos() {
  return (
    <>
      <Navbar />
      <div className={`${inter.className} max-w-4xl mx-auto p-6`}>
        <h1
          className={`${jetBrainsMono.className} text-3xl font-bold text-center mb-8`}
        >
          Terms of Service
        </h1>
        <p className="text-lg mb-6">
          <strong>BRIX PAGE LLC</strong>
          <br />
          Last Updated: March 4, 2025
        </p>
        <p className="mb-6">
          Welcome to BRIX PAGE LLC ("BRIX PAGE," "we," "us," or "our"). By
          accessing or using our website (www.brixpage.com) and related services
          (collectively, the "Service"), you agree to be bound by these Terms of
          Service ("Terms"). If you do not agree, you must discontinue use of
          the Service immediately.
        </p>

        <h2
          className={`${jetBrainsMono.className} text-2xl font-semibold text-blue mt-6`}
        >
          1. Overview of Services
        </h2>
        <p className="mb-6">
          BRIX PAGE is a Social Commerce Platform for Entrepreneurs and Creators
          that allows users to:
          <ul className="list-disc pl-6 mt-2">
            <li>Set up a Store Page</li>
            <li>List products on our Marketplace</li>
            <li>Accept payments</li>
          </ul>
          BRIX PAGE provides various features tailored to digital entrepreneurs,
          including networking tools, promotional options, and educational
          resources. BRIX PAGE does not directly sell products and is not
          responsible for the content, quality, legality, or delivery of
          products sold by Sellers. All transactions are strictly between Buyers
          and Sellers.
        </p>

        <p className="mb-6">
          <strong>Ownership Notice:</strong> BRIX PAGE retains full ownership of
          every BRIX PAGE created on the platform. Users do not own their BRIX
          PAGE, and we reserve the right to ban, restrict, remove, or delete any
          user profile, progress, or BRIX PAGE at any time, without consent or
          warning.
        </p>

        <h2
          className={`${jetBrainsMono.className} text-2xl font-semibold text-blue mt-6`}
        >
          2. User-Generated Content
        </h2>
        <p className="mb-6">
          User-generated content (e.g., reviews, forms, emails, phone numbers,
          and analytics data) does not belong to users. BRIX PAGE LLC owns all
          user-generated content and reserves the right to ban, remove,
          restrict, or delete any content at its sole discretion.
        </p>

        <h2
          className={`${jetBrainsMono.className} text-2xl font-semibold text-blue mt-6`}
        >
          3. Subscription Plans & Features
        </h2>
        <p className="mb-6">
          BRIX PAGE offers three tiers of service:
          <ul className="list-disc pl-6 mt-2">
            <li>
              <strong>Standard (Free):</strong> Basic platform features,
              marketplace access
            </li>
            <li>
              <strong>Pro ($7.99/month):</strong> Additional tools and features
            </li>
            <li>
              <strong>Pro+ ($14.99/month):</strong> Full feature set, including
              advanced analytics and automation tools
            </li>
          </ul>
          <strong>Modification Notice:</strong> BRIX PAGE reserves the right to
          modify these features or pricing at any time.
        </p>

        <h2
          className={`${jetBrainsMono.className} text-2xl font-semibold text-blue mt-6`}
        >
          4. Points Reward System & Redemptions
        </h2>
        <p className="mb-6">
          Users can earn BRIX PAGE Points through:
          <ul className="list-disc pl-6 mt-2">
            <li>Spending real money/currency</li>
            <li>Completing achievements</li>
            <li>Completing bounties</li>
          </ul>
          Note: Points do not hold real-world monetary value, cannot be
          exchanged for cash, and may expire if unused within a specified
          period.
        </p>

        {/* Add similar sections for the rest of the content */}

        <h2
          className={`${jetBrainsMono.className} text-2xl font-semibold text-blue mt-6`}
        >
          23. Contact Information
        </h2>
        <p className="mb-6">
          Email:{" "}
          <a href="mailto:support@brixpage.com" className="text-blue-600">
            support@brixpage.com
          </a>
          <br />
          Address: 16580 El Evado Rd, Victorville, CA 92394
        </p>

        <p className="mt-6">
          BY USING BRIX PAGE, YOU AGREE TO THESE TERMS. If you do not accept
          them, please discontinue use of the Service immediately.
        </p>
      </div>
      <Footerbar />
    </>
  );
}
