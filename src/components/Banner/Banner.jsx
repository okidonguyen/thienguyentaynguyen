import './Banner.scss';
import Image from 'next/image';
import useTrans from '@/hooks/useTrans';

export default function Banner() {
    const trans = useTrans();
    return (
        <div className='pta-banner'>
            <div className='grid grid-nogutter text-800 bg-orange-100'>
                <div className='col-12 md:col-6 p-6 text-center md:text-left flex align-items-center '>
                    <section>
                        <span className='block text-6xl font-bold mb-1'>{trans.banner.welcome}</span>
                        <div className='text-6xl text-primary font-bold mb-3'>{trans.banner.to}</div>
                        <p className='mt-0 mb-4 text-3xl text-700 line-height-3'>{trans.banner.description}</p>                        
                    </section>
                </div>
                <div className='col-12 md:col-6 overflow-hidden hidden sm:inline-flex'>
                    <Image src={'/images/banner/banner-2.jpg'} width={1366} height={0}  alt='hero-1' className='md:ml-auto block md:h-full' style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
                </div>
            </div>
        </div>
    );
}
