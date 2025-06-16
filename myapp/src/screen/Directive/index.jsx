
import ListCard from '../../components/ListCard';

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

    return (
        <div className="py-4 space-y-3">
            {directives.map((item) => (
                <ListCard key={item.id} item={item} />
            ))}
        </div>

    );
};

export default DirectiveList;
