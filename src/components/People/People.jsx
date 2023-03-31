import Image from 'next/image';

function People() {
    return (
        <div>
            <div className='surface-ground px-4 py-8 md:px-6 lg:px-8'>
                <div className='font-bold text-900 text-5xl mb-3 text-center'>BAN THƯỜNG TRỰC</div>
                <div className='text-xl line-height-3 text-600 mb-6 text-center'>
                    Thành viên cốt cán của Thiện nguyện Tây Nguyên
                </div>
                <div className='grid'>                    
                    <div className='col-12 md:col-6 lg:col-3'>
                        <div className='p-3 m-1 shadow-2 surface-card'>
                            <Image
                                src='/images/people/tranduchau.jpg'
                                alt='hero-2'
                                width={200}
                                height={250}
                                className='w-full h-fit'
                            />
                            <div className=''>
                                <div className='pr-3'>
                                    <div className='text-xl text-900 font-medium mb-2'>Trần Đức Hậu</div>
                                </div>
                                <div className='pr-3'>
                                    <div className='text-blue-600'>CEO</div>
                                </div>
                                <div className='flex justify-content-end'>
                                    <button className='p-button p-component p-button-rounded p-button-text p-button-outlined p-button-plain mr-2 p-button-icon-only'>
                                        <span className='p-button-icon p-c pi pi-phone'></span>
                                    </button>
                                    <button className='p-button p-component p-button-rounded p-button-text p-button-outlined p-button-plain p-button-icon-only'>
                                        <span className='p-button-icon p-c pi pi-facebook'></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 md:col-6 lg:col-3'>
                        <div className='p-3 m-1 shadow-2 surface-card'>
                            <Image
                                src='/images/people/tranduchau.jpg'
                                alt='hero-2'
                                width={200}
                                height={250}
                                className='w-full h-fit'
                            />
                            <div className=''>
                                <div className='pr-3'>
                                    <div className='text-xl text-900 font-medium mb-2'>Trần Đức Hậu</div>
                                </div>
                                <div className='pr-3'>
                                    <div className='text-blue-600'>CEO</div>
                                </div>
                                <div className='flex justify-content-end'>
                                    <button className='p-button p-component p-button-rounded p-button-text p-button-outlined p-button-plain mr-2 p-button-icon-only'>
                                        <span className='p-button-icon p-c pi pi-phone'></span>
                                    </button>
                                    <button className='p-button p-component p-button-rounded p-button-text p-button-outlined p-button-plain p-button-icon-only'>
                                        <span className='p-button-icon p-c pi pi-facebook'></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 md:col-6 lg:col-3'>
                        <div className='p-3 m-1 shadow-2 surface-card'>
                            <Image
                                src='/images/people/tranduchau.jpg'
                                alt='hero-2'
                                width={200}
                                height={250}
                                className='w-full h-fit'
                            />
                            <div className=''>
                                <div className='pr-3'>
                                    <div className='text-xl text-900 font-medium mb-2'>Trần Đức Hậu</div>
                                </div>
                                <div className='pr-3'>
                                    <div className='text-blue-600'>CEO</div>
                                </div>
                                <div className='flex justify-content-end'>
                                    <button className='p-button p-component p-button-rounded p-button-text p-button-outlined p-button-plain mr-2 p-button-icon-only'>
                                        <span className='p-button-icon p-c pi pi-phone'></span>
                                    </button>
                                    <button className='p-button p-component p-button-rounded p-button-text p-button-outlined p-button-plain p-button-icon-only'>
                                        <span className='p-button-icon p-c pi pi-facebook'></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 md:col-6 lg:col-3'>
                        <div className='p-3 m-1 shadow-2 surface-card'>
                            <Image
                                src='/images/people/tranduchau.jpg'
                                alt='hero-2'
                                width={200}
                                height={250}
                                className='w-full h-fit'
                            />
                            <div className=''>
                                <div className='pr-3'>
                                    <div className='text-xl text-900 font-medium mb-2'>Trần Đức Hậu</div>
                                </div>
                                <div className='pr-3'>
                                    <div className='text-blue-600'>CEO</div>
                                </div>
                                <div className='flex justify-content-end'>
                                    <button className='p-button p-component p-button-rounded p-button-text p-button-outlined p-button-plain mr-2 p-button-icon-only'>
                                        <span className='p-button-icon p-c pi pi-phone'></span>
                                    </button>
                                    <button className='p-button p-component p-button-rounded p-button-text p-button-outlined p-button-plain p-button-icon-only'>
                                        <span className='p-button-icon p-c pi pi-facebook'></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default People;