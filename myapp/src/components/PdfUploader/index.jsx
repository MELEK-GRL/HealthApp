import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

const PdfUploader = ({ directiveId }) => {
  const { t } = useTranslation();
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setError('');
    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length === 0) return;

    const pdfFile = droppedFiles[0];
    if (pdfFile.type !== 'application/pdf') {
      setError(t('pdfWarning'));
      return;
    }
    setFile(pdfFile);
  }, []);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileSelect = (e) => {
    setError('');
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    if (selectedFile.type !== 'application/pdf') {
      setError(t('pdfWarning'));
      return;
    }
    setFile(selectedFile);
  };

  const handleCancel = () => {
    setFile(null);
    setError('');
  };

  const handleUpload = async () => {
    if (!file) {
      setError(t('pleaseSelectPDF'));
      return;
    }
    setError('');
    setIsUploading(true);

    try {
      // FormData ile dosya ve directiveId gönderiyoruz
      const formData = new FormData();
      formData.append('file', file);
      formData.append('directiveId', directiveId);

      // Örnek API URL'si, kendine göre değiştir
      const response = await fetch('https://your-backend-api.com/upload-pdf', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Yükleme sırasında hata oluştu');
      }

      alert(`"${file.name}" başarıyla yüklendi!`);
      setFile(null);
    } catch (error) {
      setError(error.message || 'Yükleme başarısız oldu.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div>
      <label
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className={`flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100
          ${error ? 'border-red-500' : 'border-gray-300'}`}
      >
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileSelect}
          className="hidden"
        />
        <p className="text-gray-600">
          {t('pdfAdd')}
        </p>
      </label>

      {error && <p className="text-red-500 mt-2">{error}</p>}
      {file && (
        <div className="mt-3 p-2 bg-green-100 text-green-700 rounded flex items-center justify-between">
          <span><strong>{t('selectedFile') + ' :'}</strong> {file.name}</span>
          <button
            onClick={handleCancel}
            className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            type="button"
          >
            {t('delete')}
          </button>
        </div>
      )}

      <div className='flex justify-center'>
        <button
          onClick={handleUpload}
          disabled={isUploading || !file}
          className={`mt-4 w-[200px] px-5 py-2 rounded text-white font-semibold
          ${isUploading || !file ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
          type="button"
        >
          {isUploading ? t('loading') : t('send')}
        </button>
      </div>
    </div>
  );
};

export default PdfUploader;
