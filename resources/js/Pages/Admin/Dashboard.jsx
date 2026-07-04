import { Link } from '@inertiajs/react';
import AdminLayout from '../../Components/AdminLayout';

const CARDS = [
    { label: 'Proyectos',      key: 'projects',     href: '/admin/proyectos',      color: 'bg-blue-500' },
    { label: 'Noticias',       key: 'news',          href: '/admin/noticias',       color: 'bg-green-500' },
    { label: 'Espiritualidad', key: 'spirituality',  href: '/admin/espiritualidad', color: 'bg-purple-500' },
    { label: 'Plegarias',      key: 'prayers',       href: '/admin/plegarias',      color: 'bg-rose-500' },
    { label: 'Equipo',         key: 'team',          href: '/admin/equipo',         color: 'bg-amber-500' },
];

export default function Dashboard({ stats }) {
    return (
        <AdminLayout title="Dashboard">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                {CARDS.map(c => (
                    <Link key={c.key} href={c.href}
                        className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition-shadow flex items-center gap-4">
                        <div className={`${c.color} w-12 h-12 rounded-xl flex items-center justify-center text-white text-2xl font-bold`}>
                            {stats[c.key]}
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">{c.label}</p>
                            <p className="text-lg font-semibold text-gray-800">{stats[c.key]} registros</p>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="font-semibold text-gray-700 mb-4">Accesos rápidos</h2>
                <div className="flex flex-wrap gap-3">
                    {[
                        ['/admin/proyectos/crear',      'Nuevo proyecto'],
                        ['/admin/noticias/crear',       'Nueva noticia'],
                        ['/admin/espiritualidad/crear', 'Nuevo artículo'],
                        ['/admin/plegarias',            'Ver plegarias'],
                    ].map(([href, label]) => (
                        <Link key={href} href={href}
                            className="px-4 py-2 bg-primary-800 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors">
                            {label}
                        </Link>
                    ))}
                </div>
            </div>
        </AdminLayout>
    );
}
