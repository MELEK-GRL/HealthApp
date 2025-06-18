import { HiOutlineClipboardDocument } from 'react-icons/hi2';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ListCard = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/app/directive/${item.id}`);
  };

  return (
    <div onClick={handleClick} className="flex items-center bg-white rounded-xl shadow-md p-3 relative cursor-pointer hover:bg-gray-50 border border-slate-100">
      <div className="w-12 h-12 rounded-md bg-gray-100 flex items-center justify-center mr-4">
        <HiOutlineClipboardDocument className="text-gray-500" size={24} />
      </div>

      <div className="flex flex-col flex-grow">
        <sapan className="text-sm font-semibold text-gray-800">{item.title}</sapan>

        <div className="flex items-center mt-1 text-sm text-gray-700">
          <FaUser className="text-blue-600 mr-1" size={12} />
          <span className="text-sm  text-gray-600 truncate">{item.doctor}</span>
        </div>

        <div className="flex justify-between mt-1 text-sm text-gray-600 w-full pr-6">
          <span className="text-sm  text-gray-500">{item.time}</span>
          <span className="text-sm  text-gray-500">{item.date}</span>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
