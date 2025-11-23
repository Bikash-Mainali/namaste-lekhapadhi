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
        path: "/namaste-lekhapadhi/",
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <Home/>},
            {path: "/namaste-lekhapadhi/about", element: <About/>},
            {path: "/namaste-lekhapadhi/contact", element: <Contact/>},
            {path: "/namaste-lekhapadhi/services", element: <Services/>},
            {path: "/namaste-lekhapadhi/blogs", element: <Blogs/>},
            {path: "/namaste-lekhapadhi/gallery", element: <Gallery/>},
            {path: "/namaste-lekhapadhi/janakari", element: <Janakari/>}
        ],
    },
]);
