import PriceCard from "../../components/ui/PriceCard";
import Footer from "../../components/ui/Footer";
import Navbar from "../../components/ui/Navbar";
import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Pricing() {
  return (
    <div className="flex flex-col gap-8">
      <Navbar />
      <h1
        className={`${jetBrainsMono.className} text-7xl border-b px-52 self-center`}
      >
        PRICING
      </h1>
      <div className="flex flex-row gap-4 self-center">
        <PriceCard
          tier="Standard"
          summary="For entrepreneurs and creators getting started with BRIX"
          perks={[
            "Host up to one BRIX PAGE",
            "10GB storage/audio",
            "Analytic dashboard",
            "Accept payments",
          ]}
          price="0"
          unlocked={true}
          redirect=""
        ></PriceCard>
        <PriceCard
          tier="Pro"
          summary="For entrepreneurs and creators with steady growing audience"
          perks={[
            "5 BRIX PAGE server hosting",
            "100GB storage/audio",
            "Advanced analytic dashboard",
            "Business Tools",
          ]}
          price="7.99"
          unlocked={true}
          redirect=""
        ></PriceCard>
        <PriceCard
          tier="Pro+"
          summary="For entrepreneurs and creators with a massive audience"
          perks={[
            "10 BRIX PAGE server hosting",
            "1TB storage/audio",
            "Free BRIX PAGE boosts",
            "Networking features",
          ]}
          price="14.99"
          unlocked={true}
          redirect=""
        ></PriceCard>
      </div>
      <Footer />
    </div>
  );
}
