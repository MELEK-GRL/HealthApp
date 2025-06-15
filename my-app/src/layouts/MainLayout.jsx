import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
    return (
        <>
            <header className="bg-blue-600 text-white p-4">
                <nav className="container mx-auto flex gap-4">
                    <Link to="/" className="hover:underline">Ana Sayfa</Link>
                    <Link to="/about" className="hover:underline">Hakkında</Link>
                    <Link to="/contact" className="hover:underline">İletişim</Link>
                </nav>
            </header>

            <main className="container mx-auto p-4 min-h-[80vh]">
                {/* Route edilmiş sayfalar buraya render olur */}
                <Outlet />
            </main>


        </>
    );
}
