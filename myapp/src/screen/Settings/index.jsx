import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Settings = () => {
    const { t, i18n } = useTranslation();
    const [message, setMessage] = useState('');
    const [selectedLang, setSelectedLang] = useState(i18n.language || 'tr');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setSelectedLang(lng);

        if (lng === 'tr') {
            setMessage('Dil Türkçe oldu');
        } else if (lng === 'en') {
            setMessage('Language switched to English');
        }
    };

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => setMessage(''), 3000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    return (
        <div className="flex items-center  w-full py-4 ">
            <div className="bg-white rounded-2xl shadow-md px-8 py-8  xl:w-[40%] lg:w-[50%] md:w-[60%] sm:w-[80%] w-full border border-slate-200 flex flex-col gap-4  ">
                <div className=''>
                    <h2 className="text-2xl font-bold text-gray-800">{t('languageSelection')}</h2>
                </div>

                <div className="flex flex-col gap-3 ">
                    <label className="flex items-center justify-between px-4 py-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition">
                        <span className="text-gray-700">{t('turkish')}</span>
                        <input
                            type="radio"
                            name="language"
                            value="tr"
                            checked={selectedLang === 'tr'}
                            onChange={() => changeLanguage('tr')}
                            className="accent-blue-500"
                        />
                    </label>

                    <label className="flex items-center justify-between px-4 py-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition">
                        <span className="text-gray-700">{t('english')}</span>
                        <input
                            type="radio"
                            name="language"
                            value="en"
                            checked={selectedLang === 'en'}
                            onChange={() => changeLanguage('en')}
                            className="accent-blue-500"
                        />
                    </label>
                </div>

                {message && (
                    <div className="p-3 rounded-lg bg-green-100 text-green-800 shadow-sm transition">
                        {message}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Settings;
