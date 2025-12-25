import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { index } from './routes'
import './utils/i18n.ts'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
    <StrictMode>
        <RouterProvider router={index} />
    </StrictMode>
)
