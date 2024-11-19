// pages/404.js
export default function Custom404() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r">
            <div className="text-center space-y-6">
                <h1 className="text-6xl font-extrabold md:text-8xl">404</h1>
                <p className="text-2xl md:text-3xl">Oops! Page not found.</p>
                <p className="text-lg md:text-xl">
                    The page you're looking for might have been moved or deleted.
                </p>
                <a
                    href="/"
                    className="mt-4 inline-block px-8 py-3 text-lg font-semibold bg-white rounded-md shadow-lg hover:bg-indigo-100 transition duration-300"
                >
                    Go back to Home
                </a>
            </div>
        </div>
    );
}
