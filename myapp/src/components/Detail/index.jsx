import { directives } from '../../data/directive';
import { FaUserMd, FaClock, FaCalendarAlt } from 'react-icons/fa';

const Detail = ({ id }) => {
    // id prop gelmezse parseInt NaN olabilir, default olarak 0 verelim
    const directiveId = parseInt(id) || 0;

    const directive = directives.find(d => d.id === directiveId);

    if (!directive) return <div className="p-4 text-red-500">Yönerge bulunamadı</div>;

    return (
        <div className='flex w-full'>
            <div className="p-6 bg-white rounded-xl shadow-md  w-full border border-slate-100">
                <div className='mb-2'>
                    <span className="text-lg text-gray-700 font-semibold">
                        {directive.title}
                    </span>
                </div>
                <div className="flex items-center mb-2 text-gray-700">
                    <FaUserMd className="mr-2 text-blue-600" />
                    <span className="text-sm text-gray-700">Doktor:</span>
                    <span className="text-sm text-gray-700 ml-2">{directive.doctor}</span>
                </div>
                <div className="flex items-center mb-2 text-gray-600">
                    <FaClock className="mr-2 text-green-600" />
                    <span className="text-sm text-gray-700">Saat:</span>
                    <span className="text-sm text-gray-700 ml-2">{directive.time}</span>
                </div>
                <div className="flex items-center text-gray-600">
                    <FaCalendarAlt className="mr-2 text-purple-600" />
                    <span className="text-sm text-gray-700">Tarih:</span>
                    <span className="text-sm text-gray-700 ml-2">{directive.date}</span>
                </div>
            </div>
        </div>
    );
};

export default Detail;
