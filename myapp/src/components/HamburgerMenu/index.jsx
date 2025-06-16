import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

export default function HamburgerMenu({ title = "Melek Gürel", menuItems = [] }) {
    const [open, setOpen] = useState(false);
    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="text-white text-2xl focus:outline-none "
                aria-label="Open menu"
            >
                <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                >
                    <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
            </button>

            <div
                ref={sidebarRef}
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex items-center gap-3 p-4 border-b flex-row ">
                    <FaUserCircle className="text-4xl text-blue-600" />
                    <div>
                        <p className="font-semibold text-lg text-slate-700">{title}</p>

                    </div>
                </div>

                <nav className="flex flex-col mt-2">
                    {menuItems.map(({ label, path }, i) => (
                        <Link
                            key={i}
                            to={path}
                            onClick={() => setOpen(false)}
                            className="px-4 py-3 hover:bg-blue-100 border-b border-gray-200  no-underline"
                        >
                            <span className="text-slate-500"> {label}</span>
                        </Link>
                    ))}
                </nav>
            </div>

            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black opacity-25 z-40"
                ></div>
            )}
        </>
    );
}
