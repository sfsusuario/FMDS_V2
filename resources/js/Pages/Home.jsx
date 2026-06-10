import { useState, useEffect } from 'react';
import { Link, useForm, usePage } from '@inertiajs/react';
import Layout from '../Components/Layout';

const HERO_SLIDES = [
    '/img/hero_banner.jpg',
    '/img/hero_slider2.jpeg',
    '/img/proyectos/p3_main.jpeg',
];

const TEAM = [
    { name: 'Fray Nelson Tovar Alarcón', role: 'Presidente', email: 'ravot64@gmail.com', foto: '/img/equipo/presidente.jpeg' },
    { name: 'Fray Alonso Morales Duque', role: 'Secretario Ejecutivo', email: 'alonsony93@gmail.com', foto: '/img/equipo/secretario.jpeg' },
    { name: 'Florencia Cataño', role: 'Vicepresidenta', email: 'florenciacatano@gmail.com', foto: '/img/equipo/vicepresidente.jpeg' },
];

function HeroSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setCurrent(c => (c + 1) % HERO_SLIDES.length), 5000);
        return () => clearInterval(t);
    }, []);

    return (
        <div className="absolute inset-0">
            {HERO_SLIDES.map((src, i) => (
                <div
                    key={i}
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
                    style={{ backgroundImage: `url(${src})` }}
                />
            ))}
            <div className="absolute inset-0 bg-primary-900 bg-opacity-70" />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {HERO_SLIDES.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'}`}
                    />
                ))}
            </div>
        </div>
    );
}

function PrayerQuotes({ prayers }) {
    const [idx, setIdx] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (prayers.length <= 1) return;
        const t = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setIdx(i => (i + 1) % prayers.length);
                setVisible(true);
            }, 600);
        }, 7000);
        return () => clearInterval(t);
    }, [prayers.length]);

    if (!prayers.length) return null;
    const p = prayers[idx];

    return (
        <section className="relative py-24 bg-primary-900 overflow-hidden">
            {/* Dot pattern background */}
            <div className="absolute inset-0 opacity-[0.07]"
                style={{ backgroundImage: 'radial-gradient(#D4A017 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }} />

            {/* Soft vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary-900/60 via-transparent to-primary-900/60 pointer-events-none" />

            <div className="relative max-w-3xl mx-auto px-6 text-center">
                <span className="text-secondary-400 text-xs font-medium uppercase tracking-[0.3em]">
                    Voces de nuestra comunidad
                </span>
                <h2 className="mt-3 text-3xl font-serif font-bold text-white mb-12">
                    En oración juntos
                </h2>

                {/* Quote card */}
                <div className="transition-opacity duration-500" style={{ opacity: visible ? 1 : 0 }}>
                    <div className="relative px-10 py-2">
                        {/* Opening quote */}
                        <span className="absolute top-0 left-0 text-[7rem] font-serif text-secondary-400 opacity-30 leading-none select-none"
                            style={{ lineHeight: 1 }}>&ldquo;</span>

                        <p className="relative text-xl md:text-2xl font-serif italic text-white/90 leading-relaxed">
                            {p.plegaria.length > 300 ? p.plegaria.substring(0, 300) + '…' : p.plegaria}
                        </p>

                        {/* Closing quote */}
                        <span className="absolute bottom-0 right-0 text-[7rem] font-serif text-secondary-400 opacity-30 leading-none select-none"
                            style={{ lineHeight: 1 }}>&rdquo;</span>
                    </div>

                    {/* Author */}
                    <div className="mt-8 flex items-center justify-center gap-4">
                        <div className="h-px w-14 bg-secondary-400/40" />
                        <span className="text-secondary-300 font-medium text-sm tracking-widest uppercase">
                            {p.nombre}
                        </span>
                        <div className="h-px w-14 bg-secondary-400/40" />
                    </div>
                </div>

                {/* Dot navigation */}
                {prayers.length > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-10">
                        {prayers.map((_, i) => (
                            <button key={i}
                                onClick={() => { setVisible(false); setTimeout(() => { setIdx(i); setVisible(true); }, 300); }}
                                className={`rounded-full transition-all duration-300 ${
                                    i === idx
                                        ? 'w-7 h-2 bg-secondary-400'
                                        : 'w-2 h-2 bg-white/25 hover:bg-white/60'
                                }`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

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

export default function Home({ projects = [], latestNews = [], prayers = [] }) {
    return (
        <Layout>
            {/* Hero carousel */}
            <section className="relative text-white overflow-hidden" style={{ minHeight: '600px' }}>
                <HeroSlider />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40" style={{ zIndex: 1 }}>
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

            {/* Team */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-secondary-500 text-sm font-medium uppercase tracking-widest">Personas</span>
                        <h2 className="mt-2 text-3xl font-serif font-bold text-primary-900">Nuestro Equipo</h2>
                        <p className="mt-3 text-gray-600">Al servicio de Mesa del Señor</p>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {TEAM.map(member => (
                            <div key={member.email} className="text-center">
                                <div className="mx-auto w-36 h-36 rounded-full overflow-hidden shadow-lg ring-4 ring-secondary-200 mb-4">
                                    <img
                                        src={member.foto}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="font-serif font-bold text-primary-800 leading-snug">{member.name}</h3>
                                <p className="text-secondary-600 text-sm font-medium mt-1">{member.role}</p>
                                <a href={`mailto:${member.email}`}
                                    className="text-xs text-gray-500 hover:text-primary-700 transition-colors mt-1 block">
                                    {member.email}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section className="py-16 bg-white">
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
                                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group border border-gray-100">
                                <div className="h-44 overflow-hidden bg-gradient-to-br from-primary-700 to-secondary-500">
                                    {project.imagen ? (
                                        <img
                                            src={project.imagen}
                                            alt={project.titulo}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <span className="text-white font-bold text-3xl font-serif">{i + 1}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="p-5">
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
                <section className="py-16 bg-gray-50">
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
                                    className="group border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow bg-white">
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

            {/* Map */}
            <section className="bg-primary-900 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-serif font-bold text-white text-center mb-6">¿Dónde estamos?</h2>
                    <div className="rounded-2xl overflow-hidden shadow-xl" style={{ height: '420px' }}>
                        <iframe
                            src="https://www.google.com/maps/d/embed?mid=1igGGTuc9bZ10K7kNzbzIkkdbeVl9s98"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            title="Ubicaciones Fundación Mesa del Señor"
                        />
                    </div>
                </div>
            </section>

            {/* Prayer quotes */}
            <PrayerQuotes prayers={prayers} />

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
