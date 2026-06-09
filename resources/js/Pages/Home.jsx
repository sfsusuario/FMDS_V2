import { useState } from 'react';
import { Link, useForm, usePage } from '@inertiajs/react';
import Layout from '../Components/Layout';

function PrayerForm() {
    const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
        nombre: '', telefono: '', email: '', plegaria: '',
    });
    const { flash } = usePage().props;

    const submit = (e) => {
        e.preventDefault();
        post('/plegaria', { onSuccess: () => reset() });
    };

    return (
        <section className="bg-primary-800 text-white py-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <span className="text-secondary-400 text-sm font-medium uppercase tracking-widest">Oración</span>
                    <h2 className="mt-2 text-3xl font-serif font-bold">Envíanos tu Plegaria</h2>
                    <p className="mt-3 text-primary-200">Te acompañamos en oración. Comparte tu intención y la elevaremos juntos.</p>
                </div>

                {flash?.success && (
                    <div className="mb-6 p-4 bg-accent-500 rounded-lg text-center text-white">
                        {flash.success}
                    </div>
                )}

                <form onSubmit={submit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-primary-100 mb-1">Nombre *</label>
                            <input
                                type="text"
                                value={data.nombre}
                                onChange={e => setData('nombre', e.target.value)}
                                className="w-full px-4 py-2.5 bg-primary-700 border border-primary-600 rounded-lg text-white placeholder-primary-400 focus:outline-none focus:border-secondary-400 transition-colors"
                                placeholder="Tu nombre"
                            />
                            {errors.nombre && <p className="text-red-300 text-xs mt-1">{errors.nombre}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-primary-100 mb-1">Teléfono (opcional)</label>
                            <input
                                type="tel"
                                value={data.telefono}
                                onChange={e => setData('telefono', e.target.value)}
                                className="w-full px-4 py-2.5 bg-primary-700 border border-primary-600 rounded-lg text-white placeholder-primary-400 focus:outline-none focus:border-secondary-400 transition-colors"
                                placeholder="Tu teléfono"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-primary-100 mb-1">Email (opcional)</label>
                        <input
                            type="email"
                            value={data.email}
                            onChange={e => setData('email', e.target.value)}
                            className="w-full px-4 py-2.5 bg-primary-700 border border-primary-600 rounded-lg text-white placeholder-primary-400 focus:outline-none focus:border-secondary-400 transition-colors"
                            placeholder="Tu correo electrónico"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-primary-100 mb-1">Tu plegaria *</label>
                        <textarea
                            rows={5}
                            value={data.plegaria}
                            onChange={e => setData('plegaria', e.target.value)}
                            className="w-full px-4 py-2.5 bg-primary-700 border border-primary-600 rounded-lg text-white placeholder-primary-400 focus:outline-none focus:border-secondary-400 transition-colors resize-none"
                            placeholder="Escribe aquí tu intención de oración..."
                        />
                        {errors.plegaria && <p className="text-red-300 text-xs mt-1">{errors.plegaria}</p>}
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            disabled={processing}
                            className="px-8 py-3 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold rounded-lg transition-colors duration-200 disabled:opacity-60"
                        >
                            {processing ? 'Enviando...' : 'Enviar plegaria'}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default function Home({ projects = [], latestNews = [] }) {
    return (
        <Layout>
            {/* Hero */}
            <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-accent-700 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                    }} />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                    <div className="max-w-3xl">
                        <span className="inline-block px-3 py-1 bg-secondary-500 bg-opacity-20 border border-secondary-400 text-secondary-300 text-xs font-medium rounded-full uppercase tracking-widest mb-6">
                            Fundación Mesa del Señor
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
                            La pasión de<br />
                            <span className="text-secondary-400">compartir</span>
                        </h1>
                        <p className="text-lg md:text-xl text-primary-200 leading-relaxed mb-8 max-w-2xl">
                            Somos un lugar de encuentro espiritual que trabaja en comunidades vulnerables de Colombia, implementando proyectos altruistas con valores franciscanos de fraternidad y solidaridad.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/proyectos"
                                className="px-6 py-3 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold rounded-lg transition-colors duration-200">
                                Conoce nuestros proyectos
                            </Link>
                            <Link href="/apoyanos"
                                className="px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-800 font-semibold rounded-lg transition-colors duration-200">
                                Apóyanos
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-cream py-10 border-b border-primary-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {[
                            { num: '40+', label: 'Años en Colombia' },
                            { num: '5', label: 'Proyectos activos' },
                            { num: '3', label: 'Ciudades' },
                            { num: '∞', label: 'Vidas tocadas' },
                        ].map(item => (
                            <div key={item.label}>
                                <p className="text-3xl font-serif font-bold text-primary-800">{item.num}</p>
                                <p className="text-sm text-gray-600 mt-1">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-secondary-500 text-sm font-medium uppercase tracking-widest">Quiénes somos</span>
                            <h2 className="mt-2 text-3xl font-serif font-bold text-primary-900 leading-tight">
                                Un puente entre la fe y la acción social
                            </h2>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                La Fundación Mesa del Señor es un espacio de encuentro espiritual y acción social inspirado en los valores franciscanos. Durante más de 40 años, la Provincia Franciscana San Pablo Apóstol ha trabajado en Colombia construyendo fraternidad y solidaridad.
                            </p>
                            <p className="mt-3 text-gray-600 leading-relaxed">
                                Operamos en Medellín, Cali y la región del Catatumbo, implementando proyectos que transforman vidas a través de la educación, la música, las artesanías y la formación espiritual.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-3">
                                <Link href="/apoyanos" className="px-5 py-2.5 bg-primary-800 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium text-sm">
                                    Donaciones
                                </Link>
                                <Link href="/contacto" className="px-5 py-2.5 border border-primary-800 text-primary-800 rounded-lg hover:bg-primary-50 transition-colors font-medium text-sm">
                                    Contáctanos
                                </Link>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: '🕊️', title: 'Paz', desc: 'Sembramos paz en comunidades afectadas por el conflicto' },
                                { icon: '🎵', title: 'Arte', desc: 'La música silencia los fusiles en el Catatumbo' },
                                { icon: '🌱', title: 'Formación', desc: 'Educamos con valores franciscanos' },
                                { icon: '🤝', title: 'Fraternidad', desc: 'Unidos en la comunión y la solidaridad' },
                            ].map(item => (
                                <div key={item.title} className="bg-cream rounded-xl p-5">
                                    <span className="text-3xl">{item.icon}</span>
                                    <h3 className="mt-2 font-semibold text-primary-800">{item.title}</h3>
                                    <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-secondary-500 text-sm font-medium uppercase tracking-widest">Impacto</span>
                        <h2 className="mt-2 text-3xl font-serif font-bold text-primary-900">Nuestros Proyectos</h2>
                        <p className="mt-3 text-gray-600 max-w-xl mx-auto">
                            Cinco iniciativas que transforman vidas en las comunidades más vulnerables de Colombia.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.slice(0, 6).map((project, i) => (
                            <Link key={project.id} href={`/proyecto/${project.id}`}
                                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group">
                                <div className="h-3 bg-gradient-to-r from-primary-700 to-secondary-500" />
                                <div className="p-6">
                                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                                        <span className="text-primary-800 font-bold text-lg">{i + 1}</span>
                                    </div>
                                    <h3 className="font-serif font-bold text-primary-800 group-hover:text-secondary-600 transition-colors leading-snug">
                                        {project.titulo}
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                                        {project.descripcion}
                                    </p>
                                    <span className="inline-flex items-center gap-1 mt-4 text-sm text-secondary-500 font-medium group-hover:gap-2 transition-all">
                                        Conocer más
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/proyectos" className="px-6 py-3 border-2 border-primary-800 text-primary-800 hover:bg-primary-800 hover:text-white font-semibold rounded-lg transition-colors duration-200">
                            Ver todos los proyectos
                        </Link>
                    </div>
                </div>
            </section>

            {/* News */}
            {latestNews.length > 0 && (
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-end mb-10">
                            <div>
                                <span className="text-secondary-500 text-sm font-medium uppercase tracking-widest">Actualidad</span>
                                <h2 className="mt-1 text-3xl font-serif font-bold text-primary-900">Noticias</h2>
                            </div>
                            <Link href="/noticias" className="text-sm text-primary-700 hover:text-secondary-500 font-medium hidden sm:block">
                                Ver todas →
                            </Link>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {latestNews.map(article => (
                                <Link key={article.id} href={`/noticias/${article.slug}`}
                                    className="group border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
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
                                                {new Date(article.publicado_en).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
                                            </p>
                                        )}
                                        <h3 className="font-serif font-bold text-primary-800 group-hover:text-secondary-600 transition-colors leading-snug">
                                            {article.titulo}
                                        </h3>
                                        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{article.extracto}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Prayer form */}
            <PrayerForm />

            {/* Donation CTA */}
            <section className="py-16 bg-cream">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-secondary-500 text-sm font-medium uppercase tracking-widest">Colabora</span>
                    <h2 className="mt-2 text-3xl font-serif font-bold text-primary-900">
                        Donar es una inversión en la humanidad
                    </h2>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        Tu apoyo nos permite continuar tocando vidas, sembrando paz y formando comunidades más justas y fraternales en Colombia.
                    </p>
                    <Link href="/apoyanos"
                        className="inline-block mt-6 px-8 py-4 bg-secondary-500 hover:bg-secondary-600 text-white font-bold text-lg rounded-xl transition-colors duration-200 shadow-lg">
                        Apoya la Fundación
                    </Link>
                </div>
            </section>
        </Layout>
    );
}
