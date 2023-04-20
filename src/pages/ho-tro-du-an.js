import DynamicLayout from '@/layout/DynamicLayout';
import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { NotionRenderer } from 'react-notion-x';
import { getNotionPage } from '@/services/NotionHelper';
import SupportMe from '@/components/SupportMe/SupportMe';
import TrustBy from '@/components/TrustBy/TrustBy';

const Baygio = (postsData) => {
    // Declare
    const [posts, setPosts] = useState();

    // Waiting page loading and set Pót
    useEffect(() => {
        console.log(postsData.postsData);
        setPosts(postsData.postsData);
    }, [postsData]);

    return (
        <div>
            <SupportMe/>
            <div className='justify-content-center text-justify line-height-4' style={{ padding: '0px 10%' }}>
                <>
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
            <TrustBy/>
        </div>
    );
};

export async function getServerSideProps({ req, res }) {
    res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
    const postsData = await getNotionPage('4e8dc8053e8e42e8bdf6d06d71692f9e');
    return { props: { postsData } };
}

Baygio.Layout = DynamicLayout;
export default Baygio;
