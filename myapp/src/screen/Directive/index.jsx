
import { useMemo, useState } from 'react';
import ListCard from '../../components/ListCard';
import { FaSearch, FaCalendarAlt } from 'react-icons/fa';
const directives = [
    {
        id: 1,
        title: 'Standart Muayene Formu',
        doctor: 'DR. AYŞE DEMİR (Uzm. Kardiyoloji)',
        time: '09:15',
        date: '02.01.2025',
    },
    {
        id: 2,
        title: 'Standart Muayene Formu',
        doctor: 'DR. MEHMET YILMAZ (Uzm. Nöroloji)',
        time: '10:30',
        date: '03.01.2025',
    },
    {
        id: 3,
        title: 'Standart Muayene Formu',
        doctor: 'DR. ELİF KOÇ (Uzm. Dahiliye)',
        time: '08:45',
        date: '04.01.2025',
    },
    {
        id: 4,
        title: 'Standart Muayene Formu',
        doctor: 'DR. CANAN AKSOY (Uzm. Kadın Doğum)',
        time: '13:20',
        date: '05.01.2025',
    },
    {
        id: 5,
        title: 'Standart Muayene Formu',
        doctor: 'DR. MURAT KAYA (Uzm. Göz Hastalıkları)',
        time: '14:00',
        date: '06.01.2025',
    },
    {
        id: 6,
        title: 'Standart Muayene Formu',
        doctor: 'DR. SEDA GÜLER (Uzm. Ortopedi)',
        time: '11:00',
        date: '07.01.2025',
    },
    {
        id: 7,
        title: 'Standart Muayene Formu',
        doctor: 'DR. KENAN ŞAHİN (Uzm. Psikiyatri)',
        time: '15:30',
        date: '08.01.2025',
    },
    {
        id: 8,
        title: 'Standart Muayene Formu',
        doctor: 'DR. MELİS ERDEM (Uzm. Dermatoloji)',
        time: '12:10',
        date: '09.01.2025',
    },
    {
        id: 9,
        title: 'Standart Muayene Formu',
        doctor: 'DR. CEM TOK (Uzm. Üroloji)',
        time: '16:45',
        date: '10.01.2025',
    },
    {
        id: 10,
        title: 'Standart Muayene Formu',
        doctor: 'DR. YASEMİN ARSLAN (Uzm. Endokrinoloji)',
        time: '10:00',
        date: '11.01.2025',
    },
    {
        id: 11,
        title: 'Standart Muayene Formu',
        doctor: 'DR. BÜLENT ÇELİK (Uzm. KBB)',
        time: '09:50',
        date: '12.01.2025',
    },
    {
        id: 12,
        title: 'Standart Muayene Formu',
        doctor: 'DR. NUR CAN (Uzm. Nefroloji)',
        time: '13:40',
        date: '13.01.2025',
    },
    {
        id: 13,
        title: 'Standart Muayene Formu',
        doctor: 'DR. HALİL BOZKURT (Uzm. Enfeksiyon)',
        time: '14:25',
        date: '14.01.2025',
    },
    {
        id: 14,
        title: 'Standart Muayene Formu',
        doctor: 'DR. AYLİN SEZGİN (Uzm. Geriatri)',
        time: '11:55',
        date: '15.01.2025',
    },
    {
        id: 15,
        title: 'Standart Muayene Formu',
        doctor: 'DR. MERT YILDIZ (Uzm. Onkoloji)',
        time: '08:35',
        date: '16.01.2025',
    },
    {
        id: 16,
        title: 'Standart Muayene Formu',
        doctor: 'DR. ZEYNEP KILIÇ (Uzm. Aile Hekimi)',
        time: '10:40',
        date: '17.01.2025',
    },
    {
        id: 17,
        title: 'Standart Muayene Formu',
        doctor: 'DR. EMRE TAN (Uzm. Radyoloji)',
        time: '13:10',
        date: '18.01.2025',
    },
    {
        id: 18,
        title: 'Standart Muayene Formu',
        doctor: 'DR. SELİN AKAR (Uzm. Fizik Tedavi)',
        time: '15:00',
        date: '19.01.2025',
    },
    {
        id: 19,
        title: 'Standart Muayene Formu',
        doctor: 'DR. TOLGA DEMİRCİ (Uzm. Anestezi)',
        time: '12:25',
        date: '20.01.2025',
    },
    {
        id: 20,
        title: 'Standart Muayene Formu',
        doctor: 'DR. NİHAL ÖZTÜRK (Uzm. Göğüs Hast.)',
        time: '09:05',
        date: '21.01.2025',
    },
];

const DirectiveList = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const filteredDirectives = useMemo(() => {
        return directives.filter((item) => {
            const lowerSearch = searchTerm.toLowerCase();
            const matchesSearch =
                item.title.toLowerCase().includes(lowerSearch) ||
                item.doctor.toLowerCase().includes(lowerSearch);

            const itemDate = new Date(item.date.split('.').reverse().join('-'));
            const isAfterStart = startDate ? itemDate >= new Date(startDate) : true;
            const isBeforeEnd = endDate ? itemDate <= new Date(endDate) : true;

            return matchesSearch && isAfterStart && isBeforeEnd;
        });
    }, [searchTerm, startDate, endDate]);

    return (
        <div className="p-4">
            {/* Arama ve tarih filtreleme alanı */}
            <div className="flex mb-6 lg:flex-row flex-col sm:justify-between justify-normal">
                <div className="relative flex lg:w-[50%] w-full">
                    <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Doktor veya form ara..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 shadow-sm"
                    />
                </div>
                <div className='flex gap-4 lg:mt-0 mt-4'>
                    <div className="relative">
                        <FaCalendarAlt className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 shadow-sm"
                        />
                    </div>
                    <div className="relative">
                        <FaCalendarAlt className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 shadow-sm"
                        />
                    </div>
                </div>
            </div>

            {/* Liste */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredDirectives.map((item) => (
                    <ListCard key={item.id} item={item} />
                ))}
                {filteredDirectives.length === 0 && (
                    <p className="col-span-full text-center text-gray-500 mt-4">
                        Eşleşen sonuç bulunamadı.
                    </p>
                )}
            </div>
        </div>
    );
};

export default DirectiveList;
