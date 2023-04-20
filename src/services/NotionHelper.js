import { NotionAPI } from 'notion-client';

export const getNotionPage = async (page) => {
    const notion = new NotionAPI({
        // activeUser: process.env.NEXT_PUBLIC_ACTIVE_USER,
        // authToken: process.env.NEXT_PUBLIC_AUTH_TOKEN,
    });
    const postsData = await notion.getPage(page);
    return postsData;
};
