import { usePage, router } from '@inertiajs/react';
import AdminLayout from '../../../Components/AdminLayout';

const ESTADO_BADGE = {
    pendiente:  'bg-yellow-100 text-yellow-800',
    aprobada:   'bg-green-100  text-green-800',
    rechazada:  'bg-red-100    text-red-700',
};

export default function PlegariasIndex({ prayers }) {
    const { flash } = usePage().props;

    const action = (url) => router.post(url);
    const remove = (id) => { if (confirm('¿Eliminar esta plegaria?')) router.delete(`/admin/plegarias/${id}`); };

    return (
        <AdminLayout title="Plegarias">
            {flash?.success && (
                <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-lg text-sm">{flash.success}</div>
            )}

            {/* Filtros de estado */}
            <div className="flex gap-2 mb-5 text-sm">
                {['todas', 'pendiente', 'aprobada', 'rechazada'].map(f => (
                    <button key={f}
                        onClick={() => router.get('/admin/plegarias', f !== 'todas' ? { estado: f } : {})}
                        className="px-3 py-1 rounded-full border border-gray-200 hover:bg-gray-100 capitalize transition-colors">
                        {f}
                    </button>
                ))}
                <span className="ml-auto text-gray-500">{prayers.total} plegaria(s)</span>
            </div>

            <div className="space-y-3">
                {prayers.data.length === 0 && (
                    <div className="bg-white rounded-xl p-8 text-center text-gray-400">No hay plegarias.</div>
                )}

                {prayers.data.map(p => (
                    <div key={p.id} className="bg-white rounded-xl shadow-sm p-5">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                            {/* Info */}
                            <div className="flex-1 min-w-0">
                                <div className="flex flex-wrap items-center gap-2 mb-1">
                                    <span className="font-semibold text-gray-800">{p.nombre}</span>
                                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${ESTADO_BADGE[p.estado]}`}>
                                        {p.estado}
                                    </span>
                                    {p.visible && (
                                        <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-medium">
                                            Visible
                                        </span>
                                    )}
                                </div>
                                <div className="flex flex-wrap gap-3 text-xs text-gray-400 mb-2">
                                    {p.email && <a href={`mailto:${p.email}`} className="hover:text-primary-700">{p.email}</a>}
                                    {p.telefono && <span>{p.telefono}</span>}
                                    <span>{new Date(p.created_at).toLocaleDateString('es-CO', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                                </div>
                                <p className="text-gray-700 leading-relaxed">{p.plegaria}</p>
                            </div>

                            {/* Acciones */}
                            <div className="flex flex-col gap-1.5 flex-shrink-0">
                                {p.estado === 'pendiente' && (
                                    <>
                                        <button onClick={() => action(`/admin/plegarias/${p.id}/aprobar`)}
                                            className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-xs font-medium rounded-lg transition-colors">
                                            Aprobar
                                        </button>
                                        <button onClick={() => action(`/admin/plegarias/${p.id}/rechazar`)}
                                            className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-xs font-medium rounded-lg transition-colors">
                                            Rechazar
                                        </button>
                                    </>
                                )}
                                {p.estado === 'aprobada' && (
                                    <button onClick={() => action(`/admin/plegarias/${p.id}/visible`)}
                                        className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${
                                            p.visible
                                                ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}>
                                        {p.visible ? 'Ocultar' : 'Publicar'}
                                    </button>
                                )}
                                {p.estado === 'rechazada' && (
                                    <button onClick={() => action(`/admin/plegarias/${p.id}/aprobar`)}
                                        className="px-3 py-1 bg-green-100 text-green-700 hover:bg-green-200 text-xs font-medium rounded-lg transition-colors">
                                        Re-aprobar
                                    </button>
                                )}
                                <button onClick={() => remove(p.id)}
                                    className="px-3 py-1 bg-gray-100 hover:bg-red-100 text-gray-500 hover:text-red-600 text-xs font-medium rounded-lg transition-colors">
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </AdminLayout>
    );
}
