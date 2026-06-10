import { useState, useEffect } from 'react';

export default function CookieBanner({ onConsent }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem('cookie_consent');
        if (!stored) {
            // Small delay so it doesn't flash immediately
            const t = setTimeout(() => setVisible(true), 800);
            return () => clearTimeout(t);
        }
        if (stored === 'accepted') onConsent?.(true);
    }, []);

    const accept = () => {
        localStorage.setItem('cookie_consent', 'accepted');
        setVisible(false);
        onConsent?.(true);
    };

    const decline = () => {
        localStorage.setItem('cookie_consent', 'declined');
        setVisible(false);
        onConsent?.(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary-950 border-t border-primary-700 shadow-2xl"
             style={{ backgroundColor: '#1a0f07' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex-1">
                    <p className="text-sm text-white/90 leading-relaxed">
                        <span className="font-semibold text-secondary-400">🍪 Uso de cookies</span>
                        {' '}Utilizamos cookies de análisis (Google Analytics) para mejorar su experiencia.
                        Su uso es completamente opcional.{' '}
                        <a href="/codigo_etico" className="underline text-secondary-300 hover:text-secondary-200 text-xs">
                            Más información
                        </a>
                    </p>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                    <button
                        onClick={decline}
                        className="px-4 py-2 text-xs font-medium text-white/70 hover:text-white border border-white/20 hover:border-white/40 rounded-lg transition-colors">
                        Solo esenciales
                    </button>
                    <button
                        onClick={accept}
                        className="px-4 py-2 text-xs font-medium bg-secondary-500 hover:bg-secondary-400 text-white font-semibold rounded-lg transition-colors">
                        Aceptar todo
                    </button>
                </div>
            </div>
        </div>
    );
}
