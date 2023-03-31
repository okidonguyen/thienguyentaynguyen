import useSWR from 'swr';
import axios from 'axios';
import PageLayout from '@/layout/PageLayout';
import TitleHeader from '@/components/TitleHeader';

const fetcher = async (url) => {
    // console.log(_.filter(postsData.postsData, { type: 'child_page' }));
    const res = await axios.get(url, {
        headers: {
            'Notion-Version': '2021-05-13',
            'Content-Type': 'application/json',
            Authorization: `Bearer secret_f5bS0taALU85s1MBOF0yIEeB65JKuZ0cKG9otumUbGe`,
        },
    });
    console.log(res.data);
    return res.data;
};

const PAGE_ID = '47c489a909894f5ea0400275dd706fab';
const NOTION_API_URL = `https://api.notion.com/v1/blocks/${PAGE_ID}/children`;

const Thuvien = () => {
    const { data, error } = useSWR(NOTION_API_URL, fetcher);

    if (error) return <div>Failed to load page content.</div>;
    if (!data) {
        return <div>Loading page content...</div>;
    } else {
        return <div>data ne</div>;
    }
};

Thuvien.Layout = PageLayout;
export default Thuvien;
