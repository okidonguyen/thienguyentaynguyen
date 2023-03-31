import ErrorLayout from '@/layout/ErrorLayout';
import { ProgressBar } from 'primereact/progressbar';

// pages/404.js
const Custom404 = () => {    
    return (
        <div className='card flex p-3 align-items-center justify-content-center'>
            <h1>Không tìm thấy trang ...</h1>;
            <ProgressBar mode="indeterminate" style={{ height: '6px' }}></ProgressBar>
        </div>
    )
}

Custom404.Layout = ErrorLayout;

export default Custom404;
