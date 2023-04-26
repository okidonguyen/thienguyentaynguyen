import { useRouter } from 'next/router';

export const MenuData = () => {
    
    const router = useRouter();
  
    return [        
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
            label: 'Hành trình',
            url:'/hanh-trinh'
        },
        {
            label: 'Tình nguyện',
            url:'/tinh-nguyen-vien'
        },
        
        {
            label: 'Câu chuyện',
            url:'/ve-chung-toi'
        },
        {
            label: 'Hỗ trợ chúng tôi',
            url:'/ho-tro-chung-toi'
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
