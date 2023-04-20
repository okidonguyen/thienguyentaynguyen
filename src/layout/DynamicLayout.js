import Footer from '@/components/Footer/Footer';
import './DynamicLayout.scss';
import MainMenu from '@/components/MainMenu/MainMenu';

export default function DynamicLayout({ children }) {
    return (
        <div className='container-wrapper-dyna shadow-3'>
            <MainMenu className='z-9' />            
            <div className='children-wrapper '>{children}</div>
            <Footer/>
        </div>
    );
}
