import { useEffect, useState } from 'react';

import { Client } from '@notionhq/client';
import Link from 'next/link';
import moment from 'moment';
import DynamicLayout from '@/layout/DynamicLayout';
import { BreadCrumb } from 'primereact/breadcrumb';
import Image from 'next/image';

// import { PanelMenu } from 'primereact/panelmenu';

const Tintuc = (postsData) => {
    const items = [{ label: 'Tin tức', url: '/tin-tuc' }];
    const home = { icon: 'pi pi-home', url: '/' };
    // Declare
    const [posts, setPosts] = useState();

    useEffect(() => {
        console.log(postsData.postsData);
        setPosts(postsData.postsData.results);
    }, [postsData]);

    return (
        <div>
            <div style={{ padding: '0px 10%' }}>
                <BreadCrumb model={items} home={home} />
                <div className='grid nogutter'>
                    {posts &&
                        posts.map((item, index) => (
                            <div key={index} className='col-12 lg:col-4 p-3'>
                                <Link href={'/tin-tuc/' + item.id.replace(/-/g, '')} target='_parent'>
                                    <div className='shadow-2 border-round h-full surface-card'>
                                        {item.properties.cover.files[0] && (
                                            <Image
                                                src={item.properties.cover.files[0].file.url}
                                                width={300}
                                                height={0}
                                                alt='blog'
                                                className='block w-full h-fit border-round-top'
                                            />
                                        )}
                                        <div className='p-4'>
                                            <div className='text-900 font-bold mb-3 line-height-3 '>
                                                {item.properties.title.title[0] &&
                                                    item.properties.title.title[0].plain_text}
                                            </div>
                                            <div className='line-height-3 mb-3 text-500'>
                                                {item.properties.mo_ta.rich_text[0] &&
                                                    item.properties.mo_ta.rich_text[0].plain_text}
                                            </div>
                                            <div className='flex'>
                                                <div className='ml-2'>
                                                    <div className='text-sm font-bold text-900 mb-1'>
                                                        {item.properties.tac_gia.rich_text[0] &&
                                                            item.properties.tac_gia.rich_text[0].plain_text.substr(
                                                                0,
                                                                100
                                                            )}
                                                    </div>
                                                    <div className='text-sm flex align-items-center text-700'>
                                                        <i className='pi pi-calendar mr-1 text-sm'></i>
                                                        <span>
                                                            {moment(item.created_time).format('DD/MM/YYYY, h:mm:ss a')}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                </div>

                <div className='grid nogutter'>
                    <div className='col-12 lg:col-4 p-3'></div>
                </div>
            </div>
        </div>
    );
};

export async function getServerSideProps({ req, res }) {
    res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
    const notion = new Client({
        auth: process.env.NEXT_PUBLIC_NOTION_SECRET,
    });

    const data = await notion.databases.query({
        database_id: '13a3b7670a714a36bf250efb3a8bb4c7',
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

Tintuc.Layout = DynamicLayout;
export default Tintuc;
