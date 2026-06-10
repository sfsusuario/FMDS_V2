import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className="bg-primary-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="mb-4">
                            <img src="/img/logo_completo_2.png" alt="Fundación Mesa del Señor" className="h-14 w-auto opacity-90" />
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Lugar de encuentro espiritual que implementa proyectos altruistas en comunidades vulnerables de Colombia, con valores franciscanos de fraternidad y solidaridad.
                        </p>
                        <div className="flex gap-3 mt-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                                className="w-8 h-8 bg-primary-700 rounded-full flex items-center justify-center hover:bg-secondary-500 transition-colors">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                </svg>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                                className="w-8 h-8 bg-primary-700 rounded-full flex items-center justify-center hover:bg-secondary-500 transition-colors">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" />
                                    <circle cx="12" cy="12" r="4" strokeWidth="2" />
                                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                                </svg>
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                                className="w-8 h-8 bg-primary-700 rounded-full flex items-center justify-center hover:bg-secondary-500 transition-colors">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
                                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Proyectos</h3>
                        <ul className="space-y-2">
                            {[
                                ['Formación Franciscana', '/proyecto/1'],
                                ['Niñez Franciscana', '/proyecto/2'],
                                ['Escuela Paz y Bien', '/proyecto/3'],
                                ['Hilando nuestros Sueños', '/proyecto/4'],
                                ['Sembradores de Paz', '/proyecto/5'],
                            ].map(([label, href]) => (
                                <li key={href}>
                                    <Link href={href} className="text-sm text-gray-400 hover:text-secondary-400 transition-colors">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* More links */}
                    <div>
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Institución</h3>
                        <ul className="space-y-2">
                            {[
                                ['Espiritualidad', '/espiritualidad'],
                                ['Noticias', '/noticias'],
                                ['Apóyanos', '/apoyanos'],
                                ['DIAN-ESAL', '/DIAN-ESAL'],
                                ['Código Ético', '/codigo_etico'],
                                ['Contacto', '/contacto'],
                            ].map(([label, href]) => (
                                <li key={href}>
                                    <Link href={href} className="text-sm text-gray-400 hover:text-secondary-400 transition-colors">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contacto</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex gap-2">
                                <svg className="w-4 h-4 text-secondary-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>300 654 4489<br />604 603 0602<br />310 809 9780</span>
                            </li>
                            <li className="flex gap-2">
                                <svg className="w-4 h-4 text-secondary-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:fundacionmesadelsenorofm@gmail.com" className="hover:text-secondary-400 transition-colors break-all">
                                    fundacionmesadelsenorofm@gmail.com
                                </a>
                            </li>
                            <li className="flex gap-2">
                                <svg className="w-4 h-4 text-secondary-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Calle 55 No. 39-54, Barrio Boston, Medellín</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-primary-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} Fundación Mesa del Señor. Todos los derechos reservados.</p>
                    <div className="flex items-center gap-3">
                        <a href="https://fierro.dev" target="_blank" rel="noopener noreferrer"
                            className="text-gray-600 hover:text-secondary-400 transition-colors">
                            fierro.dev
                        </a>
                        <span className="text-gray-700">·</span>
                        <a href="/admin/login" className="text-gray-700 hover:text-gray-500 transition-colors opacity-40 hover:opacity-70">
                            Admin
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
