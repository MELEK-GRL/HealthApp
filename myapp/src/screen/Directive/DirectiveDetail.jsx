import React from 'react';
import Detail from '../../components/Detail';
import PdfUploader from '../../components/PdfUploader';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BackButton from '../../components/Buttons/BackButton';

const DirectiveDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { t } = useTranslation();
    return (
        <div className='flex w-full h-full justify-between flex-col'>
            <BackButton text={t('back')} onClick={() => navigate(-1)} />
            <Detail id={id} />
            <div className="py-6">
                <PdfUploader directiveId={id} />
            </div>


        </div>
    );
};

export default DirectiveDetail;
