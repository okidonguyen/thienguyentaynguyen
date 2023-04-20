import Image from 'next/image';
const SupportMe = () => {
    return (
        <div>
            <div className='surface-section px-4 py-8 md:px-6 lg:px-8'>
                <div>
                    <div className='text-900 mb-3 font-bold text-4xl text-center uppercase'>Đồng hành cùng chúng tôi</div>
                    <div className='text-600 mb-6 line-height-3 text-xl text-center'>
                        <p>Mọi đóng góp xin gửi về:</p>
                        <p>Số tài khoản: XXXX - Họ và tên: XXXX</p>
                        <p>Ngân Hàng XXXX - Chi Nhánh: XXXX</p>                        
                        <Image src={'/images/qr/code.png'} width={300} height={0}  alt='QR CODE' className='w-auto h-full' />
                        <p> -------------- </p>
                        <p>Doanh nghiệp hoặc Tổ chức quan tâm hỗ trợ cho các dự án</p>
                        <p>có thể liên hệ với chúng tôi qua thông tin sau:</p>
                        <p>tinhnguyentaynguyen.vvc@gmail.com - (+84) 976 273 812 (Mr. Hậu)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportMe;
