import { Link } from '@inertiajs/react';
import Layout from '../Components/Layout';

export default function Proyectos({ projects = [] }) {
    return (
        <Layout>
            <section className="bg-gradient-to-br from-primary-800 to-accent-700 text-white py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-secondary-400 text-sm font-medium uppercase tracking-widest">Impacto social</span>
                    <h1 className="mt-3 text-4xl md:text-5xl font-serif font-bold">Nuestros Proyectos</h1>
                    <p className="mt-4 text-primary-200 max-w-2xl mx-auto">
                        Cinco iniciativas que transforman comunidades con valores franciscanos de paz, fraternidad y cuidado de la creación.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-6">
                        {projects.map((project, i) => (
                            <div key={project.id}
                                className="flex flex-col md:flex-row gap-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 md:p-8">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 bg-gradient-to-br from-primary-700 to-secondary-500 rounded-2xl flex items-center justify-center text-white text-2xl font-serif font-bold shadow">
                                        {i + 1}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-xl font-serif font-bold text-primary-800 mb-2">
                                        {project.titulo}
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        {project.descripcion}
                                    </p>
                                    <Link
                                        href={`/proyecto/${project.id}`}
                                        className="inline-flex items-center gap-2 mt-4 px-5 py-2 bg-primary-800 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors">
                                        Ver más del proyecto
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 bg-cream text-center">
                <div className="max-w-xl mx-auto px-4">
                    <h2 className="text-2xl font-serif font-bold text-primary-900">¿Quieres apoyar estos proyectos?</h2>
                    <p className="mt-2 text-gray-600">Tu donación hace posible que estos proyectos continúen transformando vidas.</p>
                    <Link href="/apoyanos" className="inline-block mt-4 px-6 py-3 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold rounded-lg transition-colors">
                        Apóyanos
                    </Link>
                </div>
            </section>
        </Layout>
    );
}
