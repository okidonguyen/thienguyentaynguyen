import { Carousel } from 'primereact/carousel';
import { useState } from 'react';
import './Slider.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

function Slider() {
    const sliderData = [
        {
            image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg',
            title_1: 'TÌNH NGUYỆN TÂY NGUYÊN',
            title_2: 'CHUNG TAY VÌ CỘNG ĐỒNG TÂY NGUYÊN',
            description_1:
                'Mạng lưới tình nguyện khu vực Tây Nguyên mong muốn sẽ là nơi kết nối các CLB, Đội, Nhóm các tỉnh Đăk Lăk, Gia Lai, Kom Tum, Đăk Nông, Lâm Đồng để cùng hòa nhịp với "Mạng lưới tình nguyện quốc gia"',
            description_2: '',
        },
    ];

        const [quoesTxt, setQuoesTxt] = useState([]);

    useEffect(() => {
        setQuoesTxt(sliderData);
    }, []);

    const data = (item) => {
        return (
            <div className='pta-Slider'>
                <Link href='/'>
                    <div className='relative pt-8 pb-8 pr-6 pl-6 overflow-hidden'>               
                        <Image
                            src='/images/pexels-akil-mazumder-1072824.jpg'
                            alt='slider'
                            className='absolute top-0 left-0 w-auto h-full block md:w-full'
                            width={1366} height={0} priority
                        />
                        <div
                            className='text-center my-6 relative pt-5 pb-5'
                            style={{ background: 'radial-gradient(black, transparent)' }}>
                            <div className='text-4xl text-white font-bold mb-1 pt-4'>{item.title_1}</div>
                            <div className='text-3xl text-primary font-bold mb-4'>{item.title_2}</div>
                            <p
                                className='mt-0 mb-2 line-height-3 text-center mx-auto text-white'
                                style={{ maxWidth: '600px' }}>
                                {item.description_1}
                            </p>
                            <p className='text-sm mt-4 mb-4 line-height-3 text-white'>
                            {item.description_2}
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        );
    };

    return (
        <div>
            <Carousel
                showNavigators={false}
                showIndicators={false}
                value={quoesTxt}
                orientation='horizontal'
                itemTemplate={data}
                autoplayInterval={10000}
            />
        </div>
    );
}

export default Slider;
