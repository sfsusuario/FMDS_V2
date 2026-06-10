import { Link } from '@inertiajs/react';
import Layout from '../Components/Layout';

export default function Noticias({ news }) {
    const articles = news?.data ?? [];

    return (
        <Layout
            title="Noticias"
            description="Últimas noticias y novedades de la Fundación Mesa del Señor. Proyectos sociales franciscanos en Colombia."
        >
            <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-secondary-400 text-sm font-medium uppercase tracking-widest">Actualidad</span>
                    <h1 className="mt-3 text-4xl md:text-5xl font-serif font-bold">Noticias</h1>
                    <p className="mt-4 text-primary-200">Lo más reciente de la Fundación Mesa del Señor.</p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {articles.length === 0 ? (
                        <div className="text-center py-20">
                            <span className="text-6xl">📰</span>
                            <p className="mt-4 text-gray-500 text-lg">Próximamente publicaremos noticias.</p>
                        </div>
                    ) : (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {articles.map(article => (
                                <Link key={article.id} href={`/noticias/${article.slug}`}
                                    className="group border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                    {article.imagen ? (
                                        <img src={article.imagen} alt={article.titulo}
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                                    ) : (
                                        <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                                            <span className="text-4xl">📰</span>
                                        </div>
                                    )}
                                    <div className="p-5">
                                        {article.publicado_en && (
                                            <p className="text-xs text-gray-400 mb-2">
                                                {new Date(article.publicado_en).toLocaleDateString('es-CO', {
                                                    year: 'numeric', month: 'long', day: 'numeric'
                                                })}
                                            </p>
                                        )}
                                        <h2 className="font-serif font-bold text-primary-800 group-hover:text-secondary-600 transition-colors leading-snug">
                                            {article.titulo}
                                        </h2>
                                        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{article.extracto}</p>
                                        <span className="inline-block mt-3 text-sm text-secondary-500 font-medium">Leer más →</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}

                    {/* Pagination */}
                    {news?.links && news.links.length > 3 && (
                        <div className="flex justify-center gap-2 mt-10">
                            {news.links.map((link, i) => (
                                link.url ? (
                                    <Link key={i} href={link.url}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                            link.active
                                                ? 'bg-primary-800 text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-primary-100'
                                        }`}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                    />
                                ) : (
                                    <span key={i}
                                        className="px-4 py-2 rounded-lg text-sm text-gray-400 bg-gray-50"
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                    />
                                )
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    );
}
