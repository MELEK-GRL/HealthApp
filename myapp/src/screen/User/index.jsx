import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserById, clearUser } from '../../slice/userSlice';

import { useTranslation } from 'react-i18next';
import BackButton from '../../components/Buttons/BackButton';

const User = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { t } = useTranslation();

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
        <div className='flex flex-col'>
            <BackButton text={t('back')} onClick={() => navigate(-1)} />
            <div className="w-full sm:w-[70%] md:w-[50%] lg:w-[45%] xl:w-[35%] p-6 bg-white rounded shadow border border-slate-200">
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
            </div>
        </div>
    );
};

export default User;
