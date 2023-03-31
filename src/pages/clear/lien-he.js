import PageLayout from '@/layout/PageLayout';
import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { NotionAPI } from 'notion-client';
import { NotionRenderer } from 'react-notion-x';
import NotionPageTitle from '@/components/NotionPageTitle';
import TitleHeader from '@/components/TitleHeader';

const Lienhe = (postsData) => {
    // Declare
    const [posts, setPosts] = useState();

    // Waiting page loading and set Pót
    useEffect(() => {
        setPosts(postsData.postsData);
    }, [postsData]);

    return (
        <div className='justify-content-center text-justify line-height-4'>
            <>
                <TitleHeader title={'THÔNG TIN LIÊN HỆ'} />
                <div className='grid'>
                    <div className='col-12 lg:col-7'>
                        {/* <NotionPageTitle data={posts} /> */}

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
                    <div className='col-12 lg:col-5 p-2 text-center'>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.944263336193!2d108.05876391378712!3d12.717059123855694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31721cfdba9bbab7%3A0xd0942b7ab82ad8cb!2zUGjGsMahbmcgVGjhuqNvIEFt!5e0!3m2!1svi!2s!4v1679301188427!5m2!1svi!2s'
                            width='450'
                            style={{ border: 'none' }}
                            height='350'
                            loading='lazy'
                            referrerPolicy='no-referrer-when-downgrade'></iframe>
                    </div>
                </div>
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
    const postsData = await notion.getPage('765ac50d76e94d44ad767ffae42e8dd2');

    return { props: { postsData } };
}

Lienhe.Layout = PageLayout;
export default Lienhe;
