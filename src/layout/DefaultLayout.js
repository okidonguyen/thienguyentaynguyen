import MainMenu from '@/components/MainMenu/MainMenu';
import Footer from '@/components/Footer/Footer';
import './DefaultLayout.scss';

export default function DefaultLayout({ children }) {    
    return (
        <div className='container-wrapper-home shadow-3'>
            <MainMenu className="z-9" />
            <div className='children-wrapper '>{children}</div>            
            <Footer />
        </div>
    );
}
