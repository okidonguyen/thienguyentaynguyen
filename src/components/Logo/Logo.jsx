import './Logo.scss';
import ptaLogo from '@/images/PTALOGO.png';
import Image from 'next/image';
import useTrans from '@/hooks/useTrans';

export default function Logo() {
    const trans = useTrans();
    return (
        <div className='pta-logo' style={{position:"relative", width:"vw", height:"vh"}}>
            <Image className='w-full h-auto' src={ptaLogo}  alt='logo' priority/>
            <p>***</p>
            <p>
            Với tỉnh thức, hơi thở nhẹ có thể đưa chúng ta đi trọn con đường tâm linh.
            </p>
        </div>
    );
}
