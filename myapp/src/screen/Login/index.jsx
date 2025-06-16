import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { t } = useTranslation();

    const handleLogin = (e) => {
        e.preventDefault();

        if (username.trim() === "" || password.trim() === "") {
            alert("Lütfen kullanıcı adı ve şifre girin.");
            return;
        }
        navigate("/app");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6">{t('login')}</h2>
                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block text-gray-700 mb-1">{t('username')}</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder={t('username').toLowerCase()}
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1">{t('password')}</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder={t('password').toLowerCase()}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-200"
                    >
                        {t("login")}
                    </button>
                </form>

                <p className="mt-4 text-center text-gray-600">
                    <Link to="/register" className="text-blue-600 hover:underline">
                        {t('register')}
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
