import { useState } from 'react';
import { Link } from '@inertiajs/react';
import Layout from '../Components/Layout';

const PROJECT_GALLERIES = {
    1: [
        '/img/proyectos/p1_main.jpeg',
    ],
    2: [
        '/img/proyectos/p2_main.jpeg',
        '/img/proyectos/p2_b.jpeg',
        '/img/proyectos/p2_c.jpeg',
        '/img/proyectos/p2_d.jpeg',
        '/img/proyectos/p2_e.jpeg',
    ],
    3: [
        '/img/proyectos/p3_main.jpeg',
        '/img/proyectos/p3_b.jpeg',
        '/img/proyectos/p3_c.jpeg',
    ],
    4: [
        '/img/proyectos/p4_main.jpeg',
        '/img/proyectos/p4_b.jpeg',
        '/img/proyectos/p4_c.jpeg',
        '/img/proyectos/p4_d.jpeg',
    ],
    5: [
        '/img/proyectos/p5_main.jpeg',
    ],
};

function Gallery({ images }) {
    const [active, setActive] = useState(0);
    if (!images?.length) return null;

    return (
        <div className="mb-10">
            <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                <img
                    src={images[active]}
                    alt=""
                    className="w-full h-80 md:h-96 object-cover transition-opacity duration-300"
                />
            </div>
            {images.length > 1 && (
                <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
                    {images.map((img, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                                i === active ? 'border-secondary-500 opacity-100' : 'border-transparent opacity-60 hover:opacity-90'
                            }`}
                        >
                            <img src={img} alt="" className="w-full h-full object-cover" />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function Proyecto({ project }) {
    if (!project) {
        return (
            <Layout>
                <div className="min-h-96 flex items-center justify-center">
                    <p className="text-gray-500">Proyecto no encontrado.</p>
                </div>
            </Layout>
        );
    }

    const gallery = PROJECT_GALLERIES[project.id] ?? (project.imagen ? [project.imagen] : []);

    return (
        <Layout
            title={project.titulo}
            description={project.descripcion || project.titulo}
            image={gallery[0] ? `https://mesadelsenor.co${gallery[0]}` : undefined}
        >
            <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/proyectos" className="inline-flex items-center gap-2 text-primary-300 hover:text-white text-sm mb-6 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Todos los proyectos
                    </Link>
                    <h1 className="text-3xl md:text-4xl font-serif font-bold">{project.titulo}</h1>
                    <p className="mt-3 text-primary-200 text-lg">{project.descripcion}</p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Gallery images={gallery} />

                    {project.contenido && (
                        <div
                            className="prose prose-lg max-w-none text-gray-700 prose-headings:text-primary-800 prose-a:text-secondary-500"
                            dangerouslySetInnerHTML={{ __html: project.contenido }}
                        />
                    )}

                    <div className="mt-12 p-6 bg-cream rounded-2xl text-center">
                        <h3 className="text-xl font-serif font-bold text-primary-800">¿Quieres apoyar este proyecto?</h3>
                        <p className="mt-2 text-gray-600">Tu contribución hace posible que continuemos con esta misión.</p>
                        <div className="flex flex-wrap gap-3 justify-center mt-4">
                            <Link href="/apoyanos" className="px-6 py-2.5 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold rounded-lg transition-colors">
                                Donar
                            </Link>
                            <Link href="/contacto" className="px-6 py-2.5 border border-primary-800 text-primary-800 hover:bg-primary-800 hover:text-white font-semibold rounded-lg transition-colors">
                                Contactar
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
