export const WhyAgrifolio = () => {
  const FeatureCard2 = ({
    icon,
    title,
    description,
  }: {
    icon?: any;
    title?: string;
    description?: string;
  }) => {
    return (
      <div className="bg-white shadow-md p-5 rounded-md flex  space-x-6">
        <div className="justify-center items-center">
          <img src={icon} alt="icon" className="rounded-xl " />
        </div>
        {/* Replace with actual icon */}
        <div>
          <h4 className="text-lg font-bold text-gray-800">{title}</h4>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="py-1 mt-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Why Agrifolio?</h2>

          <p className="text-gray-600 max-w-lg mx-auto font-sans">
            Our mission is to drive passive revenue for businesses and enable
            them to offer a great service to their customers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <FeatureCard2
            icon={"https://cdn-icons-png.flaticon.com/128/3281/3281323.png"}
            title="Elevate Your Brand"
            description="Create a detailed profile to showcase your products, practices, and story. Stand out in the crowded market with stunning visuals and a compelling narrative."
          />
          <FeatureCard2
            icon={"https://cdn-icons-png.flaticon.com/128/2103/2103633.png"}
            title="Expand Your Market"
            description="Connect with local and global buyers, partners, and distributors. Grow your business by reaching new customers and accessing broader markets."
          />
          <FeatureCard2
            icon={"https://cdn-icons-png.flaticon.com/128/751/751381.png"}
            title="Discover New Opportunities"
            description="Explore innovative practices, sustainable solutions, and emerging trends in agriculture. Stay ahead with the latest updates from the farming community."
          />
          <FeatureCard2
            icon={"https://cdn-icons-png.flaticon.com/128/10050/10050999.png"}
            title="Insightful Analytics"
            description="Get valuable insights on profile views, customer engagement, and market trends. Make informed decisions with our easy-to-use analytics tools."
          />
        </div>
      </section>
    </>
  );
};
