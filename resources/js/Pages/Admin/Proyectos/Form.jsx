import { useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
import AdminLayout from '../../../Components/AdminLayout';
import RichEditor from '../../../Components/RichEditor';

export default function ProyectoForm({ project }) {
    const isEdit = !!project;
    const { data, setData, post, processing, errors } = useForm({
        titulo:      project?.titulo      ?? '',
        descripcion: project?.descripcion ?? '',
        contenido:   project?.contenido   ?? '',
        activo:      project?.activo      ?? true,
        imagen:      null,
    });

    const [preview, setPreview] = useState(project?.imagen ?? null);
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
        const url = isEdit ? `/admin/proyectos/${project.id}` : '/admin/proyectos';
        post(url, { forceFormData: true });
    };

    return (
        <AdminLayout title={isEdit ? 'Editar Proyecto' : 'Nuevo Proyecto'}>
            <div className="max-w-2xl">
                <Link href="/admin/proyectos" className="text-sm text-primary-700 hover:underline mb-5 inline-block">
                    ← Volver a proyectos
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
                            Descripción corta *
                            {autoExtract && <span className="ml-2 text-xs text-gray-400 font-normal">(auto desde contenido)</span>}
                        </label>
                        <textarea rows={3} value={data.descripcion}
                            onChange={e => { setAutoExtract(false); setData('descripcion', e.target.value); }}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 resize-none" />
                        {errors.descripcion && <p className="text-red-500 text-xs mt-1">{errors.descripcion}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Contenido completo</label>
                        <RichEditor value={data.contenido} onChange={v => {
                            setData('contenido', v);
                            if (autoExtract) setData('descripcion', extractText(v));
                        }} />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Imagen principal</label>
                        {preview && (
                            <img src={preview} className="w-40 h-28 object-cover rounded-lg mb-3" alt="preview" />
                        )}
                        <input type="file" accept="image/*" onChange={handleFile}
                            className="text-sm text-gray-600 file:mr-3 file:py-1.5 file:px-4 file:rounded-lg file:border-0 file:bg-primary-800 file:text-white file:text-sm file:cursor-pointer" />
                        {errors.imagen && <p className="text-red-500 text-xs mt-1">{errors.imagen}</p>}
                    </div>

                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="activo" checked={data.activo}
                            onChange={e => setData('activo', e.target.checked)}
                            className="w-4 h-4 rounded border-gray-300 text-primary-800" />
                        <label htmlFor="activo" className="text-sm text-gray-700">Proyecto activo</label>
                    </div>

                    <div className="flex gap-3 pt-2">
                        <button type="submit" disabled={processing}
                            className="px-6 py-2.5 bg-primary-800 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors disabled:opacity-60">
                            {processing ? 'Guardando...' : isEdit ? 'Actualizar' : 'Crear proyecto'}
                        </button>
                        <Link href="/admin/proyectos"
                            className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                            Cancelar
                        </Link>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
