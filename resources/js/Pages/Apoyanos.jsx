import { Link } from '@inertiajs/react';
import Layout from '../Components/Layout';

export default function Apoyanos({ projects = [] }) {
    return (
        <Layout>
            {/* Hero */}
            <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-secondary-400 text-sm font-medium uppercase tracking-widest">Colabora con nosotros</span>
                    <h1 className="mt-3 text-4xl md:text-5xl font-serif font-bold">Apóyanos</h1>
                    <p className="mt-4 text-xl text-primary-200 italic">"Donar es una inversión en la humanidad"</p>
                    <p className="mt-4 text-primary-200 max-w-2xl mx-auto leading-relaxed">
                        Ayuda a la fundación a continuar tocando vidas y sembrando paz en las comunidades más vulnerables de Colombia.
                    </p>
                </div>
            </section>

            {/* Why donate */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif font-bold text-primary-900">¿Por qué apoyar la Fundación?</h2>
                        <p className="mt-3 text-gray-600 max-w-xl mx-auto">
                            Cada contribución se convierte en formación, música, arte y paz para quienes más lo necesitan.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: '🎓',
                                title: 'Educación y Formación',
                                desc: 'Financias la formación franciscana de niños, jóvenes y adultos en valores, espiritualidad y ciudadanía activa.'
                            },
                            {
                                icon: '🎶',
                                title: 'Arte como Paz',
                                desc: 'Tu donación sostiene la Escuela de Música Paz y Bien en el Catatumbo, donde la música silencia los fusiles.'
                            },
                            {
                                icon: '🌿',
                                title: 'Comunidades Rurales',
                                desc: 'Apoyas a campesinos del Catatumbo que buscan alternativas de vida digna y pacífica en sus territorios.'
                            },
                        ].map(item => (
                            <div key={item.title} className="text-center p-6 rounded-xl bg-cream">
                                <span className="text-5xl">{item.icon}</span>
                                <h3 className="mt-4 font-serif font-bold text-primary-800 text-lg">{item.title}</h3>
                                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-serif font-bold text-primary-900">Proyectos que apoyas</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((p, i) => (
                            <div key={p.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-primary-800 font-bold">{i + 1}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-serif font-bold text-primary-800">{p.titulo}</h3>
                                        <p className="mt-1 text-sm text-gray-600">{p.descripcion}</p>
                                        <Link href={`/proyecto/${p.id}`} className="inline-block mt-3 text-xs text-secondary-500 font-medium hover:underline">
                                            Saber más →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How to donate */}
            <section className="py-16 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-serif font-bold text-primary-900 mb-4">¿Cómo donar?</h2>
                    <p className="text-gray-600 mb-8">
                        Puedes hacer tu contribución comunicándote directamente con la fundación. Estamos disponibles para orientarte en el proceso.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-6 text-left mb-10">
                        {[
                            { icon: '📞', title: 'Llamada', detail: '300 654 4489\n604 603 0602\n310 809 9780' },
                            { icon: '✉️', title: 'Email', detail: 'fundacionmesadelsenorofm@gmail.com' },
                            { icon: '📍', title: 'En persona', detail: 'Calle 55 No. 39-54\nBarrio Boston, Medellín' },
                        ].map(item => (
                            <div key={item.title} className="bg-cream rounded-xl p-5">
                                <span className="text-3xl">{item.icon}</span>
                                <h3 className="mt-2 font-semibold text-primary-800">{item.title}</h3>
                                <p className="mt-1 text-sm text-gray-600 whitespace-pre-line">{item.detail}</p>
                            </div>
                        ))}
                    </div>
                    <Link href="/contacto"
                        className="inline-block px-8 py-4 bg-secondary-500 hover:bg-secondary-600 text-white font-bold rounded-xl transition-colors duration-200 shadow-lg">
                        Contáctanos ahora
                    </Link>
                </div>
            </section>
        </Layout>
    );
}
