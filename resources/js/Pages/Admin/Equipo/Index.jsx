import { Link, useForm, usePage } from '@inertiajs/react';
import AdminLayout from '../../../Components/AdminLayout';

export default function EquipoIndex({ members }) {
    const { flash } = usePage().props;
    const { delete: destroy } = useForm();

    const remove = (id) => {
        if (confirm('¿Eliminar este integrante del equipo?')) {
            destroy(`/admin/equipo/${id}`);
        }
    };

    return (
        <AdminLayout title="Equipo directivo">
            {flash?.success && (
                <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-lg text-sm">{flash.success}</div>
            )}

            <div className="flex justify-between items-center mb-5">
                <p className="text-sm text-gray-500">{members.length} integrante(s)</p>
                <Link href="/admin/equipo/crear"
                    className="px-4 py-2 bg-primary-800 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors">
                    + Nuevo integrante
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="text-left px-4 py-3 text-gray-600 font-medium">Foto</th>
                            <th className="text-left px-4 py-3 text-gray-600 font-medium">Nombre</th>
                            <th className="text-left px-4 py-3 text-gray-600 font-medium">Cargo</th>
                            <th className="text-left px-4 py-3 text-gray-600 font-medium">Email</th>
                            <th className="text-left px-4 py-3 text-gray-600 font-medium">Orden</th>
                            <th className="text-left px-4 py-3 text-gray-600 font-medium">Estado</th>
                            <th className="px-4 py-3"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {members.map(m => (
                            <tr key={m.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-3">
                                    {m.foto
                                        ? <img src={m.foto} className="w-10 h-10 object-cover rounded-full" alt="" />
                                        : <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-300">—</div>
                                    }
                                </td>
                                <td className="px-4 py-3 font-medium text-gray-800">{m.nombre}</td>
                                <td className="px-4 py-3 text-gray-600">{m.cargo}</td>
                                <td className="px-4 py-3 text-gray-600">{m.email || '—'}</td>
                                <td className="px-4 py-3 text-gray-600">{m.orden}</td>
                                <td className="px-4 py-3">
                                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${m.activo ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                                        {m.activo ? 'Activo' : 'Inactivo'}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-right">
                                    <Link href={`/admin/equipo/${m.id}/edit`}
                                        className="text-primary-700 hover:text-primary-900 font-medium mr-4">Editar</Link>
                                    <button onClick={() => remove(m.id)}
                                        className="text-red-500 hover:text-red-700 font-medium">Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}
