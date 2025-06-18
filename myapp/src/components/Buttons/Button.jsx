



const Button = ({ text, onClick }) => {


    return (
        <button
            onClick={onClick}
            className="mt-4 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition"
        >
            {text}
        </button>
    );
};

export default Button;
