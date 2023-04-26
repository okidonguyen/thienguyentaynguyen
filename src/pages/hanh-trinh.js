import PageLayout from '@/layout/PageLayout';
import { useEffect, useState } from 'react';

import { Client } from '@notionhq/client';
import TitleHeader from '@/components/TitleHeader';

const Thuvien = (postsData) => {
    // Declare
    const [posts, setPosts] = useState();
    
    // Waiting page loading and set Pót
    useEffect(() => {
        console.log(postsData);
        setPosts(postsData.postsData);
    }, [postsData]);

    return (
        <div className='justify-content-center text-justify line-height-4'>
            <TitleHeader title={'BÀI VIẾT'} />
        </div>
    );
};

export async function getServerSideProps({ req, res }) {
    res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
    const notion = new Client({
        auth: process.env.NEXT_PUBLIC_NOTION_SECRET,
    });

    const data = await notion.databases.query({
        database_id: '4aa56b72fc214ff1887f6c73fd4e7823',
    });

    // const postsData = _.filter(data.results, { value: { type: 'child_page' } });
    const postsData = data.results;

    return { props: { postsData } };
}

Thuvien.Layout = PageLayout;
export default Thuvien;
