import { useRouter } from 'next/router';

export const MenuData = () => {
    
    const router = useRouter();
  
    return [
        {
            label: 'Dự án',
            command: () => {
                router.push('/');
            },
        },
        {
            label: 'Tình nguyện',
            command: () => {
                router.push('/tinh-nguyen');
            },
        },
        {
            label: 'Chương trình',
            command: () => {
                router.push('/chuong-trinh');
            },
        },
        {
            label: 'Câu chuyện',
            command: () => {
                router.push('/cau-chuyen');
            },
        },
        {
            label: 'Đóng góp',
            command: () => {
                router.push('/dong-gop');
            },
        }, 
        {
            label: 'Ban thường trực',
            command: () => {
                router.push('/ban-thuong-truc');
            },
        }, 
        {
            label: 'Ngôn ngữ',            
            items:[{
                label: "Tiếng việt",
                command: () => changeLang('vi')
            },
            {
                label: "Tiếng Anh",
                command: () => changeLang('en')
            }]
        },
    ];
};
