import { useRouteError, isRouteErrorResponse } from 'react-router'

export default function ErrorPage() {
    const error = useRouteError()

    const message = isRouteErrorResponse(error) ? error.statusText : (error as Error)?.message || 'Unknown error'

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-6">
            <div className="max-w-lg rounded-xl border border-gray-200 bg-white p-10 text-center shadow-xl">
                <div className="mb-4 text-6xl font-bold text-red-500">⚠️</div>

                <h1 className="mb-4 text-3xl font-bold text-gray-800">Oops! Something went wrong.</h1>

                <p className="mb-4 text-gray-600">Sorry, an unexpected error has occurred.</p>

                <pre className="overflow-auto rounded-lg border border-gray-300 bg-gray-100 p-4 text-sm text-gray-800">
                    {message}
                </pre>

                <a
                    href="/"
                    className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-all hover:bg-blue-700"
                >
                    Go Back Home
                </a>
            </div>
        </div>
    )
}
