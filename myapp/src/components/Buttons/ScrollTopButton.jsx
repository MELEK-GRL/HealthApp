import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollTopButton = ({ scrollRef }) => {
    const scrollToTop = () => {
        if (scrollRef && scrollRef.current) {
            scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-blue-700 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
            aria-label="Sayfanın başına dön"
        >
            <FaArrowUp size={20} />
        </button>
    );
};

export default ScrollTopButton;
