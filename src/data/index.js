import { useRouter } from 'next/router';

export const MenuData = () => {
    
    const router = useRouter();
  
    return [                  
        {
            label: 'Về chúng tôi',
            url:'/ve-chung-toi'
        },      
        {
            label: 'Dự án',
            items:[{
                label: "Trồng rừng",
                url:'/trong-rung',
            },]
        },
        {
            label: 'Tin tức',
            url:'/tin-tuc'
        },
        {
            label: 'Tình nguyện viên',
            url:'/tinh-nguyen-vien'
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
