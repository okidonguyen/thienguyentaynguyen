// primereact
import 'primereact/resources/themes/nano/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

// Notion
import 'react-notion-x/src/styles.css';

// Global
import '@/styles/global.scss';
import '@/styles/customize.scss';

// Layout
import Layout from '@/layout/Layout';
import DefaultLayout from '@/layout/DefaultLayout';
import ScrollButton from '@/components/ScrollButton/ScrollButton';

import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
    const CustomLayout = Component.Layout || DefaultLayout;
    
    return (
        <>
            <Layout>
                <CustomLayout>
                    <Component {...pageProps} />
                </CustomLayout>
            </Layout>
            <ScrollButton />
            {/* <Analytics/> */}
        </>
    );
}

export default MyApp;
