import Footer from '@/components/Footer/Footer';
import './PageLayout.scss';

export default function PageLayout({ children }) {    
    return (
        <div className='container-wrapper'>            
            <div className='children-wrapper'>{children}</div>        
            <Footer/>    
        </div>
    );
}
