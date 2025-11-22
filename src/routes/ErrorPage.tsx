import { useRouteError, isRouteErrorResponse } from "react-router";

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <pre>
        {isRouteErrorResponse(error)
            ? error.statusText
            : (error as Error)?.message || "Unknown error"}
      </pre>
        </div>
    );
}
