import Layout from '../Components/Layout';

export default function DianEsal() {
    return (
        <Layout>
            <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-secondary-400 text-sm font-medium uppercase tracking-widest">Transparencia</span>
                    <h1 className="mt-3 text-4xl md:text-5xl font-serif font-bold">DIAN-ESAL</h1>
                    <p className="mt-4 text-primary-200">Entidad Sin Ánimo de Lucro registrada ante la DIAN</p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none">
                        <h2 className="text-2xl font-serif font-bold text-primary-800">¿Qué es una ESAL?</h2>
                        <p className="text-gray-600">
                            Las Entidades Sin Ánimo de Lucro (ESAL) son organizaciones cuyo objetivo principal no es la generación de utilidades para sus miembros. La Fundación Mesa del Señor es una ESAL debidamente registrada y reconocida por la DIAN, lo que garantiza su transparencia y gestión responsable de los recursos.
                        </p>

                        <h2 className="text-2xl font-serif font-bold text-primary-800 mt-8">Régimen Tributario Especial</h2>
                        <p className="text-gray-600">
                            Como entidad del Régimen Tributario Especial, la Fundación Mesa del Señor cumple con todas las obligaciones fiscales establecidas por la ley colombiana. Esto incluye la presentación de estados financieros, declaraciones de renta y la actualización permanente de nuestra información ante la DIAN.
                        </p>

                        <h2 className="text-2xl font-serif font-bold text-primary-800 mt-8">Transparencia en el uso de recursos</h2>
                        <p className="text-gray-600">
                            Todos los recursos recibidos a través de donaciones, convenios y proyectos son administrados con total transparencia y destinados exclusivamente al cumplimiento de nuestra misión social y espiritual en las comunidades colombianas.
                        </p>

                        <div className="mt-8 p-6 bg-cream rounded-2xl border-l-4 border-secondary-500">
                            <h3 className="font-semibold text-primary-800 mb-2">
                                Permanencia en el Régimen Tributario Especial — NIT 900.601.231-9
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                En cumplimiento del Decreto 2150 del 20 de diciembre de 2017 y el Artículo 364-5 del Estatuto Tributario, ponemos a disposición del público los documentos de nuestra gestión institucional. Nuestra política en el manejo de los recursos es de total transparencia y austeridad, para que sus donativos cumplan su objetivo.
                            </p>
                            <a
                                href="https://drive.google.com/drive/folders/178WGBYGgwQm6HR-zVws3iBio7T2Je6Nm?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-800 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                </svg>
                                Ver documentos
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
