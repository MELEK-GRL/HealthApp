import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const mockUsers = [
    { id: '1', name: 'Melek Gürel', email: 'melek@example.com', role: 'Admin' },
    { id: '2', name: 'Ahmet Yılmaz', email: 'ahmet@example.com', role: 'User' },
    { id: '3', name: 'Zeynep Kaya', email: 'zeynep@example.com', role: 'Editor' },
];

const User = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const user = mockUsers.find((u) => u.id === id);

    if (!user) {
        return <div className="p-4 text-red-600">Kullanıcı bulunamadı.</div>;
    }

    return (
        <div className="max-w-xl mx-auto p-6 bg-white rounded shadow mt-6">
            <h1 className="text-2xl font-bold mb-4">Kullanıcı Detay</h1>
            <div className="mb-2">
                <span className="font-semibold">Ad Soyad:</span> {user.name}
            </div>
            <div className="mb-2">
                <span className="font-semibold">Email:</span> {user.email}
            </div>
            <div className="mb-4">
                <span className="font-semibold">Rol:</span> {user.role}
            </div>
            <button
                onClick={() => navigate(-1)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
                Geri Dön
            </button>
        </div>
    );
};

export default User;
