import { useForm, usePage } from '@inertiajs/react';
import Layout from '../Components/Layout';

const leaders = [
    { name: 'Fray Nelson Tovar Alarcón', role: 'Presidente', email: 'ravot64@gmail.com' },
    { name: 'Fray Alonso Morales Duque', role: 'Secretario Ejecutivo', email: 'alonsony93@gmail.com' },
    { name: 'Florencia Cataño', role: 'Vicepresidenta', email: 'florenciacatano@gmail.com' },
];

const locations = [
    { city: 'Medellín', address: 'Calle 55 No. 39-54, Barrio Boston' },
    { city: 'Cali (sede 1)', address: 'Carrera 101 #12-39, Casa 21' },
    { city: 'Cali (Aguablanca)', address: 'Calle 108 No. 26, Aguablanca' },
];

export default function Contacto() {
    const { flash } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        nombre: '', email: '', asunto: '', mensaje: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post('/contacto', { onSuccess: () => reset() });
    };

    return (
        <Layout>
            <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-secondary-400 text-sm font-medium uppercase tracking-widest">Estamos aquí</span>
                    <h1 className="mt-3 text-4xl md:text-5xl font-serif font-bold">Contacto</h1>
                    <p className="mt-4 text-primary-200">Escríbenos o llámanos. Estamos disponibles para ti.</p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Form */}
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-primary-900 mb-6">Envíanos un mensaje</h2>

                            {flash?.success && (
                                <div className="mb-6 p-4 bg-accent-500 text-white rounded-lg">
                                    {flash.success}
                                </div>
                            )}

                            <form onSubmit={submit} className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Nombre *</label>
                                        <input
                                            type="text"
                                            value={data.nombre}
                                            onChange={e => setData('nombre', e.target.value)}
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                                            placeholder="Tu nombre"
                                        />
                                        {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                                        <input
                                            type="email"
                                            value={data.email}
                                            onChange={e => setData('email', e.target.value)}
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                                            placeholder="tu@email.com"
                                        />
                                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Asunto *</label>
                                    <input
                                        type="text"
                                        value={data.asunto}
                                        onChange={e => setData('asunto', e.target.value)}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                                        placeholder="¿En qué te podemos ayudar?"
                                    />
                                    {errors.asunto && <p className="text-red-500 text-xs mt-1">{errors.asunto}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje *</label>
                                    <textarea
                                        rows={6}
                                        value={data.mensaje}
                                        onChange={e => setData('mensaje', e.target.value)}
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors resize-none"
                                        placeholder="Cuéntanos..."
                                    />
                                    {errors.mensaje && <p className="text-red-500 text-xs mt-1">{errors.mensaje}</p>}
                                </div>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full py-3 bg-primary-800 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-60"
                                >
                                    {processing ? 'Enviando...' : 'Enviar mensaje'}
                                </button>
                            </form>
                        </div>

                        {/* Info */}
                        <div className="space-y-8">
                            {/* Leaders */}
                            <div>
                                <h2 className="text-2xl font-serif font-bold text-primary-900 mb-4">Equipo directivo</h2>
                                <div className="space-y-4">
                                    {leaders.map(l => (
                                        <div key={l.email} className="flex items-start gap-4 p-4 bg-cream rounded-xl">
                                            <div className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center flex-shrink-0 text-white font-serif font-bold text-sm">
                                                {l.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-primary-800">{l.name}</p>
                                                <p className="text-sm text-gray-500">{l.role}</p>
                                                <a href={`mailto:${l.email}`}
                                                    className="text-sm text-secondary-500 hover:underline">{l.email}</a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Phones */}
                            <div>
                                <h3 className="font-semibold text-primary-800 mb-2">Teléfonos</h3>
                                <div className="space-y-1">
                                    {['300 654 4489', '604 603 0602', '310 809 9780'].map(t => (
                                        <a key={t} href={`tel:+57${t.replace(/\s/g, '')}`}
                                            className="flex items-center gap-2 text-gray-700 hover:text-primary-800 transition-colors">
                                            <svg className="w-4 h-4 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            {t}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <h3 className="font-semibold text-primary-800 mb-2">Correo institucional</h3>
                                <a href="mailto:fundacionmesadelsenorofm@gmail.com"
                                    className="flex items-center gap-2 text-gray-700 hover:text-primary-800 transition-colors text-sm break-all">
                                    <svg className="w-4 h-4 text-secondary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    fundacionmesadelsenorofm@gmail.com
                                </a>
                            </div>

                            {/* Locations */}
                            <div>
                                <h3 className="font-semibold text-primary-800 mb-2">Sedes</h3>
                                <div className="space-y-3">
                                    {locations.map(loc => (
                                        <div key={loc.city} className="flex items-start gap-2">
                                            <svg className="w-4 h-4 text-secondary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <div>
                                                <p className="font-medium text-gray-800 text-sm">{loc.city}</p>
                                                <p className="text-gray-600 text-sm">{loc.address}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
