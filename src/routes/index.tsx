import {createHashRouter} from 'react-router-dom'
import RootLayout from './RootLayout'
import ErrorPage from './ErrorPage'
import {Home} from '../pages/Home'
import {Contact} from '../pages/Contact'
import {Services} from '../pages/Services'
import {Blogs} from '../pages/Blogs'
import {Gallery} from '../pages/Gallery'
import {Janakari} from '../pages/Janakari'
import {About} from '../pages/About.tsx'

export const index = createHashRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <Home/>},
            {path: 'about', element: <About/>},
            {path: 'contact', element: <Contact/>},
            {path: 'services', element: <Services/>},
            {path: 'blogs', element: <Blogs/>},
            {path: 'gallery', element: <Gallery/>},
            {path: 'janakari', element: <Janakari/>}
        ],
    },
])

