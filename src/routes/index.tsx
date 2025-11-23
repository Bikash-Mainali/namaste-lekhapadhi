// src/routes/index.tsx
import {createHashRouter} from "react-router";
import RootLayout from "./RootLayout";
import ErrorPage from "./ErrorPage";
import {Home} from "../pages/Home.tsx";
import {About} from "../pages/About";
import {Contact} from "../pages/Contact.tsx";
import {Services} from "../pages/Services.tsx";
import {Blogs} from "../pages/Blogs.tsx";
import {Gallery} from "../pages/Gallery.tsx";
import {Janakari} from "../pages/Janakari.tsx";

export const index = createHashRouter([
    {
        path: "/",
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
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
