import Link from "next/link";
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
          <h1 className="text-4xl font-bold text-slate-800">
            Modern Portfolio for You and Your Agribusiness
          </h1>
          <p className="py-6 text-slate-600">
            Create a powerful online presence with customizable profiles,
            connect with consumers and partners globally, and drive growth for
            your agribusiness—all on a platform designed to elevate your brand
            and streamline your operations.
          </p>
          <Link href="/auth/sign-up">
            <button className="btn btn-primary bg-slate-700 text-white hover:bg-slate-800 hover:text-white border-slate-600">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
