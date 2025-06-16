// components/DropdownMenu.jsx
import { useState, useRef, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function DropdownMenu({ title, menuItems = [] }) {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setOpen(!open);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="flex items-center gap-2 focus:outline-none">
                <FaUserCircle className="text-2xl" />
                <span className="text-sm font-medium">{title}</span>
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-44 bg-white text-black rounded shadow-lg z-10">
                    {menuItems.map(({ label, path }, index) => (
                        <Link
                            key={index}
                            to={path}
                            className="block px-4 py-2 hover:bg-gray-100"
                            onClick={() => setOpen(false)}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
