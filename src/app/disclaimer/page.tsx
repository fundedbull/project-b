// pages/disclaimer.js

import Footerbar from "@ui/Footer";
import Navbar from "@ui/Navbar";
import { JetBrains_Mono, Inter } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Disclaimer() {
  return (
    <>
      <Navbar />
      <div className={`${inter.className} max-w-4xl mx-auto p-6`}>
        <h1
          className={`${jetBrainsMono.className} text-4xl font-bold text-blue mb-8`}
        >
          BRIX PAGE LLC Disclaimer
        </h1>

        <p className=" mb-6">
          The information, products, and services provided by BRIX PAGE LLC
          (“BRIX PAGE,” “we,” “our,” or “us”) on www.brixpage.com and associated
          platforms (collectively, the “Service”) are for informational and
          commercial purposes only. By using our Service, you acknowledge and
          agree to the following disclaimers:
        </p>

        <h2
          className={`${jetBrainsMono.className} text-2xl font-semibold text-blue mb-4`}
        >
          No Warranties or Guarantees
        </h2>
        <p className=" mb-6">
          BRIX PAGE provides the Service on an “AS IS” and “AS AVAILABLE” basis,
          without warranties of any kind, express or implied. We do not
          guarantee the accuracy, completeness, reliability, or availability of
          any content, products, or services provided through our platform.
        </p>

        <h2
          className={`${jetBrainsMono.className} text-2xl font-semibold text-blue mb-4`}
        >
          Third-Party Transactions
        </h2>
        <p className=" mb-6">
          BRIX PAGE acts as a marketplace for digital goods and services but
          does not endorse, verify, or assume liability for any products,
          services, or transactions conducted by third-party sellers. Any
          disputes arising from transactions must be resolved directly between
          buyers and sellers.
        </p>

        <h2
          className={`${jetBrainsMono.className} text-2xl font-semibold text-blue mb-4`}
        >
          Limitation of Liability
        </h2>
        <p className=" mb-6">
          To the fullest extent permitted by law, BRIX PAGE and its affiliates
          shall not be liable for any direct, indirect, incidental,
          consequential, or punitive damages, including but not limited to loss
          of profits, data, or business opportunities, resulting from the use or
          inability to use our Service.
        </p>

        <h2
          className={`${jetBrainsMono.className} text-2xl font-semibold text-blue mb-4`}
        >
          User Responsibility
        </h2>
        <p className=" mb-6">
          Users are solely responsible for the content they post, purchase
          decisions, and compliance with applicable laws when using the Service.
          BRIX PAGE does not guarantee the legality, authenticity, or quality of
          products sold on its platform.
        </p>

        <h2
          className={`${jetBrainsMono.className} text-2xl font-semibold text-blue mb-4`}
        >
          No Professional Advice
        </h2>
        <p className=" mb-6">
          The content provided through BRIX PAGE is not intended as
          professional, financial, legal, or business advice. Users should seek
          professional guidance before making decisions based on information
          obtained from our Service.
        </p>

        <h2
          className={`${jetBrainsMono.className} text-2xl font-semibold text-blue mb-4`}
        >
          Changes to the Disclaimer
        </h2>
        <p className=" mb-6">
          BRIX PAGE reserves the right to modify this Disclaimer at any time
          without prior notice. Continued use of the Service after changes are
          made constitutes acceptance of the updated terms.
        </p>

        <h2
          className={`${jetBrainsMono.className} text-2xl font-semibold text-blue mb-4`}
        >
          Refund Eligibility
        </h2>
        <p className=" mb-6">
          Refunds are only available for certain purchases made to creators on
          BRIX. The eligibility for a refund is determined by the creator.
          Refund requests must be directed to the creator and are subject to
          their individual refund policy.
        </p>

        <h2
          className={`${jetBrainsMono.className} text-2xl font-semibold text-blue mb-4`}
        >
          Non-Refundable Fees
        </h2>
        <p className=" mb-6">
          Unless explicitly stated otherwise in BRIX PAGE LLC’s Terms of
          Service, all fees associated with purchases on our platform are
          non-refundable. This includes any administrative or processing fees
          that may apply.
        </p>

        <h2
          className={`${jetBrainsMono.className} text-2xl font-semibold text-blue mb-4`}
        >
          Refund Requests
        </h2>
        <p className=" mb-6">
          To request a refund, you must sign in to your BRIX account and follow
          the designated refund process available at brixpage.com/refund. All
          refund requests are subject to review, and submission of your case
          does not guarantee a refund.
        </p>

        <h2
          className={`${jetBrainsMono.className} text-2xl font-semibold text-blue mb-4`}
        >
          Dispute Resolution
        </h2>
        <p className=" mb-6">
          BRIX PAGE LLC provides a "Dispute Fighter" tool to assist with the
          resolution of disputes. This tool is designed to streamline the
          process of uploading legal documents and purchase logs. However, BRIX
          PAGE LLC does not guarantee the outcome of any disputes and is not
          responsible for resolving disputes between buyers and creators.
        </p>

        <h2
          className={`${jetBrainsMono.className} text-2xl font-semibold text-blue mb-4`}
        >
          Limitations of Liability
        </h2>
        <p className=" mb-6">
          BRIX PAGE LLC is not liable for any dissatisfaction or disputes that
          arise from a creator's product or service. All purchase-related issues
          must be handled directly with the creator. BRIX PAGE LLC’s
          responsibility is limited to providing the platform for these
          transactions and offering dispute resolution tools.
        </p>

        <h2
          className={`${jetBrainsMono.className} text-2xl font-semibold text-blue mb-4`}
        >
          Contact Support
        </h2>
        <p className="">
          For further information or assistance, please contact
          support@brixpage.com.
        </p>
      </div>
      <Footerbar />
    </>
  );
}
