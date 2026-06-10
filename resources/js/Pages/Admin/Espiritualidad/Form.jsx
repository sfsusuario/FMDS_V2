import { useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
import AdminLayout from '../../../Components/AdminLayout';
import RichEditor from '../../../Components/RichEditor';

export default function EspiritualidadForm({ article }) {
    const isEdit = !!article;
    const { data, setData, post, processing, errors } = useForm({
        titulo:    article?.titulo    ?? '',
        extracto:  article?.extracto  ?? '',
        contenido: article?.contenido ?? '',
        imagen:    null,
    });

    const [preview, setPreview] = useState(article?.imagen ?? null);
    const [autoExtract, setAutoExtract] = useState(!isEdit);

    const extractText = (html, max = 220) => {
        const div = document.createElement('div');
        div.innerHTML = html;
        return (div.textContent || '').replace(/\s+/g, ' ').trim().substring(0, max);
    };

    const handleFile = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setData('imagen', file);
        setPreview(URL.createObjectURL(file));
    };

    const submit = (e) => {
        e.preventDefault();
        const url = isEdit ? `/admin/espiritualidad/${article.id}` : '/admin/espiritualidad';
        post(url, { forceFormData: true });
    };

    return (
        <AdminLayout title={isEdit ? 'Editar Artículo' : 'Nuevo Artículo'}>
            <div className="max-w-2xl">
                <Link href="/admin/espiritualidad" className="text-sm text-primary-700 hover:underline mb-5 inline-block">
                    ← Volver a espiritualidad
                </Link>
                <form onSubmit={submit} className="bg-white rounded-xl shadow-sm p-6 space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Título *</label>
                        <input type="text" value={data.titulo} onChange={e => setData('titulo', e.target.value)}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500" />
                        {errors.titulo && <p className="text-red-500 text-xs mt-1">{errors.titulo}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Extracto *
                            {autoExtract && <span className="ml-2 text-xs text-gray-400 font-normal">(auto desde contenido)</span>}
                        </label>
                        <textarea rows={3} value={data.extracto}
                            onChange={e => { setAutoExtract(false); setData('extracto', e.target.value); }}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 resize-none" />
                        {errors.extracto && <p className="text-red-500 text-xs mt-1">{errors.extracto}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Contenido</label>
                        <RichEditor value={data.contenido} onChange={v => {
                            setData('contenido', v);
                            if (autoExtract) setData('extracto', extractText(v));
                        }} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Imagen</label>
                        {preview && <img src={preview} className="w-40 h-28 object-cover rounded-lg mb-3" alt="preview" />}
                        <input type="file" accept="image/*" onChange={handleFile}
                            className="text-sm text-gray-600 file:mr-3 file:py-1.5 file:px-4 file:rounded-lg file:border-0 file:bg-primary-800 file:text-white file:text-sm file:cursor-pointer" />
                        {errors.imagen && <p className="text-red-500 text-xs mt-1">{errors.imagen}</p>}
                    </div>
                    <div className="flex gap-3 pt-2">
                        <button type="submit" disabled={processing}
                            className="px-6 py-2.5 bg-primary-800 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors disabled:opacity-60">
                            {processing ? 'Guardando...' : isEdit ? 'Actualizar' : 'Crear artículo'}
                        </button>
                        <Link href="/admin/espiritualidad"
                            className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                            Cancelar
                        </Link>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
