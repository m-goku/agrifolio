// components/FeatureCard.js
import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white shadow-md p-5 rounded-md flex items-center space-x-4">
      <div>{icon}</div> {/* Replace with actual icon */}
      <div>
        <h4 className="text-lg font-bold">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;



// components/WhyClyde.js
import React from "react";
import FeatureCard from "./FeatureCard";

const WhyClyde = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Why Clyde</h2>
        <p className="text-gray-600 max-w-lg mx-auto">
          Our mission is to drive passive revenue for businesses and enable them to offer a great service to their customers.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <FeatureCard
          icon={<span>📊</span>}
          title="Put passive revenue on autopilot"
          description="Put passive revenue on autopilot with just a few clicks."
        />
        <FeatureCard
          icon={<span>🔗</span>}
          title="Seamless underwriting"
          description="Connect directly to A+ rated insurers for seamless underwriting and administration."
        />
        <FeatureCard
          icon={<span>📈</span>}
          title="Drive additional sales"
          description="Drive additional sales when claims are approved."
        />
        <FeatureCard
          icon={<span>💰</span>}
          title="It's 100% free to offer"
          description="It's 100% free to offer! You keep your margins and we collect the premium."
        />
      </div>
    </section>
  );
};

export default WhyClyde;


// components/FrictionlessIntegration.js
import React from "react";

const FrictionlessIntegration = () => {
  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Frictionless integration, seamless revenue</h2>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        {/* Left Column */}
        <div className="space-y-6 md:w-1/2">
          <div className="flex items-start space-x-4">
            <span className="text-3xl">🔌</span> {/* Replace with actual icon */}
            <div>
              <h4 className="text-lg font-bold">Integrate with your platform</h4>
              <p>Integrate with your platform by installing our app or using our API (Shopify only).</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <span className="text-3xl">🎯</span>
            <div>
              <h4 className="text-lg font-bold">Customize your call to action</h4>
              <p>Customize your call to action for more effective engagement.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <span className="text-3xl">🚀</span>
            <div>
              <h4 className="text-lg font-bold">Engage autopilot or set your own margin</h4>
              <p>Engage autopilot or set your own margin.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <span className="text-3xl">💸</span>
            <div>
              <h4 className="text-lg font-bold">Drive risk-free revenue</h4>
              <p>Drive risk-free, passive revenue directly to your bank account.</p>
            </div>
          </div>
        </div>

        {/* Right Column (Image) */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src="/images/integration-illustration.png" alt="Integration illustration" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default FrictionlessIntegration;


// pages/index.js
import WhyClyde from "../components/WhyClyde";
import FrictionlessIntegration from "../components/FrictionlessIntegration";

export default function Home() {
  return (
    <div>
      <WhyClyde />
      <FrictionlessIntegration />
    </div>
  );
}
