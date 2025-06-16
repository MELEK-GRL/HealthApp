import React from 'react';
import Detail from '../../components/Detail';
import PdfUploader from '../../components/PdfUploader';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const DirectiveDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { t } = useTranslation();
    return (
        <div className='flex w-full h-full justify-between flex-col'>
            <Detail id={id} />
            <div className="mt-6 py-6">
                <PdfUploader directiveId={id} />
            </div>

            <div className='flex w-full'>
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center text-blue-600 hover:underline mb-6"
                >
                    <FaArrowLeft className="mr-2" />
                    {t('back')}
                </button>
            </div>
        </div>
    );
};

export default DirectiveDetail;
