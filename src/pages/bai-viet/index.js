import PageLayout from '@/layout/PageLayout';
import { useEffect, useState } from 'react';

import { Client } from '@notionhq/client';
import { NOTION_SECRET } from '@/data/blogspot.config';
import TitleHeader from '@/components/TitleHeader';
import Link from 'next/link';
import moment from 'moment';

// import { PanelMenu } from 'primereact/panelmenu';

const Baiviet = (postsData) => {
    // Declare
    const [posts, setPosts] = useState();

    useEffect(() => {
        console.log(postsData.postsData);
        setPosts(postsData.postsData.results);
    }, [postsData]);

    return (
        <div className='justify-content-center text-justify line-height-4'>
            <TitleHeader title={'DANH MỤC BÀI VIẾT'} />

            {posts &&
                posts.map((item, index) => (
                    <div key={index}>
                        <div>
                            <Link href={'/bai-viet/' + item.id.replace(/-/g, '')} target='_parent'>
                                <h3 className='p-0'>{item.properties.title.title[0].plain_text}</h3>
                            </Link>
                            <div className='text-sm flex align-items-center text-700'>
                                <i className='pi pi-calendar mr-1 text-md'></i>
                                <span>{moment(item.created_time).format('DD/MM/YYYY, h:mm:ss a')}</span>
                            </div>
                            <p>
                                {item.properties.tac_gia.rich_text[0] &&
                                    item.properties.tac_gia.rich_text[0].plain_text.substr(0, 100)}
                            </p>
                            <p>{item.properties.mo_ta.rich_text[0].plain_text}</p>
                            <p className='text-right'>
                                <Link href={'/bai-viet/' + item.id.replace(/-/g, '')} target='_parent'>
                                    {'>>'} Đọc thêm
                                </Link>
                            </p>
                        </div>
                        <hr className='mt-3 mb-3' />
                    </div>
                ))}
        </div>
    );
};

export async function getServerSideProps({ req, res }) {
    res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
    const notion = new Client({
        auth: NOTION_SECRET,
    });

    const data = await notion.databases.query({
        database_id: '39040d35777340c4b303ab3c871d6ac1',
        // filter: {
        //     property: 'tags',
        //     multi_select: {
        //         contains: 'chia sẻ',
        //     },
        // },
    });

    const postsData = data;
    return { props: { postsData } };
}

Baiviet.Layout = PageLayout;
export default Baiviet;
