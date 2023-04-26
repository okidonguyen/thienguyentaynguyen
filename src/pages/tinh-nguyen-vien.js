import DynamicLayout from '@/layout/DynamicLayout';
import { useEffect, useState } from 'react';
import _ from 'lodash';

import Image from 'next/image';
import Link from 'next/link';

import { NotionRenderer } from 'react-notion-x';
import { getNotionPage } from '@/services/NotionHelper';
import { Client } from '@notionhq/client';
import People from '@/components/People/People';

const TinhNguyenVien = ({postsData, data}) => {
    // Declare
    const [posts, setPosts] = useState();

    // Waiting page loading and set Post
    useEffect(() => {        
        setPosts(postsData.postsData);
    }, [postsData]);

    useEffect(() => {        
        console.log(data);
    }, [data]);

    return (
        <>
            <People />
            <div style={{ padding: '0px 10%' }}>
                <div className='font-bold text-900 text-5xl mb-3 text-center'>TÌNH NGUYỆN VIÊN NỔI BẬT</div>
                <div className='text-xl line-height-3 text-600 mb-6 text-center'>
                    Danh sách những tình nguyện viên nổi bật
                </div>
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
            </div>
        </>
    );
};

export async function getServerSideProps({ req, res }) {
    res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
    const notion = new Client({
        auth: process.env.NEXT_PUBLIC_NOTION_SECRET,
    });
    
    // Get page
    const postsData = await getNotionPage('a2b4c6d09a6d489a91f19d76584000a8');
    // Get Database
    const data = await notion.databases.query({
        database_id: '4aa56b72fc214ff1887f6c73fd4e7823',
    });

    return { props: { postsData, data } };
}

TinhNguyenVien.Layout = DynamicLayout;
export default TinhNguyenVien;
