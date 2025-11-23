import { useRouteError, isRouteErrorResponse } from "react-router";

export default function ErrorPage() {
    const error = useRouteError();

    const message = isRouteErrorResponse(error)
        ? error.statusText
        : (error as Error)?.message || "Unknown error";

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
            <div className="bg-white shadow-xl rounded-xl p-10 max-w-lg text-center border border-gray-200">

                <div className="text-red-500 text-6xl font-bold mb-4">⚠️</div>

                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    Oops! Something went wrong.
                </h1>

                <p className="text-gray-600 mb-4">
                    Sorry, an unexpected error has occurred.
                </p>

                <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg text-sm border border-gray-300 overflow-auto">
          {message}
        </pre>

                <a
                    href="/"
                    className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all font-medium"
                >
                    Go Back Home
                </a>
            </div>
        </div>
    );
}
