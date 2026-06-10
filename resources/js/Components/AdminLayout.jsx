import { Link, useForm, usePage } from '@inertiajs/react';

const NAV = [
    { href: '/admin',               label: 'Dashboard',      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { href: '/admin/proyectos',     label: 'Proyectos',      icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
    { href: '/admin/noticias',      label: 'Noticias',       icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z' },
    { href: '/admin/espiritualidad',label: 'Espiritualidad', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
    { href: '/admin/plegarias',     label: 'Plegarias',      icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
];

export default function AdminLayout({ children, title = 'Panel Admin' }) {
    const { url } = usePage();
    const { post } = useForm();

    const logout = (e) => {
        e.preventDefault();
        post('/admin/logout');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
            <aside className="w-56 bg-primary-900 text-white flex flex-col flex-shrink-0">
                <div className="px-5 py-5 border-b border-primary-700">
                    <Link href="/admin" className="block">
                        <img src="/img/logo_completo_2.png" alt="Admin" className="h-10 w-auto" />
                    </Link>
                    <p className="text-xs text-primary-400 mt-1">Panel de administración</p>
                </div>

                <nav className="flex-1 py-4 space-y-1 px-2">
                    {NAV.map(item => {
                        const active = url === item.href || (item.href !== '/admin' && url.startsWith(item.href));
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                                    active
                                        ? 'bg-secondary-500 text-white'
                                        : 'text-primary-300 hover:bg-primary-800 hover:text-white'
                                }`}
                            >
                                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                                </svg>
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="px-4 py-4 border-t border-primary-700">
                    <a href="/" target="_blank" className="flex items-center gap-2 text-xs text-primary-400 hover:text-white mb-3 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Ver sitio público
                    </a>
                    <form onSubmit={logout}>
                        <button type="submit" className="w-full text-left flex items-center gap-2 text-xs text-primary-400 hover:text-red-400 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            Cerrar sesión
                        </button>
                    </form>
                </div>
            </aside>

            {/* Main */}
            <div className="flex-1 flex flex-col min-w-0">
                <header className="bg-white border-b border-gray-200 px-6 py-4">
                    <h1 className="text-lg font-semibold text-gray-800">{title}</h1>
                </header>
                <main className="flex-1 p-6 overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
