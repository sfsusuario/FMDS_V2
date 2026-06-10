import { useState, useEffect } from 'react';
import { router } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import Navbar from './Navbar';
import Footer from './Footer';
import CookieBanner from './CookieBanner';

const GA_ID = 'G-SG3W1PQBJ5';

function loadGA() {
    if (window.gtag) return;
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
}

export default function Layout({ children, title }) {
    const [analyticsOn, setAnalyticsOn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('cookie_consent') === 'accepted') {
            setAnalyticsOn(true);
            loadGA();
        }
    }, []);

    useEffect(() => {
        if (!analyticsOn) return;
        return router.on('finish', () => {
            window.gtag?.('config', GA_ID, { page_path: window.location.pathname });
        });
    }, [analyticsOn]);

    const handleConsent = (accepted) => {
        if (accepted) { setAnalyticsOn(true); loadGA(); }
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Head title={title ? `${title} — Fundación Mesa del Señor` : 'Fundación Mesa del Señor'} />
            <Navbar />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
            <CookieBanner onConsent={handleConsent} />
        </div>
    );
}
