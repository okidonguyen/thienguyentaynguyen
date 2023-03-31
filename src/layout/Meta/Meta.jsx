import useTrans from "@/hooks/useTrans";
import Head from 'next/head';

export default function Meta() {
    const trans = useTrans();    
    return (
        <Head>
            <link rel='icon' href='/favicon.png' />
            <title>{trans.meta.title}</title>
            <meta charSet="UTF-8" />
                <meta name="description" content={trans.meta.description}  />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <meta property="og:type" content="website"></meta>
                <meta property="og:title" content={trans.meta.title}></meta>
                <meta property="og:url" content={trans.meta.url}></meta>
                <meta property="og:description" content={trans.meta.description}  />
                <meta property="og:image" content={trans.meta.imglink}></meta>
                <meta property="og:ttl" content="604800"></meta>
            
        </Head>
    );
}
