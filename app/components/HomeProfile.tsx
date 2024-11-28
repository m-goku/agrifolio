import Link from "next/link";
import FeatureCard from "./FeatureCard";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import { WhyAgrifolio } from "./WhyAgrifolio";

export default function HomeProfile({ name, description, image }: { name: string, description: string, image?: string }) {
    return (
        <div className="bg-white items-center flex flex-col ">
            <div className=" pt-10 pb-10 flex items-center">
                <div className="hero-content text-center flex-col lg:flex-row-reverse">
                    {/* <img
                        src="https://images.pexels.com/photos/841303/pexels-photo-841303.jpeg"
                        className="w-full max-w-xl rounded-lg shadow-2xl"
                        alt="Hero"
                    /> */}
                    <div className="hero bg-base-200 ">
                        <div className="hero-content text-center">
                            <div className="max-w-lg">
                                <h1 className="lg:text-7xl text-5xl font-bold text-green-800">Hello there</h1>
                                <p className="py-6">
                                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                                </p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                    {/* <div className="">
                        <h1 className="text-4xl font-bold text-slate-800">
                            Welcome To {name}
                        </h1>
                        <p className="py-6 text-slate-600  text-lg">
                            {description}
                        </p>
                        <Link href="/auth/sign-up">
                            <button className="btn btn-primary bg-slate-700 text-white hover:bg-slate-800 hover:text-white border-slate-600">
                                Get Started
                            </button>
                        </Link>
                    </div> */}
                </div>


            </div>
            {/* <div className="flex flex-col md:flex-row md:justify-center md:space-x-4 p-4 ">
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
            </div> */}
            {/* <div className="flex flex-col bg-slate-50 md:justify-center md:space-x-4 p-4">
                <WhyAgrifolio />
            </div> */}
        </div>
    );
}
