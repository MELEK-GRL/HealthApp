import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserById, clearUser } from '../../slice/userSlice';

const User = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { currentUser, status, error } = useSelector(state => state.user);

    useEffect(() => {
        if (id) {
            dispatch(fetchUserById(id));
        }

        return () => {
            dispatch(clearUser());
        };
    }, [id, dispatch]);

    if (status === 'loading') {
        return <div className="p-4">Yükleniyor...</div>;
    }

    if (error) {
        return <div className="p-4 text-red-600">Hata: {error}</div>;
    }

    if (!currentUser) {
        return <div className="p-4 text-red-600">Kullanıcı bulunamadı.</div>;
    }

    return (
        <div className="max-w-xl mx-auto p-6 bg-white rounded shadow mt-6">
            <h1 className="text-2xl font-bold mb-4">Kullanıcı Detay</h1>
            <div className="mb-2">
                <span className="font-semibold">Ad Soyad:</span> {currentUser.name}
            </div>
            <div className="mb-2">
                <span className="font-semibold">Email:</span> {currentUser.email}
            </div>
            <div className="mb-4">
                <span className="font-semibold">Rol:</span> {currentUser.role || 'Bilinmiyor'}
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
