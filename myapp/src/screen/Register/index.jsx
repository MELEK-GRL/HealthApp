import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState('');
    const { t } = useTranslation();
    const handleRegister = (e) => {
        e.preventDefault();

        if (password !== passwordConfirm) {
            setError('Şifreler eşleşmiyor!');
            return;
        }

        setError('');
        // Kayıt işlemi burada yapılabilir
        alert(`Kayıt: ${username} / ${password}`);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6"> {t('logout')}</h2>
                <form onSubmit={handleRegister} className="space-y-5">
                    <div>
                        <label htmlFor="username" className="block text-gray-700 mb-1 font-medium">Kullanıcı Adı</label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Kullanıcı adınızı girin"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-gray-700 mb-1 font-medium">Şifre</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Şifrenizi girin"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="passwordConfirm" className="block text-gray-700 mb-1 font-medium">Şifre Tekrar</label>
                        <input
                            id="passwordConfirm"
                            type="password"
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                            placeholder="Şifrenizi tekrar girin"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {error && (
                        <p className="text-red-600 text-sm">{error}</p>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-200"
                    >
                        {t('logout')}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
