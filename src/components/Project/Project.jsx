import { Carousel } from 'primereact/carousel';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

function Project() {
    const sliderData = [
        {
            image: '/images/project/tree.jpg',
            title_1: 'Dự án trồng rừng',
            link: '/',
        },
        {
            image: '/images/project/tree.jpg',
            title_1: 'Dự án trồng rừng',
            link: '/',
        },
        {
            image: '/images/project/tree.jpg',
            title_1: 'Dự án trồng rừng',
            link: '/',
        },
    ];

    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 3,
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 3,
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 3,
        },
    ];

    const [quoesTxt, setQuoesTxt] = useState([]);

    useEffect(() => {
        setQuoesTxt(sliderData);
    }, []);

    const data = (item) => {
        return (
            <Link href='/'>
                <div className='p-3'>
                    <div className='shadow-2 border-round h-full surface-card'>
                        <Image src={item.image} alt='hero-2' className='w-full h-fit' width={300} height={0} />
                        <div className='p-4'>
                            <span className='block font-medium text-blue-600 mb-3'>{item.title_1}</span>
                        </div>
                    </div>
                </div>
            </Link>
        );
    };

    return (
        <div className='surface-section px-4 py-8 md:px-6 lg:px-8'>
            <div className='font-bold text-5xl text-900 mb-5 text-center'>DỰ ÁN ĐÃ THỰC HIỆN</div>
            <div className='nogutter'>
                <Carousel
                    showNavigators={false}
                    showIndicators={false}
                    numVisible={3}
                    responsiveOptions={responsiveOptions}
                    value={quoesTxt}
                    orientation='horizontal'
                    itemTemplate={data}
                    autoplayInterval={10000}
                />
            </div>
        </div>
    );
}

export default Project;
