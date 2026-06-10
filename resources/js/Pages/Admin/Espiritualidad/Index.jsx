import { Link, useForm, usePage } from '@inertiajs/react';
import AdminLayout from '../../../Components/AdminLayout';

export default function EspiritualidadIndex({ articles }) {
    const { flash } = usePage().props;
    const { delete: destroy } = useForm();

    const remove = (id) => {
        if (confirm('¿Eliminar este artículo?')) destroy(`/admin/espiritualidad/${id}`);
    };

    return (
        <AdminLayout title="Espiritualidad">
            {flash?.success && (
                <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-lg text-sm">{flash.success}</div>
            )}
            <div className="flex justify-between items-center mb-5">
                <p className="text-sm text-gray-500">{articles.length} artículo(s)</p>
                <Link href="/admin/espiritualidad/crear"
                    className="px-4 py-2 bg-primary-800 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors">
                    + Nuevo artículo
                </Link>
            </div>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="text-left px-4 py-3 text-gray-600 font-medium">Imagen</th>
                            <th className="text-left px-4 py-3 text-gray-600 font-medium">Título</th>
                            <th className="px-4 py-3"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {articles.map(a => (
                            <tr key={a.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-3">
                                    {a.imagen
                                        ? <img src={a.imagen} className="w-14 h-10 object-cover rounded" alt="" />
                                        : <div className="w-14 h-10 bg-gray-100 rounded flex items-center justify-center text-gray-300">—</div>
                                    }
                                </td>
                                <td className="px-4 py-3 font-medium text-gray-800">{a.titulo}</td>
                                <td className="px-4 py-3 text-right">
                                    <Link href={`/admin/espiritualidad/${a.id}/edit`}
                                        className="text-primary-700 hover:text-primary-900 font-medium mr-4">Editar</Link>
                                    <button onClick={() => remove(a.id)}
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
