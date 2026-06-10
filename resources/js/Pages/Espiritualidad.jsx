import { Link } from '@inertiajs/react';
import Layout from '../Components/Layout';

export default function Espiritualidad({ articles = [] }) {
    return (
        <Layout
            title="Espiritualidad"
            description="Reflexiones franciscanas para alimentar la fe y el compromiso con la vida fraterna. Artículos de espiritualidad de la Fundación Mesa del Señor."
        >
            <section className="bg-gradient-to-br from-accent-700 to-primary-800 text-white py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-secondary-400 text-sm font-medium uppercase tracking-widest">Reflexión y Fe</span>
                    <h1 className="mt-3 text-4xl md:text-5xl font-serif font-bold">Espiritualidad</h1>
                    <p className="mt-4 text-green-100 max-w-2xl mx-auto">
                        Reflexiones franciscanas para alimentar la fe y el compromiso con la vida fraterna.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {articles.length === 0 ? (
                        <p className="text-center text-gray-500 py-12">Próximamente nuevos artículos espirituales.</p>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {articles.map(article => (
                                <Link key={article.id} href={`/espiritualidad/${article.slug}`}
                                    className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden">
                                    {article.imagen ? (
                                        <img src={article.imagen} alt={article.titulo}
                                            className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300" />
                                    ) : (
                                        <div className="w-full h-52 bg-gradient-to-br from-accent-500 to-primary-700 flex items-center justify-center">
                                            <span className="text-6xl">✝️</span>
                                        </div>
                                    )}
                                    <div className="p-6">
                                        <h2 className="font-serif font-bold text-primary-800 text-lg group-hover:text-secondary-600 transition-colors leading-snug">
                                            {article.titulo}
                                        </h2>
                                        <p className="mt-2 text-sm text-gray-600 line-clamp-3">{article.extracto}</p>
                                        <span className="inline-flex items-center gap-1 mt-4 text-sm text-secondary-500 font-medium">
                                            Leer más →
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    );
}
