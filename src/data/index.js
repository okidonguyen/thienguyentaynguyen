import { useRouter } from 'next/router';

export const MenuData = () => {
    
    const router = useRouter();
  
    return [
        {
            label: 'Trang chủ',
            command: () => {
                router.push('/');
            },
        },
        {
            label: 'Về chúng tôi',
            command: () => {
                router.push('/ve-chung-toi');
            },
        },
        {
            label: 'Dự án',
            items:[{
                label: "Trồng rừng",
                command: () => {
                    router.push('/');
                },
            },
            {
                label: "Nước sạch",
                command: () => {
                    router.push('/');
                },
            },
            {
                label: "Vì cộng đồng",
                command: () => {
                    router.push('/');
                },
            }]
        },
        {
            label: 'Ban thường trực',
            command: () => {
                router.push('/ban-thuong-truc');
            },
        }, 
        {
            label: 'Tình nguyện viên',
            command: () => {
                router.push('/tinh-nguyen-vien');
            },
        },
        {
            label: 'Hỗ trợ dự án',
            command: () => {
                router.push('/ho-tro-du-an');
            },
        }, 
        
        // {
        //     label: 'Ngôn ngữ',            
        //     items:[{
        //         label: "Tiếng việt",
        //         command: () => changeLang('vi')
        //     },
        //     {
        //         label: "Tiếng Anh",
        //         command: () => changeLang('en')
        //     }]
        // },
    ];
};
