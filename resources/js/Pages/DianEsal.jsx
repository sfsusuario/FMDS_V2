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
                            <h3 className="font-semibold text-primary-800 mb-2">Documentos disponibles</h3>
                            <p className="text-gray-600 text-sm">
                                Para solicitar información sobre nuestra situación tributaria, informes financieros o cualquier documento de transparencia institucional, comunícate con nosotros a través del correo{' '}
                                <a href="mailto:fundacionmesadelsenorofm@gmail.com" className="text-secondary-500 hover:underline">
                                    fundacionmesadelsenorofm@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
