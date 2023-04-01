import Footer from '@/components/Footer/Footer';
import './ContentLayout.scss';

export default function ContentLayout({ children }) {
    return (
        <div className='container-wrapper'>
            <div className='children-wrapper'>{children}</div>        
            <Footer/>    
        </div>
    );
}
