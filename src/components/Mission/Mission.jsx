function Mission() {
    return (
        <div>
            <div className='surface-section px-4 py-8 md:px-6 lg:px-8 text-center'>
                <div className='mb-3 font-bold text-3xl'>
                    <span className='text-900'>Sứ mệnh, </span>
                    <span className='text-green-600'>CỦA CHÚNG TÔI</span>
                </div>
                <div className='text-700 mb-6'>
                    “XÂY DỰNG VÀ BẢO TỒN CÁC GIÁ TRỊ VĂN HOÁ CHO CỘNG ĐỒNG VÙNG TÂY NGUYÊN”
                </div>
                <div className='grid'>
                    <div className='col-12 md:col-4 mb-4 px-4'>
                        <span className='p-3 shadow-2 mb-3 inline-block surface-card' style={{ borderRadius: '10px' }}>
                            <i className='pi pi-users text-4xl text-green-500'></i>
                        </span>
                        <div className='text-900 text-xl mb-3 font-medium'>Giúp đỡ sẻ chia</div>
                        <span className='text-700 line-height-3'>
                            Giúp đỡ những người có hoàn cảnh khó khăn như người nghèo, trẻ em mồ côi, người già neo đơn,
                            người khuyết tật và những người bị bệnh hiểm nghèo.
                        </span>
                    </div>
                    <div className='col-12 md:col-4 mb-4 px-4'>
                        <span className='p-3 shadow-2 mb-3 inline-block surface-card' style={{ borderRadius: '10px' }}>
                            <i className='pi pi-thumbs-up text-4xl text-green-500'></i>
                        </span>
                        <div className='text-900 text-xl mb-3 font-medium'>Cải thiện cuộc sống của cộng đồng</div>
                        <span className='text-700 line-height-3'>
                            Tạo ra những giải pháp sáng tạo cho các vấn đề xã hội và xây dựng một thế giới tốt đẹp hơn, nơi mà mọi người được sống hạnh phúc và đầy
                            đủ.
                        </span>
                    </div>
                    <div className='col-12 md:col-4 mb-4 px-4'>
                        <span className='p-3 shadow-2 mb-3 inline-block surface-card' style={{ borderRadius: '10px' }}>
                            <i className='pi pi-send text-4xl text-green-500'></i>
                        </span>
                        <div className='text-900 text-xl mb-3 font-medium'>Giáo dục và truyền cảm hứng</div>
                        <span className='text-700 line-height-3'>
                            Giáo dục và truyền cảm hứng cho những người tham gia và khuyến khích họ trở thành những
                            người có tình yêu thương và trách nhiệm với cộng đồng.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mission;
