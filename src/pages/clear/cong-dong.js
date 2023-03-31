import PageLayout from '@/layout/PageLayout';
import { useEffect, useState } from 'react';

import { Client } from '@notionhq/client';
import { NOTION_SECRET, NOTION_DB } from '@/data/blogspot.config';
import Link from 'next/link';

import { JsHelper } from '@/services/JsHelper';
import TitleHeader from '@/components/TitleHeader';

const CongDong = (postsData) => {
    // Declare
    const [posts, setPosts] = useState();

    // Waiting page loading and set Pót
    useEffect(() => {
        console.log(postsData.postsData);
        setPosts(postsData.postsData);
    }, [postsData]);

    return (
        <div className='justify-content-center text-justify line-height-4'>
            <TitleHeader title={'CHIA SẺ CHO CỘNG ĐỒNG'} />
            <ul>
                {posts !== undefined &&
                    Object.keys(posts).map((key) => (
                        <li key={key}>
                            <h4>
                                Ngày:{' '}
                                {(() => {
                                    return JsHelper.changeFormatDate(key);
                                })()}
                            </h4>
                            <ul className='pl-3'>
                                {posts[key].map((item, index) => (
                                    <li key={index}>
                                        <Link href={item.URL.url} target={'_blank'}>
                                            {item.Link.title[0].plain_text}
                                            {item.Status.multi_select && item.Status.multi_select.map((sta, index)=>(
                                                <span key={index} style={{color:sta.color=="default"?"gray":sta.color, paddingLeft:"5px"}}>{" <"+ sta.name + "> "}</span>
                                            ))}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export async function getServerSideProps({ req, res }) {
    res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
    const notion = new Client({
        auth: NOTION_SECRET,
    });

    const data = await notion.databases.query({
        database_id: NOTION_DB,
    });

    const groupedObjects = data.results.reduce((result, object) => {
        const date = new Date(object.properties.Date.created_time).toLocaleDateString();
        if (!result[date]) {
            result[date] = [];
        }
        result[date].push(object.properties);
        return result;
    }, {});

    const postsData = groupedObjects;

    return { props: { postsData } };
}

CongDong.Layout = PageLayout;
export default CongDong;
