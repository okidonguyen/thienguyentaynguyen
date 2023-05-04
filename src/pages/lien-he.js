import DynamicLayout from '@/layout/DynamicLayout';
import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { NotionAPI } from 'notion-client';
import { NotionRenderer } from 'react-notion-x';
import TitleHeader from '@/components/TitleHeader';

const Lienhe = (postsData) => {
    // Declare
    const [posts, setPosts] = useState();

    // Waiting page loading and set Pót
    useEffect(() => {
        setPosts(postsData.postsData);
    }, [postsData]);

    return (
        <div className='justify-content-center text-justify line-height-4' style={{ padding: '0px 10%' }}>            
            <div>
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
            </div>
        </div>
    );
};

export async function getServerSideProps({ req, res }) {
    res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
    const notion = new NotionAPI();
    const postsData = await notion.getPage('fde2f59db99e4ee18c968086ca4a75b0');

    return { props: { postsData } };
}

Lienhe.Layout = DynamicLayout;
export default Lienhe;
