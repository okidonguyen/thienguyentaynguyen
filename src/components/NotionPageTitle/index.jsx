import { getPageTitle } from 'notion-utils';
import HrLine from '../HrLine';

const NotionPageTitle = ({ data }) => {
    return (
        <>            
            <h2 className='pt-3' style={{ textAlign: 'center', textTransform: 'uppercase' }}>{getPageTitle(data)}</h2>
            <HrLine />            
        </>
    );
};

export default NotionPageTitle;
