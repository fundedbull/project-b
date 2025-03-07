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
          Welcome to BRIX PAGE LLC (&quot;BRIX PAGE,&quot; &quot;we,&quot;
          &quot;us,&quot; or &quot;our&quot;). By accessing or using our website
          (www.brixpage.com) and related services (collectively, the
          &quot;Service&quot;), you agree to be bound by these Terms of Service
          (&quot;Terms&quot;). If you do not agree, you must discontinue use of
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
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>Set up a Store Page</li>
          <li>List products on our Marketplace</li>
          <li>Accept payments</li>
        </ul>
        <p className="mb-6">
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
        <p className="mb-6">BRIX PAGE offers three tiers of service:</p>
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
        <p className="mb-6">
          <strong>Modification Notice:</strong> BRIX PAGE reserves the right to
          modify these features or pricing at any time.
        </p>

        <h2
          className={`${jetBrainsMono.className} text-2xl font-semibold text-blue mt-6`}
        >
          4. Points Reward System & Redemptions
        </h2>
        <p className="mb-6">Users can earn BRIX PAGE Points through:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Spending real money/currency</li>
          <li>Completing achievements</li>
          <li>Completing bounties</li>
        </ul>
        <p className="mb-6">
          Note: Points do not hold real-world monetary value, cannot be
          exchanged for cash, and may expire if unused within a specified
          period.
        </p>

        <h2
          className={`${jetBrainsMono.className} text-2xl font-semibold text-blue mt-6`}
        >
          5. Boosted BRIX (Advertising System)
        </h2>
        <p className="mb-6">
          Users can promote their store on the Marketplace with Boosted BRIX:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>$8 for 1 day</li>
          <li>$17 for 3 days</li>
          <li>$39 for 7 days</li>
        </ul>
        <p className="mb-6">
          Disclaimer: BRIX PAGE does not guarantee increased sales, traffic, or
          visibility through Boosted BRIX. Performance depends on Marketplace
          activity and demand.
        </p>

        <h2
          className={`${jetBrainsMono.className} text-2xl font-semibold text-blue mt-6`}
        >
          6. Networking Feature for Creators
        </h2>
        <p className="mb-6">
          The Networking Feature allows creators to post job requests and
          connect with other professionals. BRIX PAGE is not responsible for the
          outcome of collaborations. Users negotiate agreements at their own
          risk.
        </p>

        <h2
          className={`${jetBrainsMono.className} text-2xl font-semibold text-blue mt-6`}
        >
          7. Learn Feature (Educational Content)
        </h2>
        <p className="mb-6">
          BRIX PAGE offers courses, guides, videos, tutorials, and eBooks.
          Educational content is opinion-based and does not guarantee financial
          success or business growth.
        </p>

        <h2
          className={`${jetBrainsMono.className} text-2xl font-semibold text-blue mt-6`}
        >
          8. Dashboard & User Analytics
        </h2>
        <p className="mb-6">
          Users are responsible for monitoring their own transaction data. BRIX
          PAGE does not provide financial or tax advice based on analytics data.
        </p>

        <h2
          className={`${jetBrainsMono.className} text-2xl font-semibold text-blue mt-6`}
        >
          9. Payment Terms & Tax Compliance
        </h2>
        <p className="mb-6">
          Payments may be held in escrow until conditions are met. Sellers are
          responsible for collecting and remitting applicable sales taxes.
          Unauthorized chargebacks may result in account suspension. Accepted
          payment methods: Visa, Mastercard, Square, Stripe, PayPal.
        </p>

        <h2
          className={`${jetBrainsMono.className} text-2xl font-semibold text-blue mt-6`}
        >
          10. Third-Party Integrations & Liability
        </h2>
        <p className="mb-6">
          BRIX PAGE integrates with third-party payment processors and social
          media platforms. We are not responsible for user activities on these
          third-party platforms.
        </p>

        <h2
          className={`${jetBrainsMono.className} text-2xl font-semibold text-blue mt-6`}
        >
          11. Appeal Process
        </h2>
        <p className="mb-6">
          Users may appeal decisions within 14 to 30 days by providing detailed
          evidence (e.g., screenshots, documents, bank statements, chats). All
          disputes will be handled by National Arbitration and Mediation (NAM).
        </p>

        <h2
          className={`${jetBrainsMono.className} text-2xl font-semibold text-blue mt-6`}
        >
          12. Liability Disclaimer
        </h2>
        <p className="mb-6">
          BRIX PAGE is not liable for indirect damages, loss of business, or
          personal disputes between users.
        </p>

        <h2
          className={`${jetBrainsMono.className} text-2xl font-semibold text-blue mt-6`}
        >
          13. Account Termination & Data Deletion
        </h2>
        <p className="mb-6">
          BRIX PAGE may terminate accounts for violating these Terms. Users may
          request data deletion by submitting a written request. Upon account
          deletion, all user data will be permanently removed within 168
          business hours.
        </p>

        <h2
          className={`${jetBrainsMono.className} text-2xl font-semibold text-blue mt-6`}
        >
          14. Service Disruptions & Billing Errors
        </h2>
        <p className="mb-6">
          No refunds will be issued for service disruptions, billing errors, or
          mistaken purchases.
        </p>

        <h2
          className={`${jetBrainsMono.className} text-2xl font-semibold text-blue mt-6`}
        >
          15. Consumer Protection Compliance
        </h2>
        <p className="mb-6">
          Users must comply with Federal Trade Commission (FTC) guidelines,
          including disclosing paid promotions or endorsements.
        </p>

        <h2
          className={`${jetBrainsMono.className} text-2xl font-semibold text-blue mt-6`}
        >
          16. Children&apos;s Online Privacy Protection Act (COPPA) Compliance
        </h2>
        <p className="mb-6">
          BRIX PAGE is not intended for individuals under 13 years old. Users
          under 18 must have parental or guardian permission.
        </p>

        <h2
          className={`${jetBrainsMono.className} text-2xl font-semibold text-blue mt-6`}
        >
          17. Data Privacy & Protection (CCPA & GDPR Compliance)
        </h2>
        <p className="mb-6">
          California users may request access to, deletion of, or opt out of the
          sale of personal data. BRIX PAGE complies with General Data Protection
          Regulation (GDPR) for EU users.
        </p>

        <h2
          className={`${jetBrainsMono.className} text-2xl font-semibold text-blue mt-6`}
        >
          18. Digital Millennium Copyright Act (DMCA) Policy
        </h2>
        <p className="mb-6">
          If your copyrighted work has been used without authorization, submit a
          DMCA takedown request to: support@brixpage.com.
        </p>

        <h2
          className={`${jetBrainsMono.className} text-2xl font-semibold text-blue mt-6`}
        >
          19. Accessibility (ADA Compliance)
        </h2>
        <p className="mb-6">
          BRIX PAGE is committed to providing an accessible digital environment.
        </p>

        <h2
          className={`${jetBrainsMono.className} text-2xl font-semibold text-blue mt-6`}
        >
          20. Dispute Resolution & Arbitration Clause
        </h2>
        <p className="mb-6">
          Disputes will be resolved through binding arbitration in [State of
          Business Registration]. Users waive their right to a jury trial or
          class action lawsuit.
        </p>

        <h2
          className={`${jetBrainsMono.className} text-2xl font-semibold text-blue mt-6`}
        >
          21. Modifications to Terms
        </h2>
        <p className="mb-6">
          BRIX PAGE may update these Terms at any time. Continued use of the
          Service after updates constitutes acceptance of the revised Terms.
        </p>

        <h2
          className={`${jetBrainsMono.className} text-2xl font-semibold text-blue mt-6`}
        >
          22. Governing Law & Jurisdiction
        </h2>
        <p className="mb-6">
          These Terms are governed by the laws of the State of New York.
        </p>

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
