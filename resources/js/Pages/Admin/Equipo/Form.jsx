import { useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
import AdminLayout from '../../../Components/AdminLayout';

export default function EquipoForm({ member }) {
    const isEdit = !!member;
    const { data, setData, post, processing, errors } = useForm({
        nombre: member?.nombre ?? '',
        cargo:  member?.cargo  ?? '',
        email:  member?.email  ?? '',
        orden:  member?.orden  ?? 0,
        activo: member?.activo ?? true,
        foto:   null,
    });

    const [preview, setPreview] = useState(member?.foto ?? null);

    const handleFile = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setData('foto', file);
        setPreview(URL.createObjectURL(file));
    };

    const submit = (e) => {
        e.preventDefault();
        const url = isEdit ? `/admin/equipo/${member.id}` : '/admin/equipo';
        post(url, { forceFormData: true });
    };

    return (
        <AdminLayout title={isEdit ? 'Editar Integrante' : 'Nuevo Integrante'}>
            <div className="max-w-2xl">
                <Link href="/admin/equipo" className="text-sm text-primary-700 hover:underline mb-5 inline-block">
                    ← Volver al equipo
                </Link>

                <form onSubmit={submit} className="bg-white rounded-xl shadow-sm p-6 space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nombre *</label>
                        <input type="text" value={data.nombre} onChange={e => setData('nombre', e.target.value)}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500" />
                        {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Cargo *</label>
                        <input type="text" value={data.cargo} onChange={e => setData('cargo', e.target.value)}
                            placeholder="Presidente, Secretario Ejecutivo..."
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500" />
                        {errors.cargo && <p className="text-red-500 text-xs mt-1">{errors.cargo}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" value={data.email} onChange={e => setData('email', e.target.value)}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500" />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Orden</label>
                        <input type="number" min="0" value={data.orden} onChange={e => setData('orden', e.target.value)}
                            className="w-32 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500" />
                        <p className="text-xs text-gray-400 mt-1">Posición en la que aparece (menor = primero)</p>
                        {errors.orden && <p className="text-red-500 text-xs mt-1">{errors.orden}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Foto</label>
                        {preview && (
                            <img src={preview} className="w-28 h-28 object-cover rounded-full mb-3" alt="preview" />
                        )}
                        <input type="file" accept="image/*" onChange={handleFile}
                            className="text-sm text-gray-600 file:mr-3 file:py-1.5 file:px-4 file:rounded-lg file:border-0 file:bg-primary-800 file:text-white file:text-sm file:cursor-pointer" />
                        {errors.foto && <p className="text-red-500 text-xs mt-1">{errors.foto}</p>}
                    </div>

                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="activo" checked={data.activo}
                            onChange={e => setData('activo', e.target.checked)}
                            className="w-4 h-4 rounded border-gray-300 text-primary-800" />
                        <label htmlFor="activo" className="text-sm text-gray-700">Visible en el sitio</label>
                    </div>

                    <div className="flex gap-3 pt-2">
                        <button type="submit" disabled={processing}
                            className="px-6 py-2.5 bg-primary-800 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors disabled:opacity-60">
                            {processing ? 'Guardando...' : isEdit ? 'Actualizar' : 'Crear integrante'}
                        </button>
                        <Link href="/admin/equipo"
                            className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                            Cancelar
                        </Link>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
