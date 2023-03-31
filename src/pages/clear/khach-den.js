import PageLayout from '@/layout/PageLayout';
import { useEffect, useState } from 'react';

import { NotionAPI } from 'notion-client';
import { NotionRenderer } from 'react-notion-x';
import Image from 'next/image';
import Link from 'next/link';
import TitleHeader from '@/components/TitleHeader';

const KhachDen = (postsData) => {
    console.log('he');
    // Declare
    const [posts, setPosts] = useState();

    // Waiting page loading and set Pót
    useEffect(() => {
        setPosts(postsData.postsData);
    }, [postsData]);

    return (
        <div className='justify-content-center text-justify line-height-4'>
            <>
                <TitleHeader title={'KHÁCH GHÉ THĂM'} />
                {postsData ? (
                    <NotionRenderer
                        recordMap={posts}
                        components={{
                            nextImage: Image,
                            nextLink: Link,
                        }}
                    />
                ) : (
                    {}
                )}
            </>
        </div>
    );
};

export async function getServerSideProps({ req, res }) {
    res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
    const notion = new NotionAPI({
        activeUser: 'f31b77b5-433b-40cd-9683-610c9e603d8c',
        authToken:
            'c04fbff6e3aa09e85a380468db61d9b1b700e96d799955eac446aebac2e00110e6b0f79a1dc4b661428556d8a77cdaac25166e1943057e30682a991f39ccdb038f943c1aa7a3ee9f3e78f2440192',
    });
    const postsData = await notion.getPage('5046a7a476844d84a729871537a35179');

    return { props: { postsData } };
}

KhachDen.Layout = PageLayout;
export default KhachDen;
