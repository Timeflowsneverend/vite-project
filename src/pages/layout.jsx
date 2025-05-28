import { Outlet } from "react-router-dom"
import Navbar from "../ui/navbar"

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <footer className="text-center">
                <p>&copy; All right reserved</p>
            </footer>
        </div>
    )
}

export default Layout