import Head from 'next/head';

export default function CustomMeta({ postTitle, description }) {
    return (
        <Head>
            <title>Tình nguyện Tây Nguyên | {postTitle}</title>
            <meta name='description' content={description} />
        </Head>
    );
}
