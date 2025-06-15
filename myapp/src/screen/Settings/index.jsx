import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Settings = () => {
    const { i18n } = useTranslation();
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
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <h2 className="text-2xl font-semibold mb-6">Dil Seçimi / Language Selection</h2>

            <div className="flex flex-col space-y-4 mb-6">
                <label className="inline-flex items-center space-x-2 cursor-pointer">
                    <input
                        type="radio"
                        name="language"
                        value="tr"
                        checked={selectedLang === 'tr'}
                        onChange={() => changeLanguage('tr')}
                        className="form-radio text-blue-600"
                    />
                    <span>Türkçe</span>
                </label>

                <label className="inline-flex items-center space-x-2 cursor-pointer">
                    <input
                        type="radio"
                        name="language"
                        value="en"
                        checked={selectedLang === 'en'}
                        onChange={() => changeLanguage('en')}
                        className="form-radio text-blue-600"
                    />
                    <span>English</span>
                </label>
            </div>

            {message && (
                <div className="p-3 bg-green-200 text-green-800 rounded shadow">
                    {message}
                </div>
            )}
        </div>
    );
};

export default Settings;
