// Main menu components with custom style
import { Menubar } from 'primereact/menubar';
import { PanelMenu } from 'primereact/panelmenu';
import { Sidebar } from 'primereact/sidebar';

import { MenuData } from '@/data';
import { useState } from 'react';
import useWindowSize from '@/hooks/useWindowSize';

// import components

export default function MainMenu() {
    const items = MenuData();

    const [visible, setVisible] = useState(false);
    const size = useWindowSize();
    const Logo = <div></div>;

    const menuDisplay =
        size.width < 1030 ? (
            <>
                <Sidebar visible={visible} onHide={() => setVisible(false)} position='right'>
                    <PanelMenu model={items} />
                </Sidebar>
                <div className='flex justify-content-between align-items-center h-full pl-3 bg-green-900'>
                    <button
                        type='button'
                        className='p-link menu-button'
                        aria-haspopup='true'
                        aria-label='Menu'
                        onClick={() => setVisible(true)}>
                        <i className='pi pi-bars text-white text-lg'></i>
                    </button>
                    <div>
                        <h3 className='text-white'>THIỆN NGUYỆN TÂY NGUYÊN</h3>
                    </div>
                    <div></div>
                </div>
            </>
        ) : (
            <>
                <Menubar start={Logo} model={items} />
            </>
        );

    return (
        <div className='main-menu'>
            {/* <Menubar model={items} /> */}
            {menuDisplay}
        </div>
    );
}
