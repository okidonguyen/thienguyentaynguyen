import { NotionAPI } from 'notion-client';
import { NotionRenderer } from 'react-notion-x';
import useSWR from 'swr';

const notion = new NotionAPI({
    activeUser: 'f31b77b5-433b-40cd-9683-610c9e603d8c',
    authToken:
        'c04fbff6e3aa09e85a380468db61d9b1b700e96d799955eac446aebac2e00110e6b0f79a1dc4b661428556d8a77cdaac25166e1943057e30682a991f39ccdb038f943c1aa7a3ee9f3e78f2440192',
});

const fetchNotionPage = (pageId) => {    
    return new Promise((resolve, reject) => {
        notion.getPage(pageId)
          .then((data) => resolve(data))
          .catch((error) => reject(error));
      });
}

const NotionPage = ({page}) => {
    const { data, error } = useSWR(page ? page : null, fetchNotionPage);

    if (error) return <div>Failed to load page</div>;
    if (!data) return <div>Loading page...</div>;

    return <NotionRenderer blockMap={data.block} />;
};

export default NotionPage;
