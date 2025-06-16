import { Outlet } from "react-router-dom";
import HamburgerMenu from "../components/HamburgerMenu";
import { FaUserCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function MainLayout() {
    const { t } = useTranslation();
    const menuItems = [
        { label: t("directiveList"), path: "/app" },
        { label: t("profile"), path: "/app/user" },
        { label: t("settings"), path: "/app/settings" },
        { label: t("logout"), path: "/" },
    ];

    // Header ve footer yüksekliği (örnek 64px)
    const headerHeight = 64;
    const footerHeight = 64;

    return (
        <div className="flex flex-col min-h-screen ">
            <header
                className="bg-blue-600 text-white flex justify-between items-center globalScreen"
                style={{ height: `${headerHeight}px` }}
            >
                <HamburgerMenu menuItems={menuItems} />
                <div className="flex items-center gap-2 cursor-pointer select-none">
                    <FaUserCircle className="text-3xl" />
                    <span className="text-sm font-medium">Melek Gürel</span>
                </div>
            </header>

            <main
                className="py-4 overflow-auto globalScreen hide-scrollbar"
                style={{
                    height: `calc(100vh - ${headerHeight}px - ${footerHeight}px)`,
                }}
            >
                <Outlet />
            </main>

            <footer
                className="bg-gray-100 text-gray-700 p-4 text-center"
                style={{ height: `${footerHeight}px` }}
            >
                &copy; 2025 İmageRAD - Tüm Hakları Saklıdır.
            </footer>
        </div>
    );
}
