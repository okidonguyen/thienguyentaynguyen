import './ScrollButton.scss';
import useWindowScroll from '@/hooks/useWindowScroll';
import { Button } from 'primereact/button';
import { PanelMenu } from 'primereact/panelmenu';
import { Sidebar } from 'primereact/sidebar';
import { MenuData } from '@/data';
import { useState } from 'react';
import Link from 'next/link';

const ScrollButton = () => {
    const scrollTop = useWindowScroll();
    const items = MenuData();
    const [visible, setVisible] = useState(false);

    // Scroll to Tip
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const toogleSidebar = () => {
        setVisible(!visible);
    };

    return (
        <div className='pta-scrollbutton'>
            <Sidebar visible={visible} onHide={() => setVisible(false)} onClick={toogleSidebar} position='right'>
                <PanelMenu model={items} />
            </Sidebar>
            {/* <Button
                className='btn-nav'
                onClick={toogleSidebar}
                style={{
                    // display: scrollTop > 300 ? 'inline' : 'none',
                    display: 'inline',
                    borderRadius: '50%',
                }}>
                <i className='pi pi-bars' />
            </Button> */}
            <Link href='/ho-tro-chung-toi'>
                <Button
                    className='btn-not'
                    style={{
                        // display: scrollTop > 300 ? 'inline' : 'none',
                        display: 'inline',
                        borderRadius: '25px',
                    }}> HỖ TRỢ
                </Button>
            </Link>
        </div>
    );
};

export default ScrollButton;
