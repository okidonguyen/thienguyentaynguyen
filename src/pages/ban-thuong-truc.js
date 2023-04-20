import PageLayout from '@/layout/PageLayout';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { NotionRenderer } from 'react-notion-x';
import { getNotionPage } from '@/services/NotionHelper';
import CustomMeta from '@/components/CustomMeta/CustomMeta';

const ODay = (postsData) => {
    // Declare
    const [posts, setPosts] = useState();

    // Waiting page loading and set Post
    useEffect(() => {
        console.log(postsData.postsData);
        setPosts(postsData.postsData);
    }, [postsData]);

    return (
        <>
            <CustomMeta title={'Ban thường trực'} description={'Thường trực mạng lưới tình nguyện Tây Nguyên'} />
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
        </>
    );
};

export async function getServerSideProps({ req, res }) {
    res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
    const postsData = await getNotionPage('a46acab4ffff43e08090c8befb345935');
    return { props: { postsData } };
}

ODay.Layout = PageLayout;
export default ODay;
