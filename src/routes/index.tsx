import {createBrowserRouter} from "react-router";
import RootLayout from "./RootLayout";
import ErrorPage from "./ErrorPage";
import {Home} from "../pages/Home.tsx";
import {About} from "../pages/About";
import {Contact} from "../pages/Contact.tsx";
import {Services} from "../pages/Services.tsx";
import {Blogs} from "../pages/Blogs.tsx";
import {Gallery} from "../pages/Gallery.tsx";
import {Janakari} from "../pages/Janakari.tsx";

export const index = createBrowserRouter([
    {
        path: "/namaste-lekhapadhi/",
        element: <RootLayout/>,
        errorElement: <ErrorPage/>, // this will render when error occurs in the route or any of its children
        children: [
            {index: true, element: <Home/>},
            {path: "about", element: <About/>},
            {path: "contact", element: <Contact/>},
            {path: "services", element: <Services/>},
            {path: "blogs", element: <Blogs/>},
            {path: "gallery", element: <Gallery/>},
            {path: "janakari", element: <Janakari/>}
        ],
    },
]);
