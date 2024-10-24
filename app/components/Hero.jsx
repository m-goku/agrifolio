import React from "react";

function Hero() {
  return (
    <div className="hero bg-base-200 pt-10 pb-10 flex items-center bg-slate-50">
      <div className="hero-content text-center flex-col lg:flex-row-reverse">
        <img
          src="https://images.pexels.com/photos/841303/pexels-photo-841303.jpeg"
          className="w-full max-w-xl rounded-lg shadow-2xl"
          alt="Hero"
        />
        <div className="lg:pl-6">
          <h1 className="text-4xl font-bold">
            Personalized Portfolio Profiles for Your Agribusiness
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
