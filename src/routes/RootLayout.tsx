import { Outlet } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../index.css'

export default function RootLayout() {
    return (
        <>
            <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
                <Header />
                <main id="outlet" className="mt-[calc(var(--header-height)+44px)]">
                    <Outlet /> {/* Where child routes render */}
                </main>
                <Footer />
            </div>
        </>
    )
}
