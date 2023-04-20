function Wedo() {
    return (
        <div>
            <div className='surface-ground px-4 py-8 md:px-6 lg:px-8'>
                <div>
                    <div className='text-900 font-bold text-4xl line-height-3 mb-3 text-center'>
                        CHÚNG TÔI LÀM ĐƯỢC NHỮNG GÌ?
                    </div>
                    <p className='text-600 line-height-3 text-lg m-0 mb-6 text-center'>
                        Kết quả những hoạt động Tình nguyện, những con số biết nói
                    </p>
                    <div className='grid surface-card shadow-2' style={{borderRadius:"10px"}}>
                        <div className='col-12 md:col-3 px-5 py-5'>
                            <i className='pi pi-users text-4xl text-blue-600 mb-3'></i>
                            <div className='text-900 font-bold text-4xl mb-3 line-height-3'>2.000.000</div>
                            <p className='text-700 m-0'>Trẻ em được tiếp sức đến trường.</p>
                        </div>
                        <div className='col-12 md:col-3 px-5 py-5'>
                            <i className='pi pi-chart-line text-4xl text-orange-500 mb-3'></i>
                            <div className='text-900 font-bold text-4xl mb-3 line-height-3'>300 TR</div>
                            <p className='text-700 m-0'>Số tiền kêu gọi được để thực hiện dự án.</p>
                        </div>
                        <div className='col-12 md:col-3 px-5 py-5'>
                            <i className='pi pi-globe text-4xl text-cyan-600 mb-3'></i>
                            <div className='text-900 font-bold text-4xl mb-3 line-height-3'>1.000.000</div>
                            <p className='text-700 m-0'>Cây rừng đã được kêu gọi và trồng xuống.</p>
                        </div>
                        <div className='col-12 md:col-3 px-5 py-5'>
                            <i className='pi pi-map text-4xl text-purple-500 mb-3'></i>
                            <div className='text-900 font-bold text-4xl mb-3 line-height-3'>3000 km</div>
                            <p className='text-700 m-0'>Quảng đường Tình nguyện viên đã đi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Wedo;
