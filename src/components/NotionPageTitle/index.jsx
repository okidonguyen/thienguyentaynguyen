import { getPageTitle } from 'notion-utils';

const NotionPageTitle = ({ data }) => {
    return (
        <>            
            <h2 className='pt-3' style={{ textAlign: 'center', textTransform: 'uppercase' }}>{getPageTitle(data)}</h2>                     
        </>
    );
};

export default NotionPageTitle;
