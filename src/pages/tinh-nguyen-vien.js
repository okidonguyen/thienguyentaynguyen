import PageLayout from '@/layout/PageLayout';
import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { NotionRenderer } from 'react-notion-x';
import { getNotionPage } from '@/services/NotionHelper';


const Baygio = (postsData) => {
    // Declare
    const [posts, setPosts] = useState();

    // Waiting page loading and set Pót
    useEffect(() => {
        console.log(postsData.postsData);
        setPosts(postsData.postsData);
    }, [postsData]);

    return (
        <div className='justify-content-center text-justify line-height-4'>
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
    );
};

export async function getServerSideProps({ req, res }) {
    res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');  
    const postsData = await getNotionPage('a2b4c6d09a6d489a91f19d76584000a8');
    return { props: { postsData } };
}

Baygio.Layout = PageLayout;
export default Baygio;
