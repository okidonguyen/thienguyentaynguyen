const Footer = () => {
    return (
        <div>
            <div className='bg-green-900 px-4 py-8 md:px-6 lg:px-8'>
                <div className='bg-green-900'>
                    <div className='grid'>
                        <div className='col-12 md:col-4 flex flex-wrap justify-content-start md:mb-0 mb-3'>                           
                            <div className='text-green-300 font-bold text-5xl'>THIỆN NGUYỆN TÂY NGUYÊN</div>
                        </div>
                        <div className='col-12 md:col-4'>
                            <div className='text-white text-lg mb-4 flex flex-wrap' style={{maxWidth:"290px"}}>
                                Đắk Lắk, Đắk Nông, Lâm Đồng, Gia Lai, Kontum
                            </div>
                            <div className='text-white mb-3'>
                                <i className='pi pi-phone border-round p-1 mr-2'></i>(0262) 47 779 9999
                            </div>
                            <div className='text-white mb-3'>
                                <i className='pi pi-inbox border-round p-1 mr-2'></i>tntn@gmail.com
                            </div>
                        </div>
                        <div className='col-12 md:col-4 text-green-200'>
                        <div className='text-white font-bold line-height-3 mb-3'>Dự án thực hiện</div>
                            <a className='text-white line-height-3 block cursor-pointer mb-2'>Trồng rừng</a>
                            <a className='text-white line-height-3 block cursor-pointer mb-2'>Nước sạch</a>
                            <a className='text-white line-height-3 block cursor-pointer mb-2'>Tiếp sức</a>
                            <a className='text-white line-height-3 block cursor-pointer mb-2'>Vì cộng đồng</a>
                            <a className='text-white line-height-3 block cursor-pointer'>Môi trường xanh</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
