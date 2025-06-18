
import { FaArrowLeft } from 'react-icons/fa';
const BackButton = ({ onClick, text }) => {
    return (
        <div className='flex w-full  md:mb-4'>
            <button
                onClick={onClick}
                className="flex items-center text-blue-700 hover:underline "
            >
                <FaArrowLeft className="mr-2" />
                {text}
            </button>
        </div>
    )
}

export default BackButton
