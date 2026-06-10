import Layout from '../Components/Layout';

const principios = [
    {
        titulo: 'Honestidad e Integridad',
        desc: 'Actuamos con transparencia en todas nuestras gestiones, velando por el uso responsable y ético de los recursos que nos son confiados.'
    },
    {
        titulo: 'Respeto a la dignidad humana',
        desc: 'Reconocemos y respetamos la dignidad de cada persona con quien trabajamos, sin distinción de raza, género, religión o condición social.'
    },
    {
        titulo: 'Responsabilidad social',
        desc: 'Asumimos con seriedad nuestro compromiso con las comunidades vulnerables, actuando siempre en pro de su bienestar integral.'
    },
    {
        titulo: 'Espiritualidad franciscana',
        desc: 'Nos inspiramos en los valores de San Francisco de Asís: pobreza, fraternidad, paz y cuidado de la creación.'
    },
    {
        titulo: 'Participación y democracia',
        desc: 'Promovemos la participación activa de todos los miembros en la toma de decisiones institucionales.'
    },
    {
        titulo: 'Sostenibilidad',
        desc: 'Trabajamos por proyectos sostenibles que generen impacto duradero en las comunidades donde hacemos presencia.'
    },
];

export default function CodigoEtico() {
    return (
        <Layout
            title="Código Ético"
            description="Conoce el Código Ético de la Fundación Mesa del Señor: nuestros principios de transparencia, respeto y compromiso social franciscano."
        >
            <section className="bg-gradient-to-br from-primary-800 to-accent-700 text-white py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-secondary-400 text-sm font-medium uppercase tracking-widest">Valores institucionales</span>
                    <h1 className="mt-3 text-4xl md:text-5xl font-serif font-bold">Código Ético</h1>
                    <p className="mt-4 text-primary-200 max-w-2xl mx-auto">
                        Nuestro código ético define los principios y valores que guían cada acción de la Fundación Mesa del Señor.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif font-bold text-primary-900">Nuestros Principios</h2>
                        <p className="mt-3 text-gray-600">
                            Estos principios son el fundamento de nuestra identidad institucional y orientan nuestra misión social y espiritual.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {principios.map((p, i) => (
                            <div key={p.titulo} className="flex gap-4 p-5 rounded-xl bg-cream border border-primary-100">
                                <div className="w-8 h-8 bg-primary-800 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">
                                    {i + 1}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-primary-800 mb-1">{p.titulo}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 p-6 bg-primary-800 text-white rounded-2xl text-center">
                        <h3 className="text-xl font-serif font-bold mb-2">Nuestro compromiso</h3>
                        <p className="text-primary-200 leading-relaxed">
                            La Fundación Mesa del Señor se compromete a mantener estos principios en todas sus actuaciones, garantizando una gestión transparente, ética y orientada al bien común, siguiendo el espíritu franciscano de servicio y fraternidad.
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
