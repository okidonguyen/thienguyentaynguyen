import Footer from '@/components/Footer/Footer';
import './PageLayout.scss';
import MainMenu from '@/components/MainMenu/MainMenu';
import Slider from '@/components/Slider/Slider';
import SupportMe from '@/components/SupportMe/SupportMe';

export default function PageLayout({ children }) {
    return (
        <div className='container-wrapper-page shadow-3'>
            <MainMenu className='z-9' />
            <div style={{ paddingTop: '68px' }}>
                <Slider />
            </div>
            <div className='children-wrapper '>{children}</div>  
            <SupportMe />
            <Footer />
        </div>
    );
}
