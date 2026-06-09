import { useState } from 'react';
import { Link } from '@inertiajs/react';

const navItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Apóyanos', href: '/apoyanos' },
    {
        label: 'Proyectos',
        href: '/proyectos',
        children: [
            { label: 'Formación Franciscana', href: '/proyecto/1' },
            { label: 'Niñez Franciscana', href: '/proyecto/2' },
            { label: 'Escuela de Música Paz y Bien', href: '/proyecto/3' },
            { label: 'Hilando nuestros Sueños', href: '/proyecto/4' },
            { label: 'Sembradores de Paz', href: '/proyecto/5' },
        ],
    },
    {
        label: 'Espiritualidad',
        href: '/espiritualidad',
        children: [
            { label: 'La iglesia es mi casa', href: '/espiritualidad/la-iglesia-es-mi-casa' },
            { label: 'Mi pequeño Pesebre', href: '/espiritualidad/mi-pequeno-pesebre' },
            { label: 'Pidiendo la paz', href: '/espiritualidad/pidiendo-alcanzar-la-paz' },
        ],
    },
    { label: 'DIAN-ESAL', href: '/DIAN-ESAL' },
    { label: 'Código Ético', href: '/codigo_etico' },
    { label: 'Noticias', href: '/noticias' },
    { label: 'Contacto', href: '/contacto' },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 flex-shrink-0">
                        <img src="/img/logo_completo_2.png" alt="Fundación Mesa del Señor" className="h-10 w-auto" />
                    </Link>

                    {/* Desktop menu */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navItems.map((item) => (
                            <div key={item.label} className="relative group">
                                <Link
                                    href={item.href}
                                    className="px-3 py-2 text-sm text-gray-700 hover:text-primary-800 font-medium rounded transition-colors duration-150 flex items-center gap-1"
                                >
                                    {item.label}
                                    {item.children && (
                                        <svg className="w-3 h-3 opacity-60" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                </Link>
                                {item.children && (
                                    <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-lg py-2 min-w-48 border border-gray-100">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.label}
                                                href={child.href}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-cream hover:text-primary-800 transition-colors"
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden p-2 rounded-md text-gray-600 hover:text-primary-800 hover:bg-gray-100"
                        aria-label="Abrir menú"
                    >
                        {mobileOpen ? (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-3 space-y-1">
                    {navItems.map((item) => (
                        <div key={item.label}>
                            <div className="flex items-center justify-between">
                                <Link
                                    href={item.href}
                                    className="block py-2 text-sm text-gray-700 hover:text-primary-800 font-medium"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {item.label}
                                </Link>
                                {item.children && (
                                    <button
                                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                                        className="p-1 text-gray-500"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                )}
                            </div>
                            {item.children && openDropdown === item.label && (
                                <div className="pl-4 space-y-1 border-l-2 border-primary-200 ml-2">
                                    {item.children.map((child) => (
                                        <Link
                                            key={child.label}
                                            href={child.href}
                                            className="block py-1.5 text-sm text-gray-600 hover:text-primary-800"
                                            onClick={() => setMobileOpen(false)}
                                        >
                                            {child.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </nav>
    );
}
