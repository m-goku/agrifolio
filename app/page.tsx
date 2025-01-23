import FeatureCard from "./components/FeatureCard";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
//import { WhyAgrifolio } from "./components/WhyAgrifolio";

export default function Home() {
  return (
    <div className="bg-white items-center flex flex-col">
      <Navbar />
      <Hero />
      <div className="flex flex-col md:flex-row md:justify-center md:space-x-4 p-4">
        <div className="flex-grow md:w-1/3">
          <FeatureCard
            icon="https://cdn-icons-png.flaticon.com/128/1001/1001371.png"
            title="Create Your Profile"
            description="Sign up and build your profile in minutes. Share your story, upload photos and videos, and highlight your unique selling points."
          />
        </div>
        <div className="flex-grow md:w-1/3">
          <FeatureCard
            icon="https://cdn-icons-png.flaticon.com/128/3214/3214746.png"
            title="Connect with Your Audience"
            description="Leverage our platform's search and discovery features to connect with buyers, partners, and other farmers. Whether you're looking to sell directly or form partnerships, our platform makes it easy."
          />
        </div>
        <div className="flex-grow md:w-1/3">
          <FeatureCard
            icon="https://cdn-icons-png.flaticon.com/128/5405/5405826.png"
            title="Grow Your Business"
            description="Access powerful tools to track your progress, understand your audience, and expand your reach. With Agrofolio, you're not just another farm—you're a brand."
          />
        </div>
      </div>
      <div className="flex flex-col md:justify-center md:space-x-4 p-4">
        {/* <WhyAgrifolio /> */}
      </div>
      <Footer />
    </div>
  );
}
