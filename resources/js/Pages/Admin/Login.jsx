import { useForm } from '@inertiajs/react';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '', password: '', remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post('/admin/login');
    };

    return (
        <div className="min-h-screen bg-primary-900 flex items-center justify-center px-4">
            <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center mb-8">
                    <img src="/img/logo_completo_2.png" alt="Mesa del Señor" className="h-16 w-auto mx-auto mb-4" />
                    <h1 className="text-xl font-serif font-bold text-primary-900">Panel de Administración</h1>
                </div>

                <form onSubmit={submit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
                        <input
                            type="email"
                            value={data.email}
                            onChange={e => setData('email', e.target.value)}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                            placeholder="admin@mesadelsenor.co"
                            autoFocus
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
                        <input
                            type="password"
                            value={data.password}
                            onChange={e => setData('password', e.target.value)}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                            placeholder="••••••••"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full py-2.5 bg-primary-800 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-60"
                    >
                        {processing ? 'Ingresando...' : 'Ingresar'}
                    </button>
                </form>
            </div>
        </div>
    );
}
