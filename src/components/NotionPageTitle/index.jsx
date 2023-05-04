import { getPageTitle } from 'notion-utils';

const NotionPageTitle = ({ data }) => {
    return (
        <>            
            <h4 className='pt-3' style={{ textAlign: 'left', textTransform: 'uppercase' }}>{getPageTitle(data)}</h4>                     
        </>
    );
};

export default NotionPageTitle;
