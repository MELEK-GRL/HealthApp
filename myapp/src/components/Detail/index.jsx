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
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    {directive.title}
                </h2>
                <div className="flex items-center mb-3 text-gray-700">
                    <FaUserMd className="mr-2 text-blue-600" />
                    <span className="font-medium">Doktor:</span>
                    <span className="ml-2">{directive.doctor}</span>
                </div>
                <div className="flex items-center mb-2 text-gray-600">
                    <FaClock className="mr-2 text-green-600" />
                    <span className="font-medium">Saat:</span>
                    <span className="ml-2">{directive.time}</span>
                </div>
                <div className="flex items-center text-gray-600">
                    <FaCalendarAlt className="mr-2 text-purple-600" />
                    <span className="font-medium">Tarih:</span>
                    <span className="ml-2">{directive.date}</span>
                </div>
            </div>
        </div>
    );
};

export default Detail;
