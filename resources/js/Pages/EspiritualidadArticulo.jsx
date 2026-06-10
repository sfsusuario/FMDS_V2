import { Link } from '@inertiajs/react';
import Layout from '../Components/Layout';

export default function EspiritualidadArticulo({ article }) {
    return (
        <Layout
            title={article.titulo}
            description={article.extracto || article.titulo}
            image={article.imagen || undefined}
            type="article"
        >
            <div className="bg-gradient-to-br from-accent-700 to-primary-800 text-white py-14">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/espiritualidad" className="inline-flex items-center gap-2 text-green-200 hover:text-white text-sm mb-6 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Espiritualidad
                    </Link>
                    <h1 className="text-3xl md:text-4xl font-serif font-bold">{article.titulo}</h1>
                    <p className="mt-3 text-green-100">{article.extracto}</p>
                </div>
            </div>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                {article.imagen && (
                    <img src={article.imagen} alt={article.titulo}
                        className="w-full h-72 object-cover rounded-2xl shadow mb-10" />
                )}
                <div
                    className="prose prose-lg max-w-none text-gray-700 prose-headings:text-primary-800 prose-a:text-secondary-500"
                    dangerouslySetInnerHTML={{ __html: article.contenido }}
                />
            </div>
        </Layout>
    );
}
