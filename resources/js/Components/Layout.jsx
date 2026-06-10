import { useState, useEffect } from 'react';
import { router, usePage } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import Navbar from './Navbar';
import Footer from './Footer';
import CookieBanner from './CookieBanner';

const GA_ID   = 'G-SG3W1PQBJ5';
const SITE    = 'https://mesadelsenor.co';
const DEFAULT_DESC = 'Fundación de inspiración franciscana que trabaja por la dignidad de las comunidades más vulnerables en Colombia, con valores de fraternidad y solidaridad.';
const DEFAULT_IMG  = `${SITE}/img/logo_completo_2.png`;

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

export default function Layout({ children, title, description, image, type = 'website' }) {
    const { ziggy } = usePage().props;
    const [analyticsOn, setAnalyticsOn] = useState(false);

    const fullTitle  = title ? `${title} | Fundación Mesa del Señor` : 'Fundación Mesa del Señor';
    const metaDesc   = description || DEFAULT_DESC;
    const ogImage    = image || DEFAULT_IMG;
    const canonical  = ziggy?.location || '';

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
            <Head title={fullTitle}>
                <meta head-key="description"        name="description"           content={metaDesc} />
                <meta head-key="og:title"           property="og:title"          content={fullTitle} />
                <meta head-key="og:description"     property="og:description"    content={metaDesc} />
                <meta head-key="og:image"           property="og:image"          content={ogImage} />
                <meta head-key="og:type"            property="og:type"           content={type} />
                <meta head-key="og:site_name"       property="og:site_name"      content="Fundación Mesa del Señor" />
                <meta head-key="twitter:card"       name="twitter:card"          content="summary_large_image" />
                <meta head-key="twitter:title"      name="twitter:title"         content={fullTitle} />
                <meta head-key="twitter:description" name="twitter:description"  content={metaDesc} />
                <meta head-key="twitter:image"      name="twitter:image"         content={ogImage} />
                {canonical && <link head-key="canonical" rel="canonical" href={canonical} />}
            </Head>
            <Navbar />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
            <CookieBanner onConsent={handleConsent} />
        </div>
    );
}
