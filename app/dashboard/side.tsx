import { useState } from "react";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } md:translate-x-0 md:relative md:w-64`}
            >
                <div className="p-4 text-lg font-semibold border-b border-gray-700">
                    Sidebar
                </div>
                <nav className="p-4">
                    <ul>
                        <li className="mb-4">
                            <a href="#" className="hover:text-gray-300">
                                Home
                            </a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:text-gray-300">
                                About
                            </a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:text-gray-300">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* Close Button on Mobile */}
                <button
                    className="absolute top-4 right-4 md:hidden"
                    onClick={toggleSidebar}
                >
                    ❌
                </button>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Top Navigation Bar */}
                <header className="bg-white shadow-md p-4 flex items-center justify-between md:hidden">
                    <button
                        onClick={toggleSidebar}
                        className="text-gray-800 focus:outline-none"
                    >
                        ☰
                    </button>
                    <h1 className="text-xl font-bold">Responsive Page</h1>
                </header>

                {/* Page Content */}
                <main className="flex-1 p-6">
                    <h1 className="text-3xl font-bold mb-4">Welcome!</h1>
                    <p className="text-gray-700">
                        This is a simple modern-style page with a responsive sidebar.
                    </p>
                    <p className="mt-2 text-gray-700">
                        Resize your browser or view on a mobile device to see the sidebar
                        toggle.
                    </p>
                </main>
            </div>
        </div>
    );
}
