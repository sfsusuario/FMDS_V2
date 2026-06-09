import { usePage } from '@inertiajs/react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children, title, description }) {
    const { ziggy } = usePage().props;

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    );
}
