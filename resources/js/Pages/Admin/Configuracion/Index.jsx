import { useForm, usePage } from '@inertiajs/react';
import AdminLayout from '../../../Components/AdminLayout';

const FIELDS = [
    { key: 'telefono',            label: 'Teléfono',                   type: 'text',     placeholder: '+57 (4) 123 4567' },
    { key: 'whatsapp',            label: 'WhatsApp',                   type: 'text',     placeholder: '+573001234567' },
    { key: 'email_contacto',      label: 'Email de contacto',          type: 'email',    placeholder: 'contacto@mesadelsenor.co' },
    { key: 'direccion',           label: 'Dirección',                  type: 'text',     placeholder: 'Medellín, Colombia' },
    { key: 'descripcion_hero',    label: 'Descripción principal (Hero)', type: 'textarea', placeholder: 'Texto del hero del home...' },
    { key: 'descripcion_quienes', label: 'Descripción ¿Quiénes somos?', type: 'textarea', placeholder: 'Texto de la sección Quiénes somos...' },
    { key: 'facebook_url',        label: 'URL Facebook',               type: 'url',      placeholder: 'https://facebook.com/...' },
    { key: 'instagram_url',       label: 'URL Instagram',              type: 'url',      placeholder: 'https://instagram.com/...' },
    { key: 'youtube_url',         label: 'URL YouTube',                type: 'url',      placeholder: 'https://youtube.com/...' },
];

export default function ConfiguracionIndex({ settings }) {
    const { flash } = usePage().props;
    const { data, setData, post, processing, errors } = useForm(
        Object.fromEntries(FIELDS.map(f => [f.key, settings[f.key] ?? '']))
    );

    const submit = (e) => {
        e.preventDefault();
        post('/admin/configuracion');
    };

    return (
        <AdminLayout title="Configuración del sitio">
            <div className="max-w-2xl">
                {flash?.success && (
                    <div className="mb-5 p-3 bg-green-100 text-green-800 rounded-lg text-sm">{flash.success}</div>
                )}
                <form onSubmit={submit} className="bg-white rounded-xl shadow-sm p-6 space-y-5">
                    <p className="text-sm text-gray-500">
                        Estos textos se usan en el sitio público. Los cambios se reflejan de inmediato.
                    </p>

                    {FIELDS.map(field => (
                        <div key={field.key}>
                            <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
                            {field.type === 'textarea' ? (
                                <textarea
                                    rows={3}
                                    value={data[field.key]}
                                    onChange={e => setData(field.key, e.target.value)}
                                    placeholder={field.placeholder}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 resize-none text-sm"
                                />
                            ) : (
                                <input
                                    type={field.type}
                                    value={data[field.key]}
                                    onChange={e => setData(field.key, e.target.value)}
                                    placeholder={field.placeholder}
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 text-sm"
                                />
                            )}
                            {errors[field.key] && <p className="text-red-500 text-xs mt-1">{errors[field.key]}</p>}
                        </div>
                    ))}

                    <div className="pt-2">
                        <button type="submit" disabled={processing}
                            className="px-6 py-2.5 bg-primary-800 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors disabled:opacity-60">
                            {processing ? 'Guardando...' : 'Guardar configuración'}
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
