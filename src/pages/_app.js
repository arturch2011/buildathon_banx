import '@/styles/globals.css';
import Layout from '@/components/layout';
import React from 'react';
import LoadingShape from '@/components/function/loading';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
    const router = useRouter();
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        const startLoading = () => setLoading(true);
        const stopLoading = () => setLoading(false);

        router.events.on('routeChangeStart', startLoading);
        router.events.on('routeChangeComplete', stopLoading);
        router.events.on('routeChangeError', stopLoading);

        return () => {
            router.events.off('routeChangeStart', startLoading);
            router.events.off('routeChangeComplete', stopLoading);
            router.events.off('routeChangeError', stopLoading);
        };
    }, [router]);

    return (
        <>
            {loading && <LoadingShape color="#EDD290" />}
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
